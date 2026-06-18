import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/vels-pallavaram/recruitment/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key":
            "5f2b5ad16d7865ac66dbf53fea74632097a6f5469b0b58f7f02e6bbc10ffcc9f",
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