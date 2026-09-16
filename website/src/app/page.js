import React from "react";
import Link from "next/link";
import FeasibilityTool from "@/components/FeasibilityTool";
import ContactForm from "@/components/ContactForm";
import { 
  Radio, 
  Server, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Globe2, 
  Wifi, 
  Lock, 
  FileText,
  Activity,
  Building2,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const pillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Digital Infrastructure as a Utility",
      tagline: "High-Speed Connectivity & Trust Backbone",
      desc: "Delivering resilient, ultra-high-speed digital pipelines as fundamental civic utilities for every citizen, enterprise, and public institution.",
      color: "from-fiber-500/20 to-blue-600/10",
      borderColor: "border-fiber-500/40",
      textColor: "text-fiber-400",
      icon: Radio,
      items: [
        "Next-generation Optical Fiber Network (OFC) & FTTH rollout engineering",
        "Telecom tower infrastructure & urban small-cell planning",
        "Digital Identity & Trust Backbone (Aadhaar stack, DigiLocker, e-Sign, PKI)",
        "Resilient edge compute facilities & Zero-Trust network security"
      ],
      link: "/solutions#pillar-1"
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Governance & Services on Demand",
      tagline: "Seamless, Paperless & Faceless Delivery",
      desc: "Architecting cloud-native e-governance systems and spatial intelligence platforms to deliver citizen services without physical friction.",
      color: "from-saffron-500/20 to-amber-600/10",
      borderColor: "border-saffron-500/40",
      textColor: "text-saffron-400",
      icon: Server,
      items: [
        "Real-time cross-departmental integration across civic & state platforms",
        "End-to-end paperless, cashless, and transparent public service delivery",
        "Unified GIS municipal asset mapping & Command-and-Control (ICCC)",
        "Civic data pipelines for welfare analytics & grievance redressal"
      ],
      link: "/solutions#pillar-2"
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Digital Empowerment of Citizens",
      tagline: "Universal Access & Community Participation",
      desc: "Eliminating digital divides through multilingual platforms, public Wi-Fi aggregation, and inclusive participatory governance tools.",
      color: "from-emerald-500/20 to-teal-600/10",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-400",
      icon: Users,
      items: [
        "Universal digital access with Bhashini-ready Indian language localization",
        "PM-WANI compliant Public Data Office Aggregator (PDOA) architectures",
        "High-speed public Wi-Fi grids for smart villages & underserved clusters",
        "Participatory digital governance tools & citizen feedback ecosystems"
      ],
      link: "/solutions#pillar-3"
    }
  ];

  const highlights = [
    {
      stat: "48F-288F",
      label: "Optical Fiber Capabilities",
      sub: "Armored ribbon & micro-duct OFC"
    },
    {
      stat: "PM-WANI",
      label: "PDOA Architecture Ready",
      sub: "Compliant with DoT / C-DoT specifications"
    },
    {
      stat: "100% Paperless",
      label: "e-Governance Frameworks",
      sub: "Aadhaar, DigiLocker & PKI integrated"
    },
    {
      stat: "LLPIN: AAV-6363",
      label: "RoC Ahmedabad Registered",
      sub: "Verified entity under LLP Act, 2008"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-telecom-950">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/80 bg-telecom-grid">
        {/* Glow Spheres */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-fiber-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-saffron-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-fiber-400 animate-pulse" />
              <span className="text-fiber-400">Digital India Vision Alignment</span>
              <span className="text-slate-600">·</span>
              <span className="text-saffron-400">LLPIN: AAV-6363</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Architecting Bharat’s <br />
              <span className="gradient-text-fiber">Digital Infrastructure</span> &amp;{" "}
              <span className="gradient-text-saffron">Telecom Future</span>
            </h1>

            {/* Strategic Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              <strong>RAPIDO INFRATEL LLP</strong> is a premier Technology Solutions Designing &amp; Telecom Infrastructure Engineering Firm. We design next-generation optical fiber highways, resilient telecom towers, digital identity trust stacks, paperless e-governance systems, and PM-WANI public connectivity grids to empower every citizen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/solutions"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-telecom-950 bg-fiber-400 hover:bg-fiber-300 shadow-xl shadow-fiber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 3 Vision Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#feasibility"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Model Telecom Feasibility</span>
                <Cpu className="w-4 h-4 text-saffron-400" />
              </Link>
            </div>
          </div>

          {/* Telemetry Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800/80">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                  {item.stat}
                </div>
                <div className="text-xs font-semibold text-fiber-400 mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE THREE VISION PILLARS OF DIGITAL INDIA */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
              National Infrastructure Mandate
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Three Vision Pillars of Digital India
            </h2>
            <p className="text-sm text-slate-300">
              Transforming India into a digitally empowered society and knowledge economy through sovereign engineering frameworks and citizen-centric utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`glass-card p-8 rounded-2xl border ${pillar.borderColor} flex flex-col justify-between relative overflow-hidden group glass-card-hover`}
                >
                  <div className="space-y-5">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${pillar.textColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-slate-500 transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${pillar.textColor}`}>
                        {pillar.tagline}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                      {pillar.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pillar.textColor}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={pillar.link}
                      className={`inline-flex items-center gap-2 text-xs font-bold ${pillar.textColor} hover:underline`}
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CAPACITY & FEASIBILITY ESTIMATOR */}
      <section id="feasibility" className="py-16 md:py-24 bg-telecom-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeasibilityTool />
        </div>
      </section>

      {/* 4. STRATEGIC POSITIONING & ENGINEERING RIGOR */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
                Engineering Integrity &amp; Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Not Merely an IT Vendor — A Premier Telecom &amp; Digital Solutions Architecture Firm
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rapido InfraTel LLP combines deep domain expertise in telecommunications physical infrastructure (towers, ducts, armored optical fiber cables, GPON FTTH) with modern cloud-native systems architecture. We bridge the critical gap between hard telecom engineering and sovereign digital services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-fiber-500/10 text-fiber-400 flex items-center justify-center mb-2">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Carrier &amp; ISP Ready</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Design compliant with DoT, TEC, and TRAI standards for carrier-grade multi-tenant fiber backbones.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-saffron-500/10 text-saffron-400 flex items-center justify-center mb-2">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Sovereign Trust Stack</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct architectural integration with Aadhaar auth, DigiLocker repository, and PKI-based credential issuance.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-fiber-400 transition-colors"
                >
                  <span>Learn more about our corporate profile &amp; governance</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Blueprint Graphic Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-fiber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Integrated Digital Pipeline Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">DoT / TEC Aligned</span>
              </div>

              {/* Layered stack illustration */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white font-sans font-bold">Layer 4: Citizen Applications</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Bhashini / Web &amp; Mobile</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-saffron-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron-400" />
                    <span className="text-white font-sans font-bold">Layer 3: Trust &amp; e-Gov Stack</span>
                  </div>
                  <span className="text-[10px] text-saffron-400 font-mono">Aadhaar / DigiLocker / GIS</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-fiber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-fiber-400" />
                    <span className="text-white font-sans font-bold">Layer 2: Edge Aggregation</span>
                  </div>
                  <span className="text-[10px] text-fiber-400 font-mono">PM-WANI PDOA / OLT / POPs</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-white font-sans font-bold">Layer 1: Physical Infrastructure</span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-mono">OFC Ribbon / Towers / FTTH</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-telecom-950 border border-slate-800 text-xs text-slate-400">
                Full-lifecycle engineering: From Route Survey, Right-of-Way (RoW) liaisoning, HDD trenchless execution, to Network Operations Center (NOC) monitoring.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED CORPORATE ENTITY BANNER */}
      <section className="py-14 bg-gradient-to-r from-telecom-950 via-slate-900 to-telecom-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 rounded-2xl border border-saffron-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400 flex-shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  RAPIDO INFRATEL LLP · Verified RoC Ahmedabad Entity
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Registered under Limited Liability Partnership Act, 2008 with the Ministry of Corporate Affairs (MCA). 
                  LLPIN: <strong className="text-saffron-300 font-mono">AAV-6363</strong>. Registered Office: Parimal Garden Cross Road, C.G. Road, Ahmedabad.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex-shrink-0"
            >
              View Statutory Verification
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LEAD CAPTURE & TECHNICAL RFP SECTION */}
      <section id="contact" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
                Direct Technical Channel
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
                Initiate Project Feasibility or Submit Infrastructure RFP
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our senior infrastructure engineering committee. We assist government nodal agencies, smart city SPVs, telecom operators, and municipal corporations in architecting compliant, future-proof digital utilities.
              </p>

              <div className="space-y-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-fiber-400" />
                  <span>Confidential NDA &amp; RFP evaluation protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  <span>Sub-24h turnaround on feasibility inquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct master agency webhook routing via relayBuoy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
