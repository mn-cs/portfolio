import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not configured." },
      { status: 500 },
    );
  }

  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    const message = error?.message ?? "An unexpected error occurred.";

    // The Gemini SDK surfaces HTTP status codes in the error message.
    const status = /\b429\b/.test(message)
      ? 429
      : /\b(400|404)\b/.test(message)
        ? 400
        : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
