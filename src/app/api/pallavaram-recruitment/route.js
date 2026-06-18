import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/vals-pallavaram/recruitment/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key":
            "541bfb43f0a4f07d7b49c7e8e5ba7fc40e7f1e29f5572f540b6be804a6cfec3e",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Server error",
      },
      { status: 500 }
    );
  }
}