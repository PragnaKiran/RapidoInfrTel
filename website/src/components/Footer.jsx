"use client";
import React from "react";
import Link from "next/link";
import RapidoLogo from "./RapidoLogo";
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Radio, 
  Server, 
  Users, 
  Layers,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-telecom-950 border-t border-slate-800 text-slate-400 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fiber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. TOP STATUTORY INSIGNIA BADGE */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/10 border border-saffron-500/20 flex items-center justify-center text-saffron-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span>Verified Corporate Entity</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-medium">
                  Active
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                RAPIDO INFRATEL LLP · LLPIN: <span className="text-saffron-300 font-mono font-medium">AAV-6363</span> · RoC Ahmedabad Registered
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="hidden sm:inline">Official Communications:</span>
            <a
              href="mailto:contact@rapidoinfratel.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-fiber-400 border border-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>contact@rapidoinfratel.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Entity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <RapidoLogo size="default" />
            <p className="text-xs text-slate-300 leading-relaxed pr-6">
              RAPIDO INFRATEL LLP is a premier Technology Solutions Designing &amp; Telecom Infrastructure Engineering Firm. Dedicated to realizing the vision of the <strong className="text-white">Digital India Mission</strong>, we architect high-speed fiber backbones, digital identity frameworks, paperless e-governance platforms, and PM-WANI public connectivity enablers across urban and rural Bharat.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong> B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-fiber-400 flex-shrink-0" />
                <span>
                  <strong>Entity Identifier:</strong> LLPIN AAV-6363 (Ministry of Corporate Affairs)
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: 3 Digital India Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-fiber-400" />
              <span>Digital India Pillars</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#pillar-1" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Digital Infra as a Utility</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pillar-2" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Governance on Demand</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pillar-3" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Citizen Empowerment</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#ofc" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Optical Fiber &amp; FTTH</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pm-wani" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>PM-WANI Wi-Fi Mesh</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-saffron-400" />
              <span>Core Systems</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/architecture" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Technology Architecture</span>
                </Link>
              </li>
              <li>
                <Link href="/architecture#identity" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Aadhaar &amp; PKI Trust Stack</span>
                </Link>
              </li>
              <li>
                <Link href="/architecture#gis" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Municipal GIS &amp; ICCC</span>
                </Link>
              </li>
              <li>
                <Link href="/digital-india" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Digital India Initiatives</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Case Studies &amp; Blueprints</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standards &amp; Trust</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-white font-semibold">TEC &amp; DoT Guidelines</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Compliant Telecom &amp; OFC network deployment specifications</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-white font-semibold">PM-WANI PDOA Architecture</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Universal Wi-Fi interoperability &amp; Central Registry compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM STATUTORY COPYRIGHT BAR */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <img
              src="/fav.png"
              alt="Rapido Insignia"
              className="w-4 h-4 object-contain"
            />
            <span>
              &copy; {new Date().getFullYear()} <strong>RAPIDO INFRATEL LLP</strong>. All rights reserved. Registered under Limited Liability Partnership Act, 2008.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>LLPIN: AAV-6363</span>
            <span>·</span>
            <span>RoC Ahmedabad, Gujarat</span>
            <span>·</span>
            <Link href="/contact" className="text-fiber-400 hover:underline">
              Official Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
