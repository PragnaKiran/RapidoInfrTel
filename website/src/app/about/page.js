import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Compass, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  ArrowRight,
  Radio, 
  FileCheck, 
  Scale,
  Sparkles,
  Clock,
  Layers,
  Cpu,
  Users
} from "lucide-react";

export const metadata = {
  title: "About Us | Corporate Profile, Heritage & Solutions Architecture",
  description: "Learn about RAPIDO INFRATEL LLP (LLPIN: AAV-6363, RoC Ahmedabad). Brand heritage since 2009, 2017 Private Limited incorporation, solutions architecture expertise, and PMP-grade project management.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "Brand Inception & Trademark",
      desc: "Establishment of the Rapido® brand identity. Official registration of the trademark in telecommunications and technology classifications, recently renewed for the next 10 years.",
      badge: "Brand Origin"
    },
    {
      year: "2017",
      title: "Corporate Incorporation",
      desc: "Incorporated as RAPIDO INFRATEL PRIVATE LIMITED (CIN: U64200GJ2017PTC096551) in Gujarat, cementing corporate focus on telecommunications engineering and infrastructure design.",
      badge: "Entity Inception"
    },
    {
      year: "Present",
      title: "RAPIDO INFRATEL LLP",
      desc: "Structured as RAPIDO INFRATEL LLP (LLPIN: AAV-6363, RoC Ahmedabad), delivering premier solutions architecture, PMP-grade project management, AI/mobile platforms, and Rapido Hosting.",
      badge: "Active Entity"
    }
  ];

  const values = [
    {
      title: "Solutions Architecture & Product Rigor",
      desc: "Architecting carrier-grade transmission backbones, zero-trust cybersecurity perimeters, and IT & mobile products engineered for multi-decade durability.",
      icon: Cpu,
    },
    {
      title: "Universal Human Inclusion & Equity",
      desc: "Actively valuing and involving every individual regardless of race, color, or gender; dismantling hidden prejudices, closing wage gaps, and championing female technology leadership.",
      icon: Users,
    },
    {
      title: "Architecting Digital Bharat",
      desc: "Inspired by the transformative vision of universal digital connectivity and sovereign digital infrastructure, delivered through independent private product engineering.",
      icon: Target,
    },
    {
      title: "Intellectual Property & Brand Trust",
      desc: "Over 15+ years of verified brand trust, registered trademark protection (renewed for 10 years), and statutory compliance with the Ministry of Corporate Affairs (RoC Ahmedabad).",
      icon: Award,
    },
  ];

  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Corporate Profile &amp; Brand Heritage
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Architecting Digital Bharat: <br />
            <span className="gradient-text-fiber">IT &amp; Mobile Products</span> on Telecom Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong>RAPIDO INFRATEL LLP</strong> is an Ahmedabad-headquartered Technology Solutions Designing Firm. We are neither a generic IT services company nor a telecommunications operator; we architect proprietary IT &amp; Mobile Products deployed directly upon high-capacity telecommunications infrastructure under the foundational inspiration of <em>Architecting Digital Bharat</em> and universal human inclusion and equity.
          </p>
        </div>

        {/* FEATURED BOARDROOM IMAGE & NARRATIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Legacy of Brand Trust, Equity &amp; Engineering Precision
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              The Rapido brand name has been actively serving enterprise telecommunications and technology domains since <strong>2009</strong>. Backed by a registered trademark (®) in telecom and technology classes that has been renewed for the next 10 years, our journey represents steadfast commercial stability and intellectual property integrity.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Originally incorporated in 2017 as <strong>RAPIDO INFRATEL PRIVATE LIMITED</strong> (CIN: <span className="font-mono text-saffron-300">U64200GJ2017PTC096551</span>), our corporate structure has evolved into <strong>RAPIDO INFRATEL LLP</strong> (LLPIN: <span className="font-mono text-saffron-300">AAV-6363</span>, RoC Ahmedabad) to operate as a focused solutions architecture and product development practice.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We operate independently as a private enterprise with zero governmental or political connections. Our foundational inspiration is <em>Architecting Digital Bharat</em> rooted in universal human inclusion and equity: actively valuing every individual, eliminating systemic prejudices and wage gaps, and championing female representation in technology and leadership.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
              <img
                src="/images/about_boardroom.jpg"
                alt="Rapido InfraTel Solution Architecture Committee in Ahmedabad"
                className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                <div className="font-bold text-white">Solution Architecture Committee</div>
                <div className="text-[11px] text-slate-400">Ahmedabad Tech Hub · Female Tech Leadership &amp; PMP Governance</div>
              </div>
            </div>
          </div>
        </div>

        {/* CHRONOLOGY & HERITAGE MILESTONES */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">15+ Years Evolution</span>
              <h3 className="text-xl font-bold text-white mt-0.5">Corporate Heritage &amp; Milestone Timeline</h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              Trademark Registered &amp; Renewed for 10 Years
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-white font-mono">{m.year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fiber-400 bg-fiber-500/10 px-2 py-0.5 rounded border border-fiber-500/20">
                    {m.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUTORY ENTITY VERIFICATION CARD */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-saffron-500/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Corporate Entity Verification &amp; Registry
                </h3>
                <p className="text-xs text-slate-400">
                  Ministry of Corporate Affairs (RoC Ahmedabad Registered Entity)
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
              <CheckCircle2 className="w-4 h-4" /> Active &amp; Verified Entity
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Legal Entity Name:</span>
              <div className="font-bold text-white text-sm">RAPIDO INFRATEL LLP</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">LLPIN Identifier:</span>
              <div className="font-mono font-bold text-saffron-400 text-sm">AAV-6363</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Corporate Inception CIN:</span>
              <div className="font-mono font-bold text-slate-200 text-sm">U64200GJ2017PTC096551</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Registrar of Companies:</span>
              <div className="font-bold text-white text-sm">RoC Ahmedabad, Gujarat</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Registered Office Address:</strong> B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India
            </span>
          </div>
        </div>

        {/* CORE ARCHITECTURAL PRINCIPLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="glass-card p-6 rounded-xl border border-slate-800 space-y-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ACTION */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-telecom-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Consult Our Solutions Architecture Team</h3>
            <p className="text-xs text-slate-400 mt-1">
              Discuss feasibility parameters, PMP-grade milestone structuring, or enterprise cloud hosting requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-lg bg-fiber-500 hover:bg-fiber-400 text-telecom-950 font-bold text-xs transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Contact Committee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
