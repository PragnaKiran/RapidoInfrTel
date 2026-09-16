import React from "react";
import Link from "next/link";
import { 
  Radio, 
  MapPin, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Server, 
  Zap,
  Globe2,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Municipal Spatial GIS & Urban Sensorization | RAPIDO INFRATEL LLP",
  description: "High-precision geospatial asset intelligence, municipal utility mapping, and real-time IoT sensor telemetry engines for urban administrative centers.",
};

export default function SpatialGisPage() {
  const capabilities = [
    {
      title: "Geospatial Asset Mapping & Utility Corridors",
      desc: "Creating high-fidelity, centimeter-accurate vector layers mapping municipal assets, underground utility conduits, transit lines, and administrative boundaries on open standards.",
      icon: MapPin,
      points: [
        "Open Geospatial Consortium (OGC) compliant WMS, WFS, and Vector Tile servers",
        "Sub-meter coordinate mapping with multi-layer topological verification",
        "Underground utility clash detection and Right-of-Way (RoW) validation",
        "Automated CAD/GIS conversion pipelines for municipal engineering departments"
      ]
    },
    {
      title: "IoT Sensor Telemetry & Real-Time Ingestion",
      desc: "Streaming and analyzing high-frequency telemetry from thousands of municipal environmental sensors, pressure gauges, power substations, and edge monitoring devices.",
      icon: Activity,
      points: [
        "MQTT and CoAP lightweight sensor ingestion pipelines with sub-second latency",
        "Edge filtering and anomaly categorization before cloud persistence",
        "Real-time alerts triggered on water quality, pressure drop, or power fluctuations",
        "Time-series database clustering optimized for multi-billion record queries"
      ]
    },
    {
      title: "Urban Digital Twin Modeling & Spatial Simulation",
      desc: "Simulating urban growth patterns, emergency evacuation corridors, and flood drainage networks using synchronized spatial digital twin models.",
      icon: Layers,
      points: [
        "3D mesh visualization with procedural building generation",
        "Hydrological runoff and flood inundation predictive simulations",
        "Traffic congestion modeling and adaptive signal timing feedback loops",
        "Solar potential and thermal radiation mapping across civic rooftops"
      ]
    },
    {
      title: "Automated Incident Dispatch & Field Routing",
      desc: "Connecting citizen reports directly to the nearest municipal maintenance units with automated spatial routing, priority scoring, and resolution validation.",
      icon: Zap,
      points: [
        "Geo-fenced ticket assignment based on municipal ward jurisdictions",
        "Optimized navigation paths for emergency and maintenance vehicles",
        "Citizen photographic evidence validation with EXIF geo-tag verification",
        "SLA compliance tracking with automated escalation to municipal authorities"
      ]
    }
  ];

  const metrics = [
    { label: "Spatial Precision", val: "Sub-Meter", sub: "Centimeter Accuracy GPS" },
    { label: "Sensor Capacity", val: "100k+ Sensors", sub: "Concurrent Real-Time Streams" },
    { label: "Standard Support", val: "OGC & GeoJSON", sub: "Interoperable Open Standards" },
    { label: "Update Frequency", val: "< 1 Sec Telemetry", sub: "Real-Time Sensor Polling" },
  ];

  return (
    <div className="bg-telecom-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
            <span>Architecting Digital Bharat · Spatial Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Municipal <span className="gradient-text-saffron">Spatial GIS</span> &amp; Urban Sensor Telemetry
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We architect municipal spatial GIS platforms, digital twin layers, and high-frequency IoT sensor telemetry engines that provide city administrators with complete real-time visibility over urban utilities and public infrastructure.
          </p>
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

        {/* Capabilities */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-fiber-400">Geospatial Architecture</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Geospatial Layers, Sensors &amp; Digital Twin Engines
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
              Transform Municipal Administration with Spatial Intelligence
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consult with our geospatial solutions team to architect digital twins, sensor telemetry pipelines, and municipal spatial intelligence systems.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/projects"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              View Case Studies
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-telecom-950 bg-saffron-400 hover:bg-saffron-300 shadow-lg shadow-saffron-500/20 transition-all flex items-center gap-2"
            >
              <span>Consult GIS Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
