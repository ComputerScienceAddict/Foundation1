import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";

const blocks = [
  {
    id: "mission",
    label: "Our Mission",
    title: "[Foundation Name]",
    body: "We are a volunteer service with support and comfort for families—especially parents navigating the journey with a baby with a heart condition. We provide resources, a community to share stories, and trusted information about heart diseases and congenital heart defects so no family has to walk this path alone.",
    image: "/images/nicu-twins.png",
    imageAlt: "Newborn twins in NICU receiving care—support and comfort for families",
    reverse: false,
    cta: null,
    ctaHref: null,
  },
  {
    id: "resources",
    label: "Resources",
    title: "Find what you need",
    body: "Support groups, financial assistance, housing near hospitals, and trusted medical links. We’ve gathered the resources that families tell us helped most—all in one place.",
    image: "/images/nicu-baby-bow.png",
    imageAlt: "Newborn in NICU—volunteer support and comfort for families",
    reverse: true,
    cta: "Browse resources",
    ctaHref: "/resources",
  },
  {
    id: "journey",
    label: "Stories",
    title: "Share your journey",
    body: "Your story can help another family feel less alone. Many parents have found strength in sharing—and in reading—what others have been through. No pressure, no judgment.",
    image: "/images/nicu-baby-sleeping.png",
    imageAlt: "Newborn sleeping in NICU—families supported through their journey",
    reverse: false,
    cta: "Share yours",
    ctaHref: "/journey",
  },
  {
    id: "learn",
    label: "Learn",
    title: "Heart disease & defects",
    body: "Plain-language information about congenital heart defects and acquired heart conditions. What they are, examples you might hear from your care team, and where to go for more.",
    image: "/images/nicu-baby-crib.png",
    imageAlt: "Newborn in hospital crib—learning about heart care and support",
    reverse: true,
    cta: "Read more",
    ctaHref: "/heart-info",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {blocks.map((block) => (
        <section key={block.id} className="py-12 md:py-20 px-4 sm:px-6">
          <div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            <div className={block.reverse ? "md:order-2" : ""}>
              <div className="p-6 md:p-8 lg:p-10 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60">
                <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
                  {block.label}
                </p>
                <h2 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4">
                  {block.title}
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">{block.body}</p>
                {block.cta && block.ctaHref && (
                  <Link
                    href={block.ctaHref}
                    className="inline-flex items-center gap-1.5 text-[#0d9488] font-medium hover:underline"
                  >
                    {block.cta}
                    <span>→</span>
                  </Link>
                )}
              </div>
            </div>
            <div
              className={`relative aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden ${
                block.reverse ? "md:order-1" : ""
              }`}
            >
              <Image
                src={block.image}
                alt={block.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </section>
      ))}

      {/* Who We Serve */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
            Who We Serve
          </p>
          <h2 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8">
            Families navigating heart care deserve support and comfort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/nicu-baby-care.png"
                alt="Newborn receiving specialized care—volunteer support for NICU families"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/nicu-baby-incubator.png"
                alt="Newborn in incubator—comfort and support for families"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Volunteers */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden max-w-md mx-auto md:mx-0">
              <Image
                src="/images/volunteer.png"
                alt="Volunteer providing support and comfort for families"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6 md:p-8 lg:p-10 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60">
              <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
                Our Volunteers
              </p>
              <h2 className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4">
                Real people offering support and comfort
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Our volunteer service is made up of people who want to help families through difficult times. Whether you&apos;ve walked this path yourself or simply want to lend a hand, there&apos;s a place for you.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 mt-6 text-[#0d9488] font-medium hover:underline"
              >
                Get in touch to volunteer
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 sm:px-6"
      >
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50">
          <p className="font-[family-name:var(--font-source-serif)] text-slate-600 text-sm mb-2">
            Contact
          </p>
          <p className="font-[family-name:var(--font-source-serif)] text-2xl sm:text-3xl text-[#1a1a1a] leading-snug mb-6">
            Questions? Want to connect? We read everything.
          </p>
          <a
            href="mailto:contact@example.org"
            className="inline-block text-[#0d9488] font-medium hover:underline underline-offset-4 decoration-[#0d9488]/60"
          >
            contact@example.org
          </a>
          <p className="mt-10 text-slate-600 text-xs">
            Volunteer service with support and comfort for families
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-700">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-[family-name:var(--font-source-serif)] text-lg text-[#1a1a1a]">
              [Foundation Name]
            </span>
          </Link>
          <p className="text-slate-600 text-sm">
            Volunteer service with support and comfort for families
          </p>
        </div>
      </footer>
    </div>
  );
}
