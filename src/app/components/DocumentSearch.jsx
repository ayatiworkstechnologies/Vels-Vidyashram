"use client";

import { useState } from "react";
import { Mail, ArrowRight, Lock } from "lucide-react";
import { supabase } from "../components/supabase";

export default function DocumentSearch() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("Searching...");

    try {
      const { data, error } = await supabase
        .from("user_documents")
        .select("file_path")
        .ilike("email", cleanEmail)
        .maybeSingle();

      if (error) {
        console.error("Supabase query error:", error);
        setMessage("Unable to search right now.");
        return;
      }

      if (!data || !data.file_path) {
        setMessage("No PDF found for this email.");
        return;
      }

      window.open(data.file_path, "_blank", "noopener,noreferrer");
      setMessage("Document opened in a new tab.");
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex justify-center bg-white px-4 py-20">
      <div className="w-full max-w-2xl rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-center text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          Enter your mail id to get the term-1 Results (pallavaram)
        </h2>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              value={email}
              placeholder="Enter your mail ID"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70 sm:whitespace-nowrap"
          >
            {loading ? "Searching..." : "Get Your Results"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>

        {message && (
          <p className="mt-3 text-center text-sm text-slate-500 sm:text-left">
            {message}
          </p>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <Lock className="h-4 w-4 text-emerald-600" />
          Your data is secure. We never share your email.
        </div>
      </div>
    </div>
  );
}