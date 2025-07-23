// app/api/ask/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key not configured." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // ----------------------------------------------------
    // CHANGE THIS LINE: Use gemini-1.5-flash or gemini-1.5-pro
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // Or, if you want a more capable model (potentially higher cost/latency):
    // const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    // ----------------------------------------------------

    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Error in Gemini API route:", error);
    if (error.response && error.response.status === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    if (
      error.response &&
      error.response.status === 400 &&
      error.response.data.error.message.includes("safety")
    ) {
      return NextResponse.json(
        { error: "Response blocked due to safety concerns." },
        { status: 400 }
      );
    }
    // Catch the specific 404 error if it still occurs with new models
    if (error.response && error.response.status === 404) {
      return NextResponse.json(
        {
          error:
            "Model not found or not accessible. Check your API key and model name.",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "An unexpected error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
