"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/resources", label: "Resources" },
    { href: "/journey", label: "Share Your Journey" },
    { href: "/heart-info", label: "Heart Disease Info" },
  ];
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-slate-100"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 py-4 px-4 bg-[#fdfbf9] border-b border-slate-200 shadow-lg flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-slate-600 hover:text-[#0d9488]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 py-2 text-center rounded-full bg-[#0d9488] text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
