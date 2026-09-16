"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RapidoLogo({ showTagline = true, size = "default", className = "" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const emblemSize = isSmall ? 34 : isLarge ? 48 : 42;
  const mainTextSize = isSmall ? "text-lg" : isLarge ? "text-2xl" : "text-xl";
  const subTextSize = isSmall ? "text-[9px]" : isLarge ? "text-xs" : "text-[11px]";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Official Circular Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <img
          src="/icon-192.png"
          alt="Rapido Emblem"
          width={emblemSize}
          height={emblemSize}
          className="transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(234,99,32,0.3)]"
          style={{ width: `${emblemSize}px`, height: `${emblemSize}px`, objectFit: "contain" }}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-white ${mainTextSize}`}>
            RAPIDO
          </span>
          <span className={`font-bold tracking-wider text-fiber-400 ${mainTextSize}`}>
            INFRATEL
          </span>
          <span className="text-[10px] font-semibold text-slate-400 border border-slate-700/80 px-1 py-0.5 rounded tracking-wide ml-0.5">
            LLP
          </span>
        </div>
        {showTagline && (
          <span className={`text-slate-400 font-medium tracking-wider uppercase mt-1 ${subTextSize}`}>
            Telecom &amp; Digital Infrastructure
          </span>
        )}
      </div>
    </Link>
  );
}
