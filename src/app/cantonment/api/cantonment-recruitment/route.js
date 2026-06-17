export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/vels-cantonment/recruitment/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.VELS_CANTONMENT_1620067fe55d5ae50f2817fb76e58fa37b744820f96fef78feca5f731a909ddc,
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