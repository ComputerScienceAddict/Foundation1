import Link from "next/link";

const conditions = [
  {
    id: "chd",
    title: "Congenital Heart Defects (CHD)",
    summary:
      "Birth defects that affect the structure of the heart and how blood flows. They are the most common type of birth defect.",
    details: [
      "Present at birth, though some are not diagnosed until later in life.",
      "Range from mild (small holes) to severe (missing or malformed parts of the heart).",
      "May require surgery, medications, or ongoing care.",
    ],
    examples: ["Tetralogy of Fallot", "Transposition of the great arteries", "Ventricular septal defect (VSD)", "Atrial septal defect (ASD)", "Hypoplastic left heart syndrome"],
  },
  {
    id: "acquired",
    title: "Acquired Heart Conditions",
    summary:
      "Heart problems that develop after birth, including infections, cardiomyopathy, and rhythm disorders.",
    details: [
      "Can affect children and adults.",
      "May result from infections (e.g., Kawasaki disease), genetics, or other factors.",
      "Treatment depends on the specific condition and severity.",
    ],
    examples: ["Cardiomyopathy", "Arrhythmias", "Kawasaki disease", "Rheumatic heart disease"],
  },
];

export default function HeartInfoPage() {
  return (
    <div>
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
            Heart disease info
          </p>
          <h1 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl text-[#1a1a1a] leading-snug">
            Congenital defects, acquired conditions, and what to expect.
          </h1>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-5 rounded-xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/20">
            <p className="text-amber-900/90 text-sm">
              <strong>Disclaimer:</strong> For general education only. Not a substitute for professional medical advice. Always consult your care team.
            </p>
          </div>

          {conditions.map((cond) => (
            <article
              key={cond.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60"
            >
              <h2 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold text-[#1a1a1a] mb-3">
                {cond.title}
              </h2>
              <p className="text-slate-700 mb-4 text-sm">{cond.summary}</p>
              <ul className="space-y-2 mb-4">
                {cond.details.map((item, i) => (
                  <li key={i} className="flex gap-2 text-slate-700 text-sm">
                    <span className="text-[#0d9488] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-1">
                  Examples
                </h3>
                <p className="text-slate-700 text-sm">
                  {cond.examples.join(", ")}
                </p>
              </div>
            </article>
          ))}

          <div className="p-5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50">
            <p className="text-slate-700 text-sm">
              Need more? Visit our <Link href="/resources" className="text-[#0d9488] font-medium hover:underline">Resources</Link> page or <Link href="/#contact" className="text-[#0d9488] font-medium hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
