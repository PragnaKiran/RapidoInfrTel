import React from "react";
import Link from "next/link";
import { 
  Users, 
  Wifi, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  HeartHandshake, 
  FileCheck,
  Globe2,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Universal Human Inclusion & Civic Digital Products | RAPIDO INFRATEL LLP",
  description: "Zero-barrier civic portals, decentralized open-access community Wi-Fi mesh software, and sovereign credential engines anchored in universal human inclusion and equity.",
};

export default function CivicInclusionPage() {
  const pillars = [
    {
      title: "Universal Civic Portals (Paperless & Barrier-Free)",
      desc: "Delivering government and public institution service portals engineered so that every citizen—regardless of literacy level, language, device capability, or socio-economic status—can access fundamental civic utilities.",
      icon: Users,
      points: [
        "Voice-first conversational navigation for low-literacy users in 22 scheduled languages",
        "Ultra-lightweight DOM rendering optimized for entry-level smartphones and 2G/3G networks",
        "Universal design compliant with highest international accessibility benchmarks (WCAG 2.2 AAA)",
        "Zero tracking cookies, respect for citizen privacy, and transparent data sovereignty"
      ]
    },
    {
      title: "Decentralized Open-Access Community Wi-Fi Mesh Software",
      desc: "Deploying open-access community mesh routing software that allows village panchayats, local markets, and student clusters to create resilient, peer-to-peer digital access zones.",
      icon: Wifi,
      points: [
        "Open-mesh dynamic routing protocols with self-healing node topology",
        "Bandwidth equity algorithms preventing single-device monopolization of public bandwidth",
        "Captive portal software for local merchant discovery and community notice boards",
        "Low-power solar-compatible edge routing nodes for off-grid peri-urban deployments"
      ]
    },
    {
      title: "Sovereign Paperless Credential & Identity Engines",
      desc: "Integrating sovereign trust architectures to eliminate paper bureaucracy, predatory middle-men, and systemic barriers to welfare and licensing delivery.",
      icon: Lock,
      points: [
        "Instant cryptographic document issuance directly into sovereign citizen DigiLockers",
        "Tamper-proof digital credentials verified offline via cryptographically signed QR codes",
        "Biometric and OTP-based citizen authentication eliminating physical queueing",
        "End-to-end non-repudiation and immutable audit logs preventing fraudulent denials"
      ]
    },
    {
      title: "Equity & Anti-Bias Digital Services Framework",
      desc: "Actively eliminating the systemic prejudices and unfair treatment that perpetuate wage gaps, domestic labor imbalances, and the underrepresentation of marginalized groups.",
      icon: HeartHandshake,
      points: [
        "Algorithmic audits verifying zero discrimination across gender, caste, and background",
        "Public wage transparency and equitable hiring digital tools for partner organizations",
        "Dedicated digital toolkits designed to empower women entrepreneurs and local artisans",
        "Transparent grievance redressal portals with guaranteed escalation turnaround times"
      ]
    }
  ];

  const highlights = [
    { label: "Equity Charter", val: "100% Inclusive", sub: "Universal Human Inclusion" },
    { label: "Accessibility", val: "WCAG AAA", sub: "Zero-Barrier Design Standard" },
    { label: "Language Parity", val: "22 Languages", sub: "Equal Linguistic Treatment" },
    { label: "Civic Transparency", val: "Zero-Paper", sub: "Cryptographic Non-Repudiation" },
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Architecting Digital Bharat · Human Inclusion</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Universal <span className="gradient-text-saffron">Human Inclusion</span> &amp; Civic Digital Products
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our product philosophy asserts that actively involving and valuing every individual—regardless of race, color, or gender—directly strengthens communities and elevates life for all. We build barrier-free civic platforms, decentralized mesh software, and sovereign credential engines that turn this principle into everyday reality.
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/banner_civic_inclusion.jpg"
              alt="Panoramic visualization of digital inclusion across rural and semi-urban India"
              className="w-full h-[260px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Universal Human Equity &amp; Civic Dignity</span>
                <span className="hidden sm:inline text-slate-400"> · Empowering Every Citizen Across Bharat</span>
              </div>
              <span className="text-amber-400 font-mono text-[11px] font-semibold">100% Inclusive Design</span>
            </div>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass-card p-5 rounded-xl border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-white font-mono">{h.val}</div>
              <div className="text-xs font-semibold text-amber-400 mt-1">{h.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{h.sub}</div>
            </div>
          ))}
        </div>

        {/* Explanatory Content Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Citizen Empowerment</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Biometric Authentication &amp; Multilingual Accessibility
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design citizen-facing mobile and kiosk interfaces that eradicate bureaucratic friction. By combining voice-first navigation with native Aadhaar biometric authentication, citizens can securely apply for municipal welfare benefits, download water connection certificates, and submit grievances in their native tongue without intermediaries.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Conversational voice prompts across 22 scheduled Indian languages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero-friction biometric fingerprint and facial auth</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct issuance into sovereign citizen DigiLockers</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl relative group">
              <img
                src="/images/content_civic_inclusion.jpg"
                alt="Citizen using accessible multilingual mobile interface for public services"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cloud-400">Equity in Technology</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Civic Products Engineered for Radical Human Inclusion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div key={pil.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{pil.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pil.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {pil.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 rounded-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Champion Human Equity and Inclusive Civic Technology
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Explore our Digital Bharat charter or partner with our solutions team to deploy zero-barrier civic products in your municipality or institution.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/digital-india"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Read Equity Charter
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-rapido-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <span>Partner for Civic Inclusion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
