export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/vels-thalambur/recruitment/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.VELS_THALAMBUR_,
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    return new Response(text || "{}", {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return Response.json(
      { detail: "Server error", error: error.message },
      { status: 500 }
    );
  }
}