import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
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
  Sparkles,
  Smartphone
} from "lucide-react";

export const metadata = {
  title: "RAPIDO INFRATEL LLP | Architecting Digital Bharat · Solutions Architecture & IT/Mobile Products",
  description: "RAPIDO INFRATEL LLP creates proprietary IT & Mobile Products for enterprise digital infrastructure under the foundational inspiration of Architecting Digital Bharat and universal human inclusion & equity.",
};

export default function HomePage() {
  const pillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Enterprise Cloud Platforms & Digital Utilities",
      tagline: "High-Availability Distributed Backbones",
      desc: "Architecting resilient cloud-native microservices, fault-tolerant transaction pipelines, and digital utilities operating on enterprise digital infrastructure.",
      borderColor: "border-cloud-500/40",
      textColor: "text-cloud-400",
      icon: Server,
      items: [
        "Cloud-native microservices and distributed transaction pipelines",
        "Enterprise network interface abstractions and high-throughput data buses",
        "Sub-50ms failover orchestration & zero-downtime deployment pipelines",
        "Zero-Trust Network Architecture (ZTNA) and sovereign edge facilities"
      ],
      link: "/solutions/enterprise-platforms"
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Sovereign Trust & Paperless Portals",
      tagline: "Seamless, Paperless & Cryptographic Portals",
      desc: "Engineering cloud-native enterprise products, automated identity verification, and municipal spatial intelligence.",
      borderColor: "border-saffron-500/40",
      textColor: "text-saffron-400",
      icon: Server,
      items: [
        "Sovereign cryptographic identity integration (Aadhaar & DigiLocker stack)",
        "Paperless enterprise portals with immutable audit ledgers and access control",
        "Unified GIS municipal spatial asset intelligence & real-time monitoring",
        "Scalable civic data pipelines for equitable utility and resource distribution"
      ],
      link: "/solutions/spatial-gis"
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Universal Human Inclusion & Equity",
      tagline: "Universal Access & Civic Products",
      desc: "Democratizing access through multilingual computing, civic digital products, and radical human inclusion.",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-400",
      icon: Users,
      items: [
        "Bhashini-ready multilingual NLP localization across 22 scheduled Indian languages",
        "Decentralized open-access community Wi-Fi mesh software products",
        "Equitable civic service portals for peri-urban clusters and rural communities",
        "Participatory digital tools engineered to eliminate racial and gender gaps"
      ],
      link: "/solutions/civic-inclusion"
    }
  ];

  const highlights = [
    {
      stat: "2009",
      label: "Brand Heritage",
      sub: "Rapido® Registered Trademark"
    },
    {
      stat: "PMP-Grade",
      label: "Project Governance",
      sub: "Solution Architecture Oversight"
    },
    {
      stat: "100% Inclusive",
      label: "Human Equity Charter",
      sub: "Dismantling Bias & Wage Gaps"
    },
    {
      stat: "Enterprise",
      label: "Cloud & Products",
      sub: "Architecting Digital Bharat"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-rapido-950">
      {/* 1. ANIMATED 5-SLIDE HERO SLIDER */}
      <section className="border-b border-slate-800/80">
        <HeroSlider />
      </section>

      {/* 2. STATS & TELEMETRY STRIP */}
      <section className="py-8 bg-rapido-900/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                  {item.stat}
                </div>
                <div className="text-xs font-semibold text-cloud-400 mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE MISSION & STRATEGIC POSITIONING: ARCHITECTING DIGITAL BHARAT & HUMAN EQUITY */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
                Architecting Digital Bharat · Product Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                IT &amp; Mobile Products Engineered for Enterprise Digital Infrastructure
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>RAPIDO INFRATEL LLP</strong> is neither a generic IT services company nor a network infrastructure operator. Instead, we design and architect proprietary <strong>IT &amp; Mobile Products</strong> that drive universal civic and commercial empowerment across enterprise digital infrastructure.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our product architecture draws its foundational inspiration from <em>Architecting Digital Bharat</em> under the core concept of <strong>universal human inclusion and equity</strong>—which asserts that actively involving and valuing every individual, regardless of race, color, or gender, directly strengthens communities and elevates the quality of life for everyone.
              </p>

              {/* Equity & Inclusion Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-cloud-500/10 text-cloud-400 flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Universal Human Inclusion</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rejecting hidden prejudices in hiring, housing, and social interactions by building transparent, equal-access software products.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-saffron-500/10 text-saffron-400 flex items-center justify-center mb-1">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Closing the Wage &amp; Gender Gap</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dismantling systemic inequalities, addressing unequal domestic labor, and actively advancing female technology leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Topology Card (5 cols - Clean Unique Visual) */}
            <div className="lg:col-span-5 relative">
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-700/80 shadow-2xl relative space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cloud-400 font-bold tracking-wider">
                      Architectural Blueprint
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      The Sovereign Product Stack
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>

                {/* Stack Layers */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-cloud-400" />
                      <div>
                        <div className="font-semibold text-white">Tier 5: Universal Mobile &amp; AI Products</div>
                        <div className="text-[11px] text-slate-400">Voice-first Bhashini NLP (22 Languages)</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cloud-400 font-bold">App Layer</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-4 h-4 text-saffron-400" />
                      <div>
                        <div className="font-semibold text-white">Tier 4: Sovereign Trust &amp; Paperless Ledgers</div>
                        <div className="text-[11px] text-slate-400">Cryptographic identity &amp; document vaults</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-saffron-400 font-bold">Trust Layer</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Wifi className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-white">Tier 3: Open Community Wi-Fi Mesh</div>
                        <div className="text-[11px] text-slate-400">Decentralized local merchant &amp; civic access</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">Access Mesh</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-indigo-400" />
                      <div>
                        <div className="font-semibold text-white">Tier 2: Rapido Cloud Hosting &amp; Domains</div>
                        <div className="text-[11px] text-slate-400">“We are . in domain name” · 99.999% VPS</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">Cloud Layer</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Radio className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="font-semibold text-white">Tier 1: Enterprise Digital Infrastructure</div>
                        <div className="text-[11px] text-slate-400">High-capacity digital network backbone</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">Enterprise Network</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800">
                  <span>Methodology: PMP-Grade Systems Architecture</span>
                  <Link href="/architecture" className="text-cloud-400 font-semibold hover:underline flex items-center gap-1">
                    <span>Full Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE THREE VISION PILLARS */}
      <section className="py-16 md:py-24 bg-rapido-900/60 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
              National Infrastructure Horizon
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Three Vision Pillars of Digital Enablement
            </h2>
            <p className="text-sm text-slate-300">
              Architecting universal connectivity, paperless civic delivery, and citizen empowerment across urban corridors and rural communities.
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

      {/* 5. AI, MOBILE APPLICATIONS & RAPIDO HOSTING SHOWCASE */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
              Full-Stack Digital Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI, Mobile Applications &amp; Sovereign Cloud Hosting
            </h2>
            <p className="text-sm text-slate-300">
              Beyond infrastructure, we deliver the intelligent applications, mobile interfaces, and sovereign hosting infrastructure that power modern digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: AI & Mobile Applications */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden group">
              {/* Bespoke Interactive UI Preview instead of duplicate image */}
              <div className="relative rounded-xl p-5 bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cloud-400 animate-ping" />
                    <span className="text-cloud-400 font-bold">BHASHINI_NLP_ENGINE_v2.6</span>
                  </div>
                  <span className="text-[10px] text-slate-500">22 Scheduled Languages</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">Speech-to-Text</div>
                    <div className="text-white font-bold mt-0.5">&lt; 120ms</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">Inference Mode</div>
                    <div className="text-emerald-400 font-bold mt-0.5">Edge-Local</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">Equity Bias</div>
                    <div className="text-cloud-400 font-bold mt-0.5">0.00% Zero-Bias</div>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Voice Prompt: हिंदी · ગુજરાતી · தமிழ் · বাংলা</span>
                  <span className="text-emerald-400 text-[10px]">Biometric Auth OK</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Advanced AI Models &amp; Multilingual Mobile Apps
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We engineer intelligent workflow automation, predictive civic intelligence, and cloud-native iOS and Android applications. Incorporating Bhashini language models, our applications provide voice-first and multilingual accessibility across 22 scheduled Indian languages.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                    <span>Citizen-facing mobile applications with sovereign biometric auth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                    <span>Field-force utility tracking &amp; GIS mobile inspection tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                    <span>AI-powered automated workflow classification &amp; routing</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/solutions/mobile-products"
                className="inline-flex items-center gap-2 text-xs font-bold text-cloud-400 hover:underline pt-2"
              >
                <span>Learn about AI &amp; Mobile Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Rapido Hosting & Domains */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden group">
              {/* Bespoke Interactive Cloud Telemetry Preview instead of duplicate image */}
              <div className="relative rounded-xl p-5 bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-saffron-400 animate-pulse" />
                    <span className="text-saffron-400 font-bold">RAPIDO_CLOUD_ENCLAVE</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Tier-IV Node SLA</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">DNS Uptime</div>
                    <div className="text-white font-bold mt-0.5">99.999%</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">Domain Auth</div>
                    <div className="text-saffron-400 font-bold mt-0.5">.IN Accredited</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400">Encryption</div>
                    <div className="text-emerald-400 font-bold mt-0.5">TLS 1.3 Post-Q</div>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Edge Routing: Mumbai · Delhi · Ahmedabad</span>
                  <span className="text-saffron-400 text-[10px]">“We are . in domain name”</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Sovereign Cloud Hosting &amp; Domain Solutions
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-saffron-400 bg-saffron-500/10 px-2.5 py-1 rounded w-fit border border-saffron-500/20">
                  “We are . in domain name”
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Under the established <strong>Rapido Hosting</strong> brand, we are one of the leading hosting service providers and domain name authorities. We deliver high-availability sovereign cloud hosting, managed VPS, edge compute enclaves, and instant domain registrations with enterprise-grade DNS resilience.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                    <span>Premier domain registration &amp; Anycast DNS resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                    <span>Enterprise sovereign cloud servers &amp; high-performance VPS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                    <span>99.999% SLA availability with localized disaster recovery</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/solutions/rapido-hosting"
                className="inline-flex items-center gap-2 text-xs font-bold text-saffron-400 hover:underline pt-2"
              >
                <span>Explore Rapido Hosting &amp; Domains</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE HERITAGE & VERIFIED ENTITY CARD */}
      <section className="py-12 bg-gradient-to-r from-rapido-950 via-slate-900 to-rapido-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 rounded-2xl border border-saffron-500/20 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400 flex-shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  RAPIDO INFRATEL LLP · 15+ Years Brand Heritage
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  Rapido® brand established in <strong>2009</strong> with registered Trademark (®). Incorporated in 2017 as <strong>RAPIDO INFRATEL PRIVATE LIMITED</strong> (CIN: <span className="font-mono text-saffron-300">U64200GJ2017PTC096551</span>), currently structured as <strong>RAPIDO INFRATEL LLP</strong>. Registered Office: Parimal Garden Cross Road, C.G. Road, Ahmedabad.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex-shrink-0"
            >
              Read Corporate Evolution
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LEAD CAPTURE & TECHNICAL CONSULTATION SECTION */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
                Direct Technical Inquiries
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
                Initiate Project Scoping or Technical Consultation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our solutions architecture team. We consult with enterprise organizations, digital platform owners, and municipal bodies to architect and deploy mission-critical IT &amp; mobile products.
              </p>

              <div className="space-y-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-cloud-400" />
                  <span>Confidential NDA &amp; technical consultation protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  <span>PMP-grade scope definition &amp; architectural feasibility</span>
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
