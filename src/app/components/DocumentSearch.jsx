
"use client";

import { useState } from "react";
import { Mail, ArrowRight, Lock } from "lucide-react";

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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))  {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/report-cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to process your request."
        );
      }

      setMessage(
        result.message ||
          "Your request has been received."
      );
    } catch (error) {
      console.error("Report card request error:", error);

      setMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !loading) {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center bg-white px-4 py-20">
      <div className="w-full max-w-2xl rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-center text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          Enter your mail ID to get the Term-2 Results
          (Pallavaram)
        </h2>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="email"
              value={email}
              placeholder="Enter your mail ID"
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage("");
              }}
              onKeyDown={handleKeyDown}
              autoComplete="email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70 sm:whitespace-nowrap"
          >
            {loading ? "Searching..." : "Get Your Results"}

            {!loading && (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </div>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className="mt-3 text-sm text-slate-500"
          >
            {message}
          </p>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <Lock className="h-4 w-4 text-emerald-600" />
          Your report cards are securely protected.
        </div>
      </div>
    </div>
  );
}
