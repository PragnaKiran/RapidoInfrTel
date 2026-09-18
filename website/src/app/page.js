import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Globe2, 
  Lock, 
  Building2,
  Code2,
  Smartphone,
  TerminalSquare,
  Workflow,
  Search,
  Database,
  CloudCog,
  RefreshCw
} from "lucide-react";

export const metadata = {
  title: "RAPIDO INFRATEL LLP | Architecting Digital Bharat · Solutions Architecture & IT/Mobile Products",
  description: "RAPIDO INFRATEL LLP creates proprietary IT & Mobile Products for enterprise digital infrastructure under the foundational inspiration of Architecting Digital Bharat and universal human inclusion & equity.",
};

export default function HomePage() {
  const highlights = [
    {
      stat: "2009",
      label: "Origin 2009",
      sub: "15+ years continuous solutions designing heritage in Gujarat."
    },
    {
      stat: "Proprietary IP",
      label: "In-House Engineered",
      sub: "Software platforms and product blueprints."
    },
    {
      stat: "Sovereign Cloud",
      label: "Domestic Hosting",
      sub: "Data residency compliance & localized disaster recovery."
    },
    {
      stat: "PMP-Grade",
      label: "Enterprise Governance",
      sub: "Rigorous architecture oversight & documented milestones."
    }
  ];

  const practices = [
    {
      id: "practice-a",
      number: "01",
      title: "Proprietary IT & Mobile Product Engineering",
      tagline: "Custom Architecture & Mobile Development",
      desc: "Scalable microservices, offline-first mobile apps, real-time transaction pipelines, and Bhashini multilingual NLP integration across 22 Indian languages.",
      borderColor: "border-cloud-500/40",
      textColor: "text-cloud-400",
      icon: Code2,
      target: "CTOs, Product Heads, and Tech Innovators",
      items: [
        "Cloud-native microservices and distributed transaction pipelines",
        "Offline-first iOS & Android mobile applications",
        "Voice-first Bhashini NLP (22 Languages)",
        "Zero-Trust Network Architecture (ZTNA)"
      ],
      link: "/solutions/mobile-products"
    },
    {
      id: "practice-b",
      number: "02",
      title: "Sovereign Cloud Platforms & Civic Digital Systems",
      tagline: "Resilient Infrastructure & Civic Portals",
      desc: "High-availability sovereign cloud hosting (Rapido Hosting), paperless civic portals, GIS municipal asset monitoring, and compliant data residency.",
      borderColor: "border-saffron-500/40",
      textColor: "text-saffron-400",
      icon: Server,
      target: "PSUs, State/Central Government Bodies, Regulated Enterprises",
      items: [
        "Sovereign cryptographic identity integration",
        "Paperless enterprise portals with immutable audit ledgers",
        "Unified GIS municipal spatial asset intelligence",
        "99.999% SLA availability with localized disaster recovery"
      ],
      link: "/solutions/rapido-hosting"
    }
  ];

  const lifecycleStages = [
    {
      step: "01",
      title: "Feasibility & Architecture Discovery",
      desc: "Scoping technical, regulatory, and scalability requirements.",
      icon: Search
    },
    {
      step: "02",
      title: "System Design & Blueprinting",
      desc: "Component topologies, database schema, and security threat models.",
      icon: Layers
    },
    {
      step: "03",
      title: "Proprietary Engineering",
      desc: "Clean-code implementation, modular APIs, and continuous integration.",
      icon: Code2
    },
    {
      step: "04",
      title: "Sovereign Deployment & Verification",
      desc: "Domestic cloud hardening, vulnerability testing, and SLA verification.",
      icon: ShieldCheck
    },
    {
      step: "05",
      title: "Lifecycle Governance",
      desc: "Architecture audits, capacity scaling, and ongoing support.",
      icon: RefreshCw
    }
  ];

  return (
    <div className="relative overflow-hidden bg-rapido-950">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-800/80">
        <HeroSection />
      </section>

      {/* 2. INSTITUTIONAL AUTHORITY STRIP */}
      <section className="py-8 bg-rapido-900/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                  {item.stat}
                </div>
                <div className="text-xs font-semibold text-cloud-400 mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE MISSION & POSITIONING */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
              Architecting Digital Bharat
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Partnering with Enterprise &amp; Government Leadership
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong>RAPIDO INFRATEL LLP</strong> designs and architects proprietary IT &amp; Mobile Products engineered for enterprise digital infrastructure. We partner with enterprise leadership and government departments to architect sovereign software and resilient digital public infrastructure.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our product architecture draws its foundational inspiration from <em>Architecting Digital Bharat</em> under the core concept of <strong>universal human inclusion and equity</strong>—which asserts that actively involving and valuing every individual directly strengthens communities and elevates the quality of life for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE TWO CORE ENGINEERING PRACTICES */}
      <section className="py-16 md:py-24 bg-rapido-900/60 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
              Engineering Practices
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Two Core Engineering Practices
            </h2>
            <p className="text-sm text-slate-300">
              Architecting proprietary mobile applications, scalable microservices, and sovereign cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.id}
                  className={`glass-card p-8 rounded-2xl border ${practice.borderColor} flex flex-col justify-between relative overflow-hidden group glass-card-hover`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${practice.textColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-slate-500 transition-colors">
                        {practice.number}
                      </span>
                    </div>

                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${practice.textColor}`}>
                        {practice.tagline}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 leading-snug">
                        {practice.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {practice.desc}
                      </p>
                    </div>

                    <div className="text-xs text-slate-400 font-semibold bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg">
                      Target Profile: <span className="text-white">{practice.target}</span>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                      {practice.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${practice.textColor}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={practice.link}
                      className={`inline-flex items-center gap-2 text-xs font-bold ${practice.textColor} hover:underline`}
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

      {/* 5. THE 5-STAGE ARCHITECTURE ENGAGEMENT LIFECYCLE */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              PMP-Grade Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The 5-Stage Architecture Engagement Lifecycle
            </h2>
            <p className="text-sm text-slate-300">
              Rigorous architecture oversight and documented milestones ensuring scalable deployment and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="glass-card p-5 rounded-xl border border-slate-800 relative group flex flex-col h-full">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mb-4 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">STAGE {stage.step}</div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{stage.title}</h4>
                  <p className="text-xs text-slate-400 mt-auto leading-relaxed">{stage.desc}</p>
                </div>
              );
            })}
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

      {/* 7. HIGH-CONVERSION INTAKE SECTION */}
      <section id="architecture-review" className="py-16 md:py-24 relative">
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
                  <span>Structured enterprise and institutional qualification</span>
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
