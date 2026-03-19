"use client";

import { useState } from "react";
import Link from "next/link";

export default function JourneyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    story: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or email service
    console.log("Journey submission:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-1 focus:ring-[#0d9488]/40 focus:border-[#0d9488]/50 placeholder:text-slate-500";

  return (
    <div>
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
            Share your journey
          </p>
          <h1 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl text-[#1a1a1a] leading-snug">
            Your story can offer hope to families walking a similar path.
          </h1>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16 p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60">
              <div className="w-14 h-14 rounded-full bg-[#0d9488]/20 text-[#0d9488] flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold text-[#1a1a1a] mb-2">
                Thank you for sharing
              </h2>
              <p className="text-slate-700 text-sm mb-6">
                We&apos;ll review your story and may share it to help other families. We&apos;ll be in touch if we have questions.
              </p>
              <Link href="/resources" className="text-[#0d9488] font-medium hover:underline text-sm">
                Explore resources →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name (or nickname)
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. Sarah M. or Anonymous"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                  Title of your story
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. Our first year with a CHD baby"
                />
              </div>
              <div>
                <label htmlFor="story" className="block text-sm font-medium text-slate-700 mb-1">
                  Your story
                </label>
                <textarea
                  id="story"
                  name="story"
                  required
                  rows={6}
                  value={formData.story}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[120px]`}
                  placeholder="Share as much or as little as you feel comfortable..."
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 rounded border-slate-400 text-[#0d9488] focus:ring-[#0d9488]/40"
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  I consent to [Foundation Name] potentially sharing my story (anonymized or with the name I provided) on this website. My email will not be published.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0d9488]/90 text-white font-medium hover:bg-[#0f766e] transition-colors"
              >
                Submit
              </button>
            </form>
          )}

          <div className="mt-10 p-5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50">
            <p className="text-slate-700 text-sm">
              Submissions are reviewed before publishing. Your privacy matters to us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
