"use client";
import React from "react";
import Link from "next/link";
import RapidoLogo from "./RapidoLogo";
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  ArrowRight,
  Radio, 
  Server, 
  Users, 
  Layers,
  Cpu,
  Globe2,
  Lock
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
                <span>Architecting Bharat · Corporate Entity</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-medium">
                  Verified
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
              RAPIDO INFRATEL LLP is a premier Technology Solutions Designing &amp; Telecom Infrastructure Engineering Firm. As solution architects, we deliver resilient architectural designs and PMP-grade project governance of ultra-high-speed digital pipelines, enterprise AI applications, and sovereign cloud infrastructure for citizens, enterprises, and public institutions.
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
                  <strong>Brand Heritage:</strong> Rapido® brand established 2009 (Trademark renewed for 10 years)
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Core Architectural Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-fiber-400" />
              <span>Solutions Architecture</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#pillar-1" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Optical Fiber &amp; FTTH</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pillar-2" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>e-Governance &amp; GIS Stack</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#pillar-3" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>PM-WANI Public Wi-Fi</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#ai-mobile" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>AI &amp; Mobile Applications</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#hosting" className="hover:text-fiber-300 transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Rapido Cloud Hosting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-saffron-400" />
              <span>Systems &amp; Hosting</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/architecture" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Technology Architecture</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#hosting" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>“We are . in domain name”</span>
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
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Technical RFP Inquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Rapido Hosting & Sovereign Cloud */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rapido Hosting</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-fiber-400 font-bold">“We are . in domain name”</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Leading domain name registrar and high-availability sovereign enterprise cloud hosting infrastructure.
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-white font-semibold">PMP-Grade Project Governance</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Methodical architectural management and execution rigor.
                </div>
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
              &copy; {new Date().getFullYear()} <strong>RAPIDO INFRATEL LLP</strong>. Architecting Bharat. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>LLPIN: AAV-6363</span>
            <span>·</span>
            <span>RoC Ahmedabad, Gujarat</span>
            <span>·</span>
            <Link href="/contact" className="text-fiber-400 hover:underline">
              Corporate Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
