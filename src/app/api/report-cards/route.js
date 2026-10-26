
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const cleanEmail =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const publishableKey =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json(
        { error: "Supabase configuration is missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      publishableKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    // Check an existing Supabase access token.
    const authorization =
      request.headers.get("authorization") || "";

    const token = authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : null;

    if (!token) {
      return NextResponse.json(
        { error: "Authorized parent access is required." },
        { status: 401 }
      );
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json(
        { error: "Invalid or expired parent session." },
        { status: 401 }
      );
    }

    const parentEmail = user.email?.trim().toLowerCase();

    if (
      !parentEmail ||
      parentEmail !== cleanEmail ||
      !user.email_confirmed_at
    ) {
      return NextResponse.json(
        { error: "Email is not authorized for this account." },
        { status: 403 }
      );
    }

    // Apply the verified user's identity to RLS policies.
    const userSupabase = createClient(
      supabaseUrl,
      publishableKey,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    const { data, error } = await userSupabase
      .from("term2_documents")
      .select("id, grade, section, file_path")
      .eq("email", parentEmail)
      .order("grade")
      .order("section");

    if (error) {
      console.error("Report lookup failed:", error.message);

      return NextResponse.json(
        { error: "Unable to retrieve report cards." },
        { status: 500 }
      );
    }

    if (!data?.length) {
      return NextResponse.json({
        success: true,
        reports: [],
        message: "No Term-2 report cards available.",
      });
    }

    const reports = [];

    for (const report of data) {
      const { data: signed, error: signedError } =
        await userSupabase.storage
          .from("pt-2-private")
          .createSignedUrl(report.file_path, 60);

      if (signedError || !signed?.signedUrl) {
        console.error("PDF access failed:", signedError);
        continue;
      }

      reports.push({
        id: report.id,
        grade: report.grade,
        section: report.section,
        url: signed.signedUrl,
      });
    }

    return NextResponse.json(
      {
        success: true,
        reports,
        message: reports.length
          ? `${reports.length} report card(s) found.`
          : "Report cards could not be opened.",
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Report Card API Error:", error);

    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}
