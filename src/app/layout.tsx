import type { Metadata } from "next";
import Image from "next/image";
import { Source_Serif_4, Nunito_Sans } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { SiteBackground } from "@/components/SiteBackground";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "[Foundation Name] | Support for Cardiac Patients & Families",
  description:
    "A volunteer service with support and comfort for families. Helping cardiac patients and families find resources, share their journeys, and learn about heart diseases and congenital heart defects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${nunitoSans.variable}`}
    >
      <body className="antialiased min-h-screen bg-transparent text-[#1a1a1a] font-[family-name:var(--font-nunito)]">
        <SiteBackground />
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-[#fdfbf9]/90 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="[Foundation Name] - Home"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
                priority
              />
              <span className="font-[family-name:var(--font-source-serif)] text-xl md:text-2xl font-medium text-[#1a1a1a] hidden sm:inline">
                [Foundation Name]
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/resources"
                className="text-slate-600 hover:text-[#0d9488] transition-colors text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                href="/journey"
                className="text-slate-600 hover:text-[#0d9488] transition-colors text-sm font-medium"
              >
                Share Your Journey
              </Link>
              <Link
                href="/heart-info"
                className="text-slate-600 hover:text-[#0d9488] transition-colors text-sm font-medium"
              >
                Heart Disease Info
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-full bg-[#0d9488] text-white text-sm font-medium hover:bg-[#0f766e] transition-colors"
              >
                Contact
              </Link>
            </div>
            <MobileNav />
          </nav>
        </header>
        <main className="relative z-10 pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
