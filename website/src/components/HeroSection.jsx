"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, Server, Cloud } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-rapido-950 min-h-[600px] md:min-h-[665px] flex items-center bg-grid-pattern">
      <div className="absolute inset-0 mesh-glow pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-cloud-400 animate-pulse" />
              <span className="text-cloud-400">Ahmedabad Headquartered · Est. September 2, 2009 · Solution Architects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Proprietary Product Architecture &amp; <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cloud-400 to-saffron-400">Sovereign Cloud Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Engineering resilient digital systems, custom IT &amp; mobile products, and mission-critical cloud platforms for enterprises and civic institutions since 2009.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#architecture-review"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-saffron-500 hover:bg-saffron-400 shadow-xl shadow-saffron-500/20 transition-all flex items-center gap-2"
              >
                <span>Initiate Solution Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#engineering-practices"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <span>Explore Engineering Practices ↓</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-xl font-black text-white font-mono">15+ Years</div>
                <div className="text-xs font-semibold text-cloud-400">Engineering Heritage (Est. 2009)</div>
              </div>
              <div>
                <div className="text-xl font-black text-white font-mono">100% Sovereign</div>
                <div className="text-xs font-semibold text-saffron-400">Domestic Data Residency &amp; Compliance</div>
              </div>
              <div>
                <div className="text-xl font-black text-white font-mono">PMP-Grade</div>
                <div className="text-xs font-semibold text-emerald-400">System Architecture &amp; Milestone Governance</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols) - The Sovereign Architecture Blueprint Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl relative space-y-6 group hover:border-cloud-500/50 transition-colors duration-500">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-cloud-400 font-bold tracking-wider">
                    Architectural Blueprint
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    The Sovereign Product Stack
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-saffron-500/10 text-saffron-400 border border-saffron-500/30">
                  Active
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 group-hover:border-cloud-500/30 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cloud-500 rounded-l-xl" />
                  <div className="p-2.5 rounded-lg bg-cloud-500/10 text-cloud-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Tier 1: Civic &amp; Enterprise Mobile Interfaces</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">Native iOS/Android, Voice-first Bhashini NLP integration for universal access.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 group-hover:border-saffron-500/30 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-saffron-500 rounded-l-xl" />
                  <div className="p-2.5 rounded-lg bg-saffron-500/10 text-saffron-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Tier 2: In-House Proprietary Product Engines</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">High-throughput microservices, cryptographic identity verification &amp; ledgers.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 group-hover:border-emerald-500/30 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl" />
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Tier 3: Sovereign Cloud Enclaves</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">99.999% SLA datacenters, localized disaster recovery &amp; data residency.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
