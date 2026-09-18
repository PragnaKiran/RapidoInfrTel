import React from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Server, 
  Zap,
  Globe2,
  ShieldCheck,
  Compass,
  HardHat
} from "lucide-react";

export const metadata = {
  title: "Spatial GIS & Building Complex BIM | AMC Licensed Developers | RAPIDO INFRATEL LLP",
  description: "Centimeter-accurate geospatial site cadastre, 3D Building Information Modeling (BIM), and commercial complex infrastructure engineering as AMC Licensed Developers.",
};

export default function SpatialGisPage() {
  const capabilities = [
    {
      title: "Building Information Modeling (BIM) & 3D Structural Modeling",
      desc: "Architecting multi-dimensional Building Information Models (BIM) for commercial complexes, residential towers, and mixed-use real estate developments with complete lifecycle tracking.",
      icon: Building2,
      points: [
        "LOD 300 to LOD 500 detailed architectural, structural, and MEP engineering models",
        "Subsurface conduit, plumbing, and HVAC clash detection before construction",
        "Parametric structural simulation and digital twin replicas of completed complexes",
        "Automated quantity takeoffs and material estimation integration"
      ]
    },
    {
      title: "Geospatial Site Cadastre & Topographical Surveying",
      desc: "Delivering centimeter-accurate boundary demarcation, drone photogrammetry, and digital elevation models for land parcels, development plots, and private campuses.",
      icon: MapPin,
      points: [
        "Centimeter-grade RTK-GPS parcel surveying and coordinate geo-referencing",
        "High-density drone LIDAR contour mapping and volumetric cut-and-fill analysis",
        "Comprehensive site cadastre adhering to state and local town planning benchmarks",
        "Clash-free alignment of external utility tie-ins (power, water, telecom, drainage)"
      ]
    },
    {
      title: "Smart Commercial Complexes & Building Automation Telemetry",
      desc: "Embedding high-frequency IoT sensor networks directly into complex infrastructure for intelligent energy management, HVAC optimization, and predictive maintenance.",
      icon: Activity,
      points: [
        "Sub-second telemetry ingestion across electrical substations, pumps, and chillers",
        "Occupancy-aware climate and lighting automation using localized edge controllers",
        "Predictive maintenance alerting before mechanical or electrical failure",
        "Centralized property operations dashboards with unified telemetry overlays"
      ]
    },
    {
      title: "Complex Utility Infrastructure & Campus Conduits",
      desc: "Engineering dedicated underground utility corridors, redundant electrical distribution, and internal fiber optic backbone pathways for private commercial estates.",
      icon: Layers,
      points: [
        "Dedicated subsurface utility trenches ensuring zero interference between power and data",
        "Rainwater harvesting, stormwater drainage, and sewage treatment plant (STP) CAD layers",
        "Emergency egress, fire suppression piping, and life-safety spatial coordination",
        "Turnkey execution from architectural blueprint to completed physical complex"
      ]
    }
  ];

  const metrics = [
    { label: "Survey Precision", val: "Centimeter", sub: "RTK-GPS & Drone Photogrammetry" },
    { label: "BIM Maturity", val: "LOD 500", sub: "Full As-Built Facility Models" },
    { label: "License Status", val: "AMC Licensed", sub: "Approved Complex Developer" },
    { label: "Telemetry Latency", val: "< 100ms", sub: "Real-Time Building IoT Telemetry" },
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
              <HardHat className="w-3.5 h-3.5" />
              <span>AMC Licensed Developers · Spatial GIS &amp; Complex BIM</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Spatial GIS &amp; <span className="gradient-text-saffron">Building Complex BIM</span> Engineering
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              As accredited <strong>AMC Licensed Developers</strong>, we engineer and construct modern commercial complexes, residential towers, and mixed-use campuses. We integrate centimeter-accurate geospatial site cadastre with multi-dimensional Building Information Modeling (BIM) and intelligent building automation.
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/banner_spatial_gis.jpg"
              alt="3D Building Information Modeling and Spatial GIS for Commercial Complexes"
              className="w-full h-[260px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Commercial Complex BIM &amp; Spatial Cadastre</span>
                <span className="hidden sm:inline text-slate-400"> · Site Surveying, MEP Clash Detection &amp; Structural Engineering</span>
              </div>
              <span className="text-saffron-400 font-mono text-[11px] font-semibold">AMC Licensed Developer</span>
            </div>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-5 rounded-xl border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-white font-mono">{m.val}</div>
              <div className="text-xs font-semibold text-saffron-400 mt-1">{m.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Explanatory Content Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Construction &amp; Real Estate Development</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              AMC Licensed Developers: Constructing Tomorrow's Built Environment
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operating with full <strong>AMC Licensed Developer</strong> certification in Ahmedabad, we provide comprehensive real estate development capabilities. We build modern commercial complexes, corporate headquarters, retail centers, and residential developments from ground-up excavation to architectural finish.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our engineering team deploys advanced Spatial GIS and 3D BIM models during design and construction. This guarantees zero conduit clash, optimized solar and wind orientation, energy-efficient building envelopes, and seamless infrastructure connectivity.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                <span>Commercial complex and residential tower construction and development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                <span>3D BIM clash detection for electrical, HVAC, plumbing, and structural elements</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                <span>High-precision drone surveying, site grading, and property boundary cadastre</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl relative group">
              <img
                src="/images/content_spatial_gis.jpg"
                alt="Rapido engineering and construction surveying team reviewing BIM blueprints on site"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Engineering &amp; BIM Practice</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Complete Built-Environment Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-saffron-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{cap.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{cap.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {cap.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0 mt-0.5" />
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
        <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Plan Your Commercial Complex or Building Development
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consult with our AMC Licensed Developers team for turnkey construction, 3D Building Information Modeling (BIM), and geospatial site engineering.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/projects"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              View Complex Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-rapido-950 bg-saffron-400 hover:bg-saffron-300 shadow-lg shadow-saffron-500/20 transition-all flex items-center gap-2"
            >
              <span>Consult Development Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
