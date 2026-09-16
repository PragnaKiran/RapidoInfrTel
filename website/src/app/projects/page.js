import React from "react";
import Link from "next/link";
import { 
  Radio, 
  Layers, 
  Wifi, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  MapPin,
  ShieldCheck,
  Activity,
  Server,
  Cpu
} from "lucide-react";

export const metadata = {
  title: "Case Studies & Blueprints | Architecting Digital Bharat",
  description: "Representative blueprints and case studies of RAPIDO INFRATEL LLP: Metropolitan optical fiber rings, municipal GIS smart city systems, and open-access community Wi-Fi mesh deployments.",
};

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: "Metropolitan Optical Fiber Highway & Ring Network",
      tagline: "Solution Architecture & PMP Project Management",
      location: "Ahmedabad – Gandhinagar Economic Corridor, Gujarat",
      desc: "Turnkey solutions architecture, route survey, Right-of-Way (RoW) liaisoning, and PMP-grade project management of a 120 km 96-core and 288-core underground armored optical fiber cable ring connecting major IT parks, financial centers, and municipal edge shelters.",
      stats: [
        { label: "Fiber Route", value: "120+ km" },
        { label: "Core Strand Spec", value: "96F / 288F Armored" },
        { label: "POP Shelters", value: "14 Carrier Nodes" },
        { label: "Ring Redundancy", value: "Sub-50ms ERPS" }
      ],
      deliverables: [
        "HDD trenchless crossings beneath national highways and railway corridors",
        "Carrier-neutral dark fiber leasing and DWDM channel provisioning",
        "Comprehensive OTDR link loss testing and GPS GIS route digitization"
      ],
      icon: Radio,
      color: "text-fiber-400"
    },
    {
      title: "Unified Municipal GIS & Smart City Command Center",
      tagline: "Spatial Intelligence & Asset Sensorization",
      location: "Tier-1 Municipal Corporation Jurisdiction",
      desc: "Architectural blueprint and implementation of an end-to-end municipal spatial data engine. Geo-tagged 45,000+ civic utility fixtures (sewerage, water supply, streetlights, telecom ducts) with real-time telemetry streaming into the Integrated Command and Control Center (ICCC).",
      stats: [
        { label: "Mapped Assets", value: "45,000+ Units" },
        { label: "Spatial Accuracy", value: "Sub-Meter DGPS" },
        { label: "Civic Departments", value: "12 Integrated" },
        { label: "Telemetry Latency", value: "< 2 Seconds" }
      ],
      deliverables: [
        "High-resolution drone and DGPS ground cadastral asset surveying",
        "Integration of SCADA pressure sensors into real-time municipal dashboard",
        "Automated property tax assessment linked to spatial building footprints"
      ],
      icon: Layers,
      color: "text-emerald-400"
    },
    {
      title: "Open Community Wi-Fi Mesh & Civic Access Deployment",
      tagline: "Bridging the Peri-Urban & Rural Connectivity Divide",
      location: "Semi-Urban & Gram Panchayat Clusters",
      desc: "Turnkey solutions engineering of an open-access community Wi-Fi mesh network. Connected local retail outlets (kirana shops), rural health clinics, and schools to high-speed GPON fiber backhauls with instant UPI micro-billing and multilingual support.",
      stats: [
        { label: "Wi-Fi Access Points", value: "240+ Outdoor APs" },
        { label: "Villages Covered", value: "35+ Panchayats" },
        { label: "Peak Citizens", value: "18,000+ Daily" },
        { label: "Uptime Availability", value: "99.98% Monitored" }
      ],
      deliverables: [
        "Open-standard captive portal routing and token verification",
        "Solar-assisted DC power backup for uninterrupted 24/7 connectivity",
        "Local language onboarding via Bhashini voice prompts"
      ],
      icon: Wifi,
      color: "text-saffron-400"
    },
    {
      title: "Cross-Departmental Paperless e-Gov & Mobile Portal",
      tagline: "Faceless & Cashless Civic Service Architecture",
      location: "Urban Development Authority",
      desc: "Enterprise cloud-native public platform consolidating building permissions, trade licenses, utility connections, and grievance redressal into a single unified window. Includes mobile field-force application for on-site verification officers.",
      stats: [
        { label: "Citizen Applications", value: "250,000+ Processed" },
        { label: "Avg Turnaround", value: "Down from 30d to 48h" },
        { label: "Mobile Apps", value: "iOS & Android" },
        { label: "Audit Precision", value: "Immutable Ledger" }
      ],
      deliverables: [
        "Aadhaar OTP authentication and DigiLocker automatic certificate pulls",
        "Integrated UPI and Bharat Bill Payment System (BBPS) fee collection",
        "Mobile inspection application with offline geo-tagged photo capture"
      ],
      icon: FileText,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Architecting Digital Bharat · Track Record
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Case Studies &amp; <br />
            <span className="gradient-text-fiber">Infrastructure Blueprints</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Real-world deployments and reference engineering architectures demonstrating our capability in delivering solutions architecture and PMP-grade management of optical fiber backbones, smart city sensorization, and citizen empowerment grids.
          </p>
        </div>

        {/* FEATURE IMAGE BANNER */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/projects_survey.jpg"
            alt="Field Engineering Team Conducting Route Planning and GPS Surveying"
            className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-lg">
            <div className="font-bold text-white text-sm">PMP-Grade Field Engineering &amp; Route Precision</div>
            <p className="text-slate-400 text-[11px] mt-1">
              On-site optical route surveying, total station alignment, and underground duct GIS digitization ensuring zero-error execution.
            </p>
          </div>
        </div>

        {/* CASE STUDIES LIST */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <div
                key={study.title}
                className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 space-y-8 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${study.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${study.color}`}>
                        Blueprint 0{idx + 1} · {study.tagline}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {study.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                    <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                    <span>{study.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {study.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Architecture Scope:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {study.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${study.color}`} />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-3 bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                    {study.stats.map((st) => (
                      <div key={st.label} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                        <div className="text-lg font-black text-white font-mono">{st.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-telecom-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have a Similar Infrastructure Project in Scope?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Submit your project terms of reference or technical parameters to our solutions architecture committee.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-saffron-500 hover:bg-saffron-400 text-white font-bold text-xs transition-colors flex-shrink-0 shadow-lg shadow-saffron-500/20"
          >
            Submit Technical Scope
          </Link>
        </div>
      </div>
    </div>
  );
}
