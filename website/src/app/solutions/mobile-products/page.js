import React from "react";
import Link from "next/link";
import { 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Wifi, 
  Database,
  Lock,
  Layers,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Mobile Applications & Intelligent Mobility | RAPIDO INFRATEL LLP",
  description: "Native iOS and Android enterprise applications, offline-first field synchronization engines, and citizen-facing mobile solutions engineered on enterprise digital networks.",
};

export default function MobileProductsPage() {
  const features = [
    {
      title: "Citizen & Merchant Facing Mobile Platforms",
      desc: "Architecting high-engagement mobile applications for citizens and local businesses with native biometric authentication, real-time civic notifications, and paperless credential wallets.",
      icon: Smartphone,
      points: [
        "Native iOS (Swift) and Android (Kotlin) performance-tuned codebases",
        "Sovereign biometric authentication (Fingerprint, Face ID, Aadhaar biometrics)",
        "Instant merchant payments and micro-settlement integrations",
        "Accessibility-first design compliant with WCAG 2.2 AA standards"
      ]
    },
    {
      title: "Field Operations & Offline-First Sync Engines",
      desc: "Empowering mobile field-force crews and utility inspectors to operate seamlessly in remote or low-connectivity zones with automatic bi-directional delta synchronization.",
      icon: Database,
      points: [
        "Encrypted SQLite / Realm local storage on mobile endpoints",
        "Conflict-free replicated data types (CRDT) for conflictless multi-user sync",
        "Automated background sync upon network signal restoration",
        "Optimized payload compression reducing mobile data bandwidth by up to 70%"
      ]
    },
    {
      title: "Real-Time Sensor & IoT Telemetry Mobile Workspaces",
      desc: "Delivering field engineers real-time mobile visualization of utility sensors, municipal telemetry, and transmission health directly on interactive mapping surfaces.",
      icon: Activity,
      points: [
        "Vector tile geospatial rendering with GPU hardware acceleration",
        "Low-latency WebSocket streaming of sensor anomalies and threshold alerts",
        "One-tap incident dispatch and automated location routing",
        "Augmented reality (AR) overlay for underground utility spatial inspection"
      ]
    },
    {
      title: "Multilingual Voice & NLP Interfaces (Bhashini Integration)",
      desc: "Breaking digital literacy barriers across India by integrating Bhashini speech-to-text and text-to-speech across 22 scheduled Indian languages directly into mobile UIs.",
      icon: Sparkles,
      points: [
        "Voice-prompted forms and conversational civic service discovery",
        "On-device lightweight neural translation for low-latency interactions",
        "Native dialect support ensuring equitable access across all demographics",
        "Zero-bias training validation to ensure equal accuracy across all voice profiles"
      ]
    }
  ];

  const metrics = [
    { label: "Language Reach", val: "22 Languages", sub: "Scheduled Indian Languages" },
    { label: "Offline Capability", val: "100% Offline-First", sub: "Delta Sync Upon Reconnect" },
    { label: "Biometric Auth", val: "< 300ms Auth", sub: "Sovereign Mobile Security" },
    { label: "Platform Coverage", val: "iOS & Android", sub: "Native Performance Engines" },
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Architecting Digital Bharat · Mobile Products</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Intelligent Mobility &amp; <span className="gradient-text-cloud">Native Mobile Applications</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We engineer proprietary mobile applications and field operations engines that run directly on high-capacity enterprise digital networks, delivering inclusive multilingual citizen experiences and resilient offline-first utility operations.
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/banner_mobile_products.jpg"
              alt="Multilingual Indian Mobile Application Interfaces and Touch UI"
              className="w-full h-[260px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Multilingual Mobile UI Engineering</span>
                <span className="hidden sm:inline text-slate-400"> · Native Swift &amp; Kotlin with 22 Scheduled Indian Languages</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px] font-semibold">Bhashini Voice Integration</span>
            </div>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-5 rounded-xl border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-white font-mono">{m.val}</div>
              <div className="text-xs font-semibold text-emerald-400 mt-1">{m.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Explanatory Content Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Mobile Engineering Studio</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Collaborative Engineering &amp; Offline-First Delta Sync
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At our Ahmedabad software engineering lab, our mobile architects develop and test native mobile applications under real-world connectivity constraints. We implement conflict-free replicated data types (CRDTs) to ensure mobile crews in rural and semi-urban areas can record inspections, process payments, and capture geospatial coordinates offline with automatic sync upon reconnection.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-loss encrypted local databases with background delta sync</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Touch-optimized intuitive workflows for diverse literacy demographics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct hardware camera EXIF geo-tagging for municipal verification</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl relative group">
              <img
                src="/images/content_mobile_products.jpg"
                alt="Mobile engineering studio team developing responsive user interfaces in Ahmedabad"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Core Modules Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Mobile Architecture</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Engineered for Scale, Security &amp; Universal Accessibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{feat.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {feat.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
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
        <div className="glass-card p-8 rounded-2xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Launch Native Mobile Products Built for Digital Bharat
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect with our mobile solutions architects to scope custom enterprise applications, field inspection systems, or civic platforms.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/digital-india"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Equity &amp; Inclusion Charter
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-rapido-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <span>Consult Mobile Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
