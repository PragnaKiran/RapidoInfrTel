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
  Layers
} from "lucide-react";

export const metadata = {
  title: "Digital India Initiatives | National Mission Alignment",
  description: "How RAPIDO INFRATEL LLP actively supports and enables the Digital India Mission: BharatNet OFC connectivity, PM-WANI Wi-Fi revolution, Digital Public Infrastructure (DPI), and Bhashini multilingual empowerment.",
};

export default function DigitalIndiaPage() {
  const initiatives = [
    {
      name: "BharatNet & National OFC Backbone",
      badge: "Broadband for All",
      desc: "Providing high-speed optical fiber connectivity to rural Gram Panchayats and semi-urban clusters. We engineer carrier-neutral middle-mile transmission and last-mile FTTH networks that unlock telemedicine, rural e-learning, and digitized administrative records.",
      deliverables: [
        "HDD trenchless fiber laying along state highways & rural corridors",
        "Point of Presence (POP) shelters equipped with solar & battery backups",
        "Carrier-neutral GPON optical termination with 99.9% uptime targets"
      ],
      icon: Radio,
      color: "text-fiber-400"
    },
    {
      name: "PM-WANI Public Wi-Fi Revolution",
      badge: "Affordable Universal Access",
      desc: "Deploying Public Data Office Aggregator (PDOA) architecture under the Prime Minister Wi-Fi Access Network Interface. This initiative allows local kirana stores, panchayat bhavans, and transit hubs to distribute affordable, micro-sachet internet access.",
      deliverables: [
        "DoT Central Registry interoperable authentication stacks",
        "Outdoor carrier-grade Wi-Fi 6 access point grid management",
        "Instant UPI-based micro-billing for sachet data consumption"
      ],
      icon: Wifi,
      color: "text-saffron-400"
    },
    {
      name: "Digital Public Infrastructure (India Stack)",
      badge: "Sovereign Trust Framework",
      desc: "Integrating the tri-layer India Stack: Identity (Aadhaar authentication), Payments (UPI / BBPS gateways), and Data (DigiLocker & Account Aggregators) into public enterprise workflows for frictionless citizen experiences.",
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
      desc: "Integrating the Bhashini National Language Translation platform into public portals. Ensuring that every citizen can access governance services and digital infrastructure in their native mother tongue across 22 scheduled languages.",
      deliverables: [
        "Voice-enabled civic inquiry interfaces for low-literacy citizens",
        "Real-time text translation microservices across major Indian languages",
        "Accessible, WCAG 2.1 AA compliant civic interface designs"
      ],
      icon: Globe2,
      color: "text-blue-400"
    },
    {
      name: "Smart Cities & Municipal ICCC",
      badge: "Urban Intelligence",
      desc: "Deploying spatial GIS databases, IoT asset sensors, and Integrated Command and Control Centers (ICCC) for municipal corporations. Enabling automated utility billing, emergency dispatch, and predictive traffic routing.",
      deliverables: [
        "Underground utility GIS mapping (water, gas, power, telecom ducts)",
        "Real-time SCADA and IoT sensor telemetry dashboards",
        "Centralized civic grievance and dispatch automation"
      ],
      icon: Building2,
      color: "text-amber-400"
    }
  ];

  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            National Mission Alignment
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Enabling the Vision of <br />
            <span className="gradient-text-saffron">Digital India</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Technology is the greatest democratizer of opportunity. At RAPIDO INFRATEL LLP, our infrastructure blueprints directly support the national pillars of the Digital India Mission.
          </p>
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
                      Key Engineering Outcomes:
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fiber-400 hover:text-fiber-300 transition-colors"
                  >
                    <span>Inquire about this national initiative framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM MOTTO BANNER */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-telecom-900 via-slate-900 to-telecom-950 border border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white max-w-2xl mx-auto">
            “Making technology an enabler of social and economic empowerment for every citizen.”
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            RAPIDO INFRATEL LLP · Committed to building the sovereign infrastructure and high-speed digital pipelines for Bharat’s Viksit Bharat 2047 horizon.
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
