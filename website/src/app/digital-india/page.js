import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  Wifi, 
  ShieldCheck, 
  Building2, 
  Radio, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Layers,
  Cpu,
  Lock
} from "lucide-react";

export const metadata = {
  title: "Architecting Digital Bharat | Universal Human Inclusion & Equity",
  description: "RAPIDO INFRATEL LLP architects proprietary IT & mobile products for enterprise digital infrastructure under the concept of universal human inclusion and equity, elevating quality of life across Bharat.",
};

export default function DigitalIndiaPage() {
  const initiatives = [
    {
      name: "Universal High-Throughput Digital Pipelines & Platforms",
      badge: "Broadband Utility for All",
      desc: "Architecting software platforms and solutions designs operating over high-speed enterprise digital pipelines for rural Gram Panchayats and semi-urban clusters. We unlock telemedicine, rural e-learning, and digitized administrative workflows.",
      deliverables: [
        "Enterprise digital pipeline design along state & rural corridors",
        "Point of Presence (POP) cloud enclaves with solar & battery backups",
        "High-throughput civic utility routing with 99.99% uptime targets"
      ],
      icon: Radio,
      color: "text-cloud-400"
    },
    {
      name: "Open Community Wi-Fi Mesh & Civic Grids",
      badge: "Universal Access",
      desc: "Architecting open-access community Wi-Fi mesh networks across local retail touchpoints, panchayat centers, and transit hubs to distribute affordable, equitable internet access to every citizen.",
      deliverables: [
        "Decentralized, open-standard authentication & token verification",
        "Outdoor enterprise-grade Wi-Fi 6 access point grid management",
        "Instant UPI-based micro-billing for accessible civic connectivity"
      ],
      icon: Wifi,
      color: "text-saffron-400"
    },
    {
      name: "Digital Public Infrastructure & Sovereign Trust",
      badge: "Identity & Trust",
      desc: "Integrating sovereign trust architectures (Aadhaar authentication protocols, UPI / BBPS gateways, and DigiLocker credential vaults) into enterprise workflows for frictionless citizen experiences.",
      deliverables: [
        "Aadhaar OTP & Biometric e-KYC integration (AUA/KUA protocols)",
        "Automated digital certificate issuance and retrieval via DigiLocker",
        "Hardware-backed PKI digital signatures for statutory approvals"
      ],
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      name: "Bhashini Multilingual Localization",
      badge: "Linguistic Inclusion",
      desc: "Integrating Bhashini Indian Language NLP microservices into public platforms. Ensuring that every citizen can access digital services, applications, and public information in their native mother tongue across 22 scheduled languages.",
      deliverables: [
        "Voice-enabled civic inquiry interfaces for low-literacy citizens",
        "Real-time text translation microservices across major Indian languages",
        "Accessible, WCAG 2.1 AA compliant civic interface designs"
      ],
      icon: Globe2,
      color: "text-blue-400"
    },
    {
      name: "Smart Cities & Municipal Spatial Cadastre",
      badge: "Urban Intelligence",
      desc: "Deploying spatial GIS databases, IoT asset sensors, and Integrated Command and Control Center (ICCC) data pipelines for municipal corporations. Enabling automated utility billing, emergency dispatch, and predictive traffic routing.",
      deliverables: [
        "Underground utility GIS mapping (water, gas, power, network conduit ducts)",
        "Real-time SCADA and IoT sensor telemetry dashboards",
        "Centralized civic grievance and dispatch automation"
      ],
      icon: Building2,
      color: "text-amber-400"
    }
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            Architecting Digital Bharat · Inclusion &amp; Equity Charter
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Architecting Digital Bharat: <br />
            <span className="gradient-text-saffron">Universal Human Inclusion &amp; Equity</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We are neither an IT services firm nor a network infrastructure provider; we architect proprietary IT and mobile products designed to empower citizens through established enterprise digital networks. Inspired by the foundational paradigm of <strong>Architecting Digital Bharat</strong>, our product design is anchored in universal human inclusion and equity—actively involving and valuing every individual regardless of race, color, or gender, directly strengthening communities and elevating the quality of life for everyone.
          </p>
        </div>

        {/* HERO BANNER */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/banner_digital_india.jpg"
            alt="Digital Bharat Connectivity and Universal Inclusion"
            className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <div>
              <span className="font-bold text-white">Architecting Digital Bharat</span>
              <span className="hidden sm:inline text-slate-400"> · Sovereign IT &amp; Mobile Products for 1.4 Billion Citizens</span>
            </div>
            <span className="text-saffron-400 font-mono text-[11px] font-semibold">Universal Equity Paradigm</span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/content_digital_india.jpg"
            alt="Universal Human Inclusion and Diverse Leadership in Technology Innovation"
            className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-lg">
            <div className="font-bold text-white text-sm">Universal Human Inclusion &amp; Equity in Technology</div>
            <p className="text-slate-400 text-[11px] mt-1">
              Active representation, gender equity, and fair access across every digital pipeline and mobile platform we architect.
            </p>
          </div>
        </div>

        {/* EQUITY & HUMAN INCLUSION PILLARS */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/10 border border-saffron-500/20 flex items-center justify-center text-saffron-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">The Universal Human Inclusion &amp; Equity Charter</h3>
              <p className="text-xs text-slate-400">Our foundational commitment across product architecture, governance, and hiring</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-rapido-950/80 border border-slate-800 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Hidden Prejudices</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Eliminating unconscious biases that influence hiring, housing, and social interactions through transparent, meritocratic protocols.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rapido-950/80 border border-slate-800 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Equal Opportunity &amp; Fair Treatment</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Dismantling systemic policies that result in unfair treatment of any community or group, guaranteeing equitable digital access.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rapido-950/80 border border-slate-800 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Closing the Wage Gap</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Strict adherence to equal pay for equal work, fair compensation structures, and acknowledging unpaid domestic labor realities.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rapido-950/80 border border-slate-800 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Female Leadership in Tech</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Proactively cultivating, mentoring, and appointing women into technology architecture, executive governance, and engineering roles.
              </p>
            </div>
          </div>
        </div>

        {/* INITIATIVES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="glass-card p-8 rounded-2xl border border-slate-800 space-y-5 flex flex-col justify-between group glass-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      Engineering Architecture Deliverables:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${item.color}`} />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?initiative=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cloud-400 hover:text-cloud-300 transition-colors"
                  >
                    <span>Inquire regarding solution design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM MOTTO BANNER */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-rapido-900 via-slate-900 to-rapido-950 border border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white max-w-2xl mx-auto">
            “Architecting Digital Bharat — Involving and valuing every individual to strengthen communities and elevate the quality of life for everyone.”
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            RAPIDO INFRATEL LLP · Designing and architecting proprietary IT &amp; Mobile Products built for enterprise digital infrastructure.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-saffron-500 hover:bg-saffron-400 text-white font-bold text-xs transition-colors shadow-lg shadow-saffron-500/20"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
