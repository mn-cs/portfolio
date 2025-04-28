// app/api/hello/route.ts

export async function GET() {
  return new Response("Hello from backend", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
