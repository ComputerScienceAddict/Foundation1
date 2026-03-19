"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24">
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-[#0d9488] text-xs font-medium tracking-[0.2em] uppercase mb-6 border-b border-[#0d9488]/30 pb-2">
          Volunteer Service
        </span>
        <h1 className="font-[family-name:var(--font-source-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#1a1a1a] leading-[1.12] tracking-[-0.02em] mb-8 max-w-2xl mx-auto">
          Supporting cardiac patients and families,{" "}
          <span className="italic text-[#0d9488]">one heart at a time</span>
        </h1>
        <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-xl mx-auto">
          Find resources, share your journey, and learn about heart diseases and
          congenital heart defects. You are not alone.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <Link
            href="/resources"
            className="group px-7 py-3.5 rounded-full bg-[#0d9488] text-white font-semibold shadow-lg shadow-[#0d9488]/25 hover:shadow-xl hover:shadow-[#0d9488]/30 hover:bg-[#0f766e] hover:scale-105 active:scale-[1.02] transition-all duration-200"
          >
            Find Resources
          </Link>
          <Link
            href="/journey"
            className="group px-7 py-3.5 rounded-full border-2 border-[#0d9488] text-[#0d9488] font-semibold bg-white/40 backdrop-blur-sm hover:bg-[#0d9488] hover:text-white hover:shadow-lg hover:shadow-[#0d9488]/20 active:scale-[1.02] transition-all duration-200"
          >
            Share Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
