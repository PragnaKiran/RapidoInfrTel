"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Radio, 
  Wifi, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function FeasibilityTool() {
  const [projectType, setProjectType] = useState("ofc");
  const [coverageLength, setCoverageLength] = useState(25); // km or thousand citizens
  const [slaTier, setSlaTier] = useState("99.99");
  const [includeIdentityStack, setIncludeIdentityStack] = useState(true);
  const [terrainType, setTerrainType] = useState("urban");

  const estimates = useMemo(() => {
    if (projectType === "ofc") {
      const fiberCores = coverageLength > 50 ? "288-Core Armored Ribbon" : coverageLength > 20 ? "96-Core Armored OFC" : "48-Core OFC";
      const popNodes = Math.max(2, Math.ceil(coverageLength / 7));
      const splices = Math.ceil(coverageLength * 4.5);
      const estLatency = (coverageLength * 0.005).toFixed(2);
      return {
        title: "Optical Fiber & FTTH Backbone",
        primaryMetric: `${popNodes} Core POPs`,
        metricLabel: "Edge Aggregation Nodes",
        cableSpec: fiberCores,
        spliceClosures: `${splices} Joint Enclosures`,
        latencyEstimate: `< ${estLatency} ms latency`,
        redundancy: slaTier === "99.999" ? "Full N+N Dual Diverse Ring" : "Protected 1+1 Ring Mesh",
        compliance: "DoT TEC GR/OFC-02 & BharatNet Phase-3 Ready",
      };
    } else if (projectType === "pm-wani") {
      const accessPoints = Math.ceil(coverageLength * 12);
      const pdoaGateways = Math.max(1, Math.ceil(coverageLength / 15));
      const concurrentUsers = accessPoints * 65;
      return {
        title: "PM-WANI Public Wi-Fi Grid",
        primaryMetric: `${accessPoints} Access Points`,
        metricLabel: "PDO Outdoor Wi-Fi 6 APs",
        cableSpec: "Gigabit PoE Backhaul + GPON FTTH",
        spliceClosures: `${pdoaGateways} PDOA Gateways`,
        latencyEstimate: `${concurrentUsers.toLocaleString()} Concurrent Citizens`,
        redundancy: "DoT Central Registry Token Validation",
        compliance: "TRAI / PM-WANI Public Data Office Aggregator Compliant",
      };
    } else {
      const gisLayers = 14;
      const connectedDepartments = Math.max(4, Math.min(18, Math.ceil(coverageLength / 5)));
      const iotSensors = Math.ceil(coverageLength * 85);
      return {
        title: "Smart City GIS & Citizen Portal",
        primaryMetric: `${connectedDepartments} Departments`,
        metricLabel: "Single-Window Integrations",
        cableSpec: "Zero-Trust Hybrid Cloud Mesh",
        spliceClosures: `${iotSensors} IoT Sensor Endpoints`,
        latencyEstimate: "Sub-second Civic API Response",
        redundancy: "Multi-Zone Cloud Disaster Recovery (DR)",
        compliance: "MeitY e-Governance Architecture & Open API Standards",
      };
    }
  }, [projectType, coverageLength, slaTier]);

  return (
    <div className="w-full glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-fiber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-2.5 py-1 rounded-full mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Feasibility Modeler</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Digital Infrastructure &amp; Telecom Capacity Estimator
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Model route architectures, strand counts, edge nodes, and statutory compliance standards for municipal, carrier, and civic deployment frameworks.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Spec Version:</span>
          <span className="text-xs font-mono font-semibold text-saffron-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
            v2026.1 TEC/DoT
          </span>
        </div>
      </div>

      {/* Controls & Results Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Type Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              1. Deployment Blueprint Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setProjectType("ofc")}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  projectType === "ofc"
                    ? "bg-fiber-500/15 border-fiber-500 text-white shadow-lg shadow-fiber-500/10"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <Radio className="w-5 h-5 mb-2 text-fiber-400" />
                <div>
                  <div className="text-xs font-bold text-white">OFC &amp; FTTH</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Optical Fiber Highway</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setProjectType("pm-wani")}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  projectType === "pm-wani"
                    ? "bg-fiber-500/15 border-fiber-500 text-white shadow-lg shadow-fiber-500/10"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <Wifi className="w-5 h-5 mb-2 text-saffron-400" />
                <div>
                  <div className="text-xs font-bold text-white">PM-WANI Wi-Fi</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">PDOA Cluster Mesh</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setProjectType("smart-city")}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  projectType === "smart-city"
                    ? "bg-fiber-500/15 border-fiber-500 text-white shadow-lg shadow-fiber-500/10"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <Layers className="w-5 h-5 mb-2 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white">GIS &amp; Smart City</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">ICCC &amp; e-Gov Stack</div>
                </div>
              </button>
            </div>
          </div>

          {/* Slider: Distance / Reach */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                2. Deployment Span / Route Scale
              </label>
              <span className="text-sm font-bold font-mono text-fiber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                {coverageLength} {projectType === "ofc" ? "Route Kilometers" : projectType === "pm-wani" ? "Sq. Kilometers" : "Civic Wards"}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={coverageLength}
              onChange={(e) => setCoverageLength(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fiber-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>5 {projectType === "ofc" ? "km (Local Ring)" : "Units"}</span>
              <span>75 {projectType === "ofc" ? "km (Metropolitan)" : "Units"}</span>
              <span>150 {projectType === "ofc" ? "km (Inter-City Corridor)" : "Units"}</span>
            </div>
          </div>

          {/* Grid: SLA & Terrain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                3. Carrier SLA Target
              </label>
              <select
                value={slaTier}
                onChange={(e) => setSlaTier(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-fiber-500"
              >
                <option value="99.9">99.9% - Standard Commercial</option>
                <option value="99.99">99.99% - Carrier Grade (High-Availability)</option>
                <option value="99.999">99.999% - Mission-Critical / ICCC Grade</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                4. Terrain &amp; Right of Way (RoW)
              </label>
              <select
                value={terrainType}
                onChange={(e) => setTerrainType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-fiber-500"
              >
                <option value="urban">Dense Urban (HDD Trenchless &amp; Micro-duct)</option>
                <option value="suburban">Suburban / Industrial Corridor</option>
                <option value="rural">Rural / Gram Panchayat (BharatNet RoW)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Feasibility Architecture Card (5 cols) */}
        <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-slate-900/90 to-telecom-950 p-6 border border-slate-700/80 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Architectural Output
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Feasible
              </span>
            </div>

            <div>
              <div className="text-xs text-slate-400">{estimates.metricLabel}</div>
              <div className="text-3xl font-black text-white tracking-tight mt-0.5">
                {estimates.primaryMetric}
              </div>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Cable Specification</span>
                <span className="font-semibold text-white text-right">{estimates.cableSpec}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Enclosures / Nodes</span>
                <span className="font-semibold text-white">{estimates.spliceClosures}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Performance Index</span>
                <span className="font-semibold text-fiber-400">{estimates.latencyEstimate}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Topology Protection</span>
                <span className="font-semibold text-slate-200">{estimates.redundancy}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-[11px] text-slate-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
              <span><strong>Statutory Benchmark:</strong> {estimates.compliance}</span>
            </div>
          </div>

          <Link
            href={`/contact?type=${projectType}&scale=${coverageLength}`}
            className="w-full py-3 px-4 rounded-lg bg-fiber-500 hover:bg-fiber-400 text-telecom-950 font-bold text-xs tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-fiber-500/20"
          >
            <span>Request Full Engineering Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
