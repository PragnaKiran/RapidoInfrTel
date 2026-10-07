"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RapidoLogo({ showTagline = true, size = "default", className = "" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  // Dimensions for high-contrast official Rapido-Logo-White-Clean.png (aspect ratio 1024:330 = ~3.10:1)
  const logoHeight = isSmall ? 26 : isLarge ? 38 : 32;
  const logoWidth = Math.round(logoHeight * 3.10); // e.g. 32 * 3.10 ≈ 99px; 26 * 3.10 ≈ 81px
  const infratelTextSize = isSmall ? "text-[11px]" : isLarge ? "text-[15px]" : "text-[13px]";
  const llpBadgeSize = isSmall ? "text-[8px]" : "text-[9px]";

  return (
    <Link href="/" className={`inline-flex flex-col group ${className}`} style={{ width: `${logoWidth}px` }}>
      {/* 1. Official High-Contrast White Brand Logo Image (Crisp & Perfectly Visible on Dark Backdrops) */}
      <div className="relative flex-shrink-0 flex items-center justify-start w-full">
        <img
          src="/Rapido-Logo-White-Clean.png"
          alt="Rapido® Official Brand Logo"
          width={logoWidth}
          height={logoHeight}
          className="transition-transform duration-300 group-hover:scale-[1.02] object-contain drop-shadow-[0_2px_12px_rgba(234,99,32,0.35)] w-full"
          style={{ height: `${logoHeight}px`, width: "100%" }}
        />
      </div>

      {/* 2. Second Line: INFRATEL LLP spanning the EXACT same width as the logo */}
      <div className="flex items-center justify-between w-full leading-none mt-1 px-0.5">
        <span className={`font-black tracking-[0.16em] text-cloud-400 ${infratelTextSize} uppercase`}>
          INFRATEL
        </span>
        <span className={`${llpBadgeSize} font-bold text-slate-300 border border-slate-700/90 bg-slate-900/90 px-1 py-0.5 rounded tracking-wider flex-shrink-0`}>
          LLP
        </span>
      </div>
    </Link>
  );
}
