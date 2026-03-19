"use client";

import dynamic from "next/dynamic";

const Grainient = dynamic(() => import("@/components/Grainient"), { ssr: false });

export function SiteBackground() {
  return (
    <div
      className="fixed inset-0 z-0 w-full h-full"
      aria-hidden
    >
      <Grainient
        timeSpeed={0.15}
        warpStrength={0.8}
        warpFrequency={4}
        warpSpeed={1.2}
        warpAmplitude={60}
        grainAmount={0.06}
        contrast={1.2}
        saturation={0.9}
        color1="#f0fdfa"
        color2="#99f6e4"
        color3="#0d9488"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
