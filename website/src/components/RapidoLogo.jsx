"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RapidoLogo({ showTagline = true, size = "default", className = "" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  // Dimensions for full official Rapido-Logo.png (aspect ratio ~2.44:1)
  const logoHeight = isSmall ? 28 : isLarge ? 40 : 34;
  const logoWidth = Math.round(logoHeight * 2.44);
  const infratelTextSize = isSmall ? "text-xs" : isLarge ? "text-base" : "text-sm";
  const llpBadgeSize = isSmall ? "text-[8px]" : "text-[9px]";

  return (
    <Link href="/" className={`inline-flex flex-col group ${className}`}>
      {/* 1. Official Full Brand Logo Image */}
      <div className="relative flex-shrink-0 flex items-center">
        <img
          src="/Rapido-Logo.png"
          alt="Rapido® Official Brand Logo"
          width={logoWidth}
          height={logoHeight}
          className="transition-transform duration-300 group-hover:scale-[1.02] object-contain drop-shadow-[0_2px_10px_rgba(234,99,32,0.25)]"
          style={{ height: `${logoHeight}px`, width: "auto" }}
        />
      </div>

      {/* 2. Second Line: INFRATEL (cloud-400) + LLP (slate badge) */}
      <div className="flex items-center gap-1.5 leading-none mt-1 pl-0.5">
        <span className={`font-black tracking-wider text-cloud-400 ${infratelTextSize} uppercase`}>
          INFRATEL
        </span>
        <span className={`${llpBadgeSize} font-bold text-slate-300 border border-slate-700/90 bg-slate-900/90 px-1 py-0.2 rounded tracking-wider`}>
          LLP
        </span>
        {showTagline && (
          <span className="hidden sm:inline text-slate-400 text-[10px] font-medium tracking-wide ml-1 border-l border-slate-800 pl-2">
            Solutions Architecture
          </span>
        )}
      </div>
    </Link>
  );
}
