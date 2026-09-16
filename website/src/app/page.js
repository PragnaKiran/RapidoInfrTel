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
  title: "RAPIDO INFRATEL LLP | Architecting Bharat · Solution Architects & Telecom Engineering",
  description: "RAPIDO INFRATEL LLP is a premier Technology Solutions Designing & Telecom Infrastructure Engineering Firm in Ahmedabad. We deliver resilient solutions architecture designs and PMP-grade project management for next-generation digital pipelines, enterprise AI, mobile applications, and sovereign cloud hosting.",
};

export default function HomePage() {
  const pillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Digital Infrastructure as a Utility",
      tagline: "High-Speed Transmission & Trust Backbone",
      desc: "Architecting resilient solutions designs and PMP-grade management of carrier-grade transmission corridors and physical infrastructure.",
      borderColor: "border-fiber-500/40",
      textColor: "text-fiber-400",
      icon: Radio,
      items: [
        "Turnkey Optical Fiber Network (OFC) & FTTH GPON architectural blueprints",
        "48F–288F armored ribbon micro-duct routes & HDD trenchless designs",
        "Telecom tower infrastructure & urban small-cell densification",
        "Zero-Trust Network Architecture (ZTNA) & edge compute facilities"
      ],
      link: "/solutions#pillar-1"
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Governance & Services on Demand",
      tagline: "Seamless, Paperless & Faceless Portals",
      desc: "Engineering cloud-native enterprise e-governance systems, automated verification, and municipal spatial intelligence.",
      borderColor: "border-saffron-500/40",
      textColor: "text-saffron-400",
      icon: Server,
      items: [
        "Sovereign digital identity integration (Aadhaar AUA/KUA stack & DigiLocker)",
        "Paperless and faceless citizen services with immutable audit ledgers",
        "Unified GIS municipal utility mapping & Smart City ICCC integrations",
        "Scalable civic data pipelines for welfare analytics & grievance resolution"
      ],
      link: "/solutions#pillar-2"
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Digital Empowerment of Citizens",
      tagline: "Universal Access & Community Wi-Fi",
      desc: "Democratizing connectivity through multilingual computing, public Wi-Fi aggregation, and inclusive community portals.",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-400",
      icon: Users,
      items: [
        "Bhashini-ready multilingual NLP localization across 22 scheduled languages",
        "PM-WANI Public Data Office Aggregator (PDOA) compliant Wi-Fi mesh",
        "Affordable public Wi-Fi grids for peri-urban clusters & smart villages",
        "Participatory civic engagement tools & citizen feedback ecosystems"
      ],
      link: "/solutions#pillar-3"
    }
  ];

  const highlights = [
    {
      stat: "2009",
      label: "Brand Heritage",
      sub: "Rapido® Trademark in Telecom & Tech"
    },
    {
      stat: "PMP-Grade",
      label: "Project Governance",
      sub: "Solution Architecture Oversight"
    },
    {
      stat: "PM-WANI",
      label: "PDOA Architecture",
      sub: "DoT Central Registry Interoperable"
    },
    {
      stat: "LLPIN: AAV-6363",
      label: "RoC Ahmedabad",
      sub: "Architecting Bharat"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-telecom-950">
      {/* 1. ANIMATED 5-SLIDE HERO SLIDER */}
      <section className="border-b border-slate-800/80">
        <HeroSlider />
      </section>

      {/* 2. STATS & TELEMETRY STRIP */}
      <section className="py-8 bg-telecom-900/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* 3. CORE MISSION & STRATEGIC POSITIONING */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
                Architecting Bharat · Solutions Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Delivering Resilient Architectural Designs &amp; PMP-Grade Project Governance
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                As premier solution architects, <strong>RAPIDO INFRATEL LLP</strong> bridges the critical nexus between hard telecommunications engineering, sovereign trust frameworks, and modern enterprise software. We specialize in designing and managing the lifecycle of ultra-high-speed digital pipelines as essential civic utilities for every citizen, enterprise, and public institution.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Inspired by the profound vision of an interconnected Bharat, our methodologies apply rigorous Project Management Professional (PMP) grade standards to route surveying, optical duct budgeting, micro-trenching, GPON distribution, and cross-departmental software architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-fiber-500/10 text-fiber-400 flex items-center justify-center mb-2">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Solution Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Multi-tier physical and cyber blueprints designed for 25+ year infrastructure lifespans.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-saffron-500/10 text-saffron-400 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">PMP-Grade Governance</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Structured milestone management, link loss auditing, and carrier-grade SLA enforcement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Featured Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
                <img
                  src="/images/about_boardroom.jpg"
                  alt="Rapido InfraTel Solution Architecture Committee"
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                  <div className="font-bold text-white">Architectural Strategy Committee</div>
                  <div className="text-[11px] text-slate-400">Ahmedabad Headquarters · Infrastructure &amp; Telecom Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE THREE VISION PILLARS */}
      <section className="py-20 md:py-28 bg-telecom-900/60 border-y border-slate-800/80 relative">
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
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
              Full-Stack Digital Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI, Mobile Applications &amp; Sovereign Cloud Hosting
            </h2>
            <p className="text-sm text-slate-300">
              Beyond optical conduits, we deliver the intelligent applications, mobile interfaces, and sovereign hosting infrastructure that power modern digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: AI & Mobile Applications */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden h-48 border border-slate-800">
                <img
                  src="/images/hero_ai_mobile.jpg"
                  alt="AI and Mobile Applications Development"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-bold text-fiber-400">
                  AI &amp; Mobile Development
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Enterprise AI Models &amp; Multilingual Mobile Apps
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We engineer intelligent workflow automation, predictive civic intelligence, and cloud-native iOS and Android applications. Incorporating Bhashini language models, our applications provide voice-first and multilingual accessibility across 22 scheduled Indian languages.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                    <span>Citizen-facing mobile applications with biometric &amp; Aadhaar auth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                    <span>Field-force utility tracking &amp; GIS mobile inspection tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                    <span>AI-powered automated grievance classification &amp; routing</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/solutions#ai-mobile"
                className="inline-flex items-center gap-2 text-xs font-bold text-fiber-400 hover:underline pt-2"
              >
                <span>Learn about AI &amp; Mobile Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Rapido Hosting & Domains */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden h-48 border border-slate-800">
                <img
                  src="/images/hero_hosting.jpg"
                  alt="Rapido Hosting Enterprise Datacenter"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-bold text-saffron-400">
                  Rapido Hosting
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
                  Under the established <strong>Rapido Hosting</strong> brand, we are one of the leading hosting service providers and domain name authorities. We deliver high-availability sovereign cloud hosting, managed VPS, edge compute enclaves, and instant domain registrations with carrier-grade DNS resilience.
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
                href="/solutions#hosting"
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
      <section className="py-14 bg-gradient-to-r from-telecom-950 via-slate-900 to-telecom-950 border-t border-slate-800">
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
                  Rapido® brand established in <strong>2009</strong> with registered Trademark (renewed for the next 10 years). Incorporated in 2017 as <strong>RAPIDO INFRATEL PRIVATE LIMITED</strong> (CIN: <span className="font-mono text-saffron-300">U64200GJ2017PTC096551</span>), currently structured as <strong>RAPIDO INFRATEL LLP</strong> (LLPIN: <span className="font-mono text-saffron-300">AAV-6363</span>, RoC Ahmedabad). Registered Office: Parimal Garden Cross Road, C.G. Road, Ahmedabad.
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

      {/* 7. LEAD CAPTURE & TECHNICAL RFP SECTION */}
      <section id="contact" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
                Direct Technical Inquiries
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
                Initiate Project Scoping or Submit Infrastructure RFP
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our solutions architecture committee. We consult with telecom carriers, municipal bodies, enterprise organizations, and technology leaders to design and manage mission-critical digital systems.
              </p>

              <div className="space-y-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-fiber-400" />
                  <span>Confidential NDA &amp; RFP evaluation protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  <span>PMP-grade scope definition &amp; technical feasibility</span>
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
