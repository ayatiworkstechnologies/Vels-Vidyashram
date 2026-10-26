// File location: src/app/api/report-cards/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const TABLE = "term2_documents";
const BUCKET = "pt-2";

export async function POST(request) {
  try {
    const body = await request.json();

    const cleanEmail =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Server-only key. Never use NEXT_PUBLIC_ for this one.
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { error: "Supabase configuration is missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // Escape ilike wildcards so the match is exact (but case-insensitive)
    const safeEmail = cleanEmail.replace(/[\\%_]/g, "\\$&");

    const { data: reports, error } = await supabase
      .from(TABLE)
      .select("id, grade, section, file_path")
      .ilike("email", safeEmail)
      .order("grade")
      .order("section");

    if (error) {
      console.error("Supabase lookup error:", error);

      // In dev, show the real reason on the page to make debugging easy
      const devDetail =
        process.env.NODE_ENV !== "production" ? ` (${error.message})` : "";

      return NextResponse.json(
        { error: `Unable to retrieve report cards.${devDetail}` },
        { status: 500 }
      );
    }

    if (!reports?.length) {
      return NextResponse.json({
        success: true,
        reports: [],
        message: "No Term-2 report card found.",
      });
    }

    const result = [];

    for (const report of reports) {
      if (!report.file_path) continue;

      const { data: pdfData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(report.file_path);

      if (!pdfData?.publicUrl) continue;

      result.push({
        id: report.id,
        grade: report.grade,
        section: report.section,
        url: pdfData.publicUrl,
      });
    }

    return NextResponse.json(
      {
        success: true,
        reports: result,
        message: result.length
          ? `${result.length} report card(s) found.`
          : "Report card PDF unavailable.",
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Report Card API Error:", error);
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}