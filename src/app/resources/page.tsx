"use client";

import { useState } from "react";
import Link from "next/link";

const resourceCategories = [
  {
    id: "support",
    title: "Support Groups",
    items: [
      { name: "Pediatric Congenital Heart Association (PCHA)", url: "https://www.conqueringchd.org/", desc: "National support for families with children with CHD" },
      { name: "Mended Little Hearts", url: "https://mendedlittlehearts.org/", desc: "Support for parents of children with heart defects" },
      { name: "Adult Congenital Heart Association", url: "https://www.achaheart.org/", desc: "Resources for adults living with CHD" },
    ],
  },
  {
    id: "financial",
    title: "Financial Assistance",
    items: [
      { name: "Children's Heart Foundation", url: "https://childrensheartfoundation.org/", desc: "Grants and assistance for families" },
      { name: "Ronald McDonald House Charities", url: "https://www.rmhc.org/", desc: "Housing near hospitals for families" },
      { name: "Make-A-Wish Foundation", url: "https://wish.org/", desc: "Wishes for children with critical illnesses" },
    ],
  },
  {
    id: "medical",
    title: "Medical Information",
    items: [
      { name: "American Heart Association", url: "https://www.heart.org/", desc: "Trusted heart health information" },
      { name: "Centers for Disease Control - CHD", url: "https://www.cdc.gov/heart-defects/", desc: "CDC resources on congenital heart defects" },
    ],
  },
];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = resourceCategories
    .filter((cat) => !filter || cat.id === filter)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          !search ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div>
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
            Resources
          </p>
          <h1 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl text-[#1a1a1a] leading-snug">
            Support groups, financial help, medical info.
          </h1>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-1 focus:ring-[#0d9488]/40 focus:border-[#0d9488]/50 placeholder:text-slate-500"
              aria-label="Search resources"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !filter
                    ? "bg-[#0d9488]/90 text-white"
                    : "bg-white/40 backdrop-blur-sm text-slate-600 hover:bg-white/60 border border-white/60"
                }`}
              >
                All
              </button>
              {resourceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === cat.id
                      ? "bg-[#0d9488]/90 text-white"
                      : "bg-white/40 backdrop-blur-sm text-slate-600 hover:bg-white/60 border border-white/60"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {filtered.length === 0 ? (
              <p className="text-slate-600 text-center py-16">
                Nothing found. Try a different search or category.
              </p>
            ) : (
              filtered.map((cat) => (
                <div key={cat.id}>
                  <h2 className="font-[family-name:var(--font-source-serif)] text-lg font-semibold text-[#1a1a1a] mb-3">
                    {cat.title}
                  </h2>
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 md:p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 hover:border-[#0d9488]/30 transition-all"
                      >
                        <h3 className="font-medium text-[#1a1a1a]">{item.name}</h3>
                        <p className="text-slate-700 text-sm mt-1">{item.desc}</p>
                        <span className="inline-flex items-center gap-1 mt-2 text-[#0d9488] text-sm">
                          Visit →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-12 p-5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50">
            <p className="text-slate-700 text-sm">
              Know a resource we should add?{" "}
              <Link href="/#contact" className="text-[#0d9488] font-medium hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
