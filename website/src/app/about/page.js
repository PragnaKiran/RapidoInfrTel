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
  Scale
} from "lucide-react";

export const metadata = {
  title: "About Us | Corporate Profile & Digital India Vision",
  description: "Learn about RAPIDO INFRATEL LLP (LLPIN: AAV-6363, RoC Ahmedabad). Our corporate profile, vision for Bharat's digital infrastructure, engineering standards, and statutory governance.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Sovereign Engineering Precision",
      desc: "Designing telecom backbones and digital public infrastructure that uphold Indian data sovereignty, non-proprietary protocols, and carrier-neutral access.",
      icon: ShieldCheck,
    },
    {
      title: "Digital India Mission Alignment",
      desc: "Committed to realizing the national vision of technology as an equalizer — delivering high-speed optical fiber and civic services to every citizen.",
      icon: Target,
    },
    {
      title: "Statutory & Regulatory Rigor",
      desc: "Strict adherence to Department of Telecommunications (DoT), TEC guidelines, PM-WANI architectures, and Ministry of Corporate Affairs compliance.",
      icon: Scale,
    },
    {
      title: "Future-Proof Scalability",
      desc: "Architectures engineered for 25+ year lifecycles, supporting dense WDM fiber expansions, 5G small-cell densification, and AI-driven civic analytics.",
      icon: Compass,
    },
  ];

  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Corporate Profile &amp; Entity Data
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Engineering Bharat’s <br />
            <span className="gradient-text-fiber">Digital Infrastructure</span> &amp; Governance Backbone
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong>RAPIDO INFRATEL LLP</strong> is an Ahmedabad-headquartered Technology Solutions Designing and Telecom Infrastructure Engineering Firm. We are driven by a singular mandate: transforming telecommunications pipelines and digital services into seamless utilities for public empowerment.
          </p>
        </div>

        {/* STATUTORY VERIFICATION CARD */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-saffron-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Statutory Entity Verification &amp; Registry
                </h3>
                <p className="text-xs text-slate-400">
                  Registered under Limited Liability Partnership Act, 2008 with Ministry of Corporate Affairs (MCA)
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
              <CheckCircle2 className="w-4 h-4" /> Active &amp; Verified Legal Entity
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
              <span className="text-slate-400 font-medium">Registrar of Companies:</span>
              <div className="font-bold text-white text-sm">RoC Ahmedabad, Gujarat</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Official Contact Email:</span>
              <div className="font-bold text-fiber-400 text-sm">contact@rapidoinfratel.com</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Registered Office Address:</strong> B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India
            </span>
          </div>
        </div>

        {/* STRATEGIC POSITIONING & VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Vision: Technology as an Equalizer
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              At Rapido InfraTel LLP, we believe that true digital transformation is not measured simply by software deployments, but by the physical and architectural integrity of the pipelines that carry essential citizen services.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              From the bustling metropolitan corridors of Gujarat to peri-urban clusters and rural Gram Panchayats, our solutions are architected to deliver <strong>carrier-grade durability</strong>, <strong>frictionless public access</strong>, and <strong>uncompromising data sovereignty</strong>.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-fiber-400 mb-3">
                Core Sectors of Operation
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fiber-400" />
                  <span>Optical Fiber Cable (OFC) Ducting &amp; High-Density FTTH Network Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fiber-400" />
                  <span>PM-WANI Public Data Office Aggregator (PDOA) Mesh Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fiber-400" />
                  <span>e-Governance Systems Architecture (Aadhaar Stack, DigiLocker &amp; PKI)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fiber-400" />
                  <span>Smart City Integrated Command and Control Centers (ICCC) &amp; GIS Mapping</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white">Engineering Core Principles</h3>
            <div className="space-y-4">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800 flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{val.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA TO SOLUTIONS & CONTACT */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-telecom-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to Architect Your Digital Infrastructure?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore our technical specifications across the 3 Digital India Pillars or request a feasibility session.
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
