"use client";
import React, { useState, useEffect } from "react";
import { Activity, RefreshCw, Zap, Shield, Server, CheckCircle2 } from "lucide-react";

export default function EdgeLatencySandbox() {
  const [probes, setProbes] = useState([
    { city: "Mumbai (BOM-01)", region: "India West", status: "Optimal", baseLatency: 8, latency: 8, jitter: 1, type: "Edge Anycast POP" },
    { city: "Delhi / NCR (DEL-01)", region: "India North", status: "Optimal", baseLatency: 14, latency: 14, jitter: 2, type: "Edge Anycast POP" },
    { city: "Bangalore (BLR-01)", region: "India South", status: "Optimal", baseLatency: 18, latency: 18, jitter: 2, type: "Sovereign Datacenter" },
    { city: "Ahmedabad (AMD-01)", region: "Headquarters Hub", status: "Direct", baseLatency: 2, latency: 2, jitter: 0.5, type: "Primary Operations Core" },
    { city: "Singapore (SIN-01)", region: "Asia Pacific", status: "Optimal", baseLatency: 38, latency: 38, jitter: 3, type: "Global Transit Peer" },
    { city: "Frankfurt (FRA-01)", region: "Europe Central", status: "Healthy", baseLatency: 104, latency: 104, jitter: 5, type: "Global Transit Peer" },
  ]);
  const [isProbing, setIsProbing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  const runProbe = () => {
    setIsProbing(true);
    setTimeout(() => {
      setProbes((prev) =>
        prev.map((p) => {
          const delta = (Math.random() * p.jitter * 2 - p.jitter).toFixed(1);
          const newLatency = Math.max(1, +(p.baseLatency + parseFloat(delta)).toFixed(1));
          return {
            ...p,
            latency: newLatency,
          };
        })
      );
      setIsProbing(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 600);
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-cloud-500/30 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cloud-400 bg-cloud-500/10 px-2.5 py-1 rounded-full border border-cloud-500/20 mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            Live Edge Latency Sandbox
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Sovereign Anycast Edge Routing &amp; Latency Monitor
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Real-time telemetry and sub-millisecond edge resolution across Indian and Global Anycast nodes.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {lastUpdated && (
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Updated: {lastUpdated}
            </span>
          )}
          <button
            onClick={runProbe}
            disabled={isProbing}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-cloud-500/15 text-cloud-300 border border-cloud-500/30 hover:bg-cloud-500/25 hover:text-white transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isProbing ? "animate-spin text-cloud-400" : ""}`} />
            <span>{isProbing ? "Probing Edge..." : "Execute Edge Probe"}</span>
          </button>
        </div>
      </div>

      {/* PROBE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {probes.map((probe) => (
          <div
            key={probe.city}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-slate-400 group-hover:text-cloud-400 transition-colors" />
                  <span>{probe.city}</span>
                </div>
                <div className="text-[11px] text-slate-400">{probe.region}</div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {probe.status}
              </span>
            </div>

            <div className="flex items-end justify-between pt-2 border-t border-slate-800/80">
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Type</div>
                <div className="text-xs text-slate-300 font-medium">{probe.type}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">RTT Latency</div>
                <div className="text-lg font-mono font-bold text-cloud-300">
                  {probe.latency} <span className="text-xs text-slate-400 font-sans">ms</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>99.999% SLA Uptime · Automated BGP Anycast failover with instant multi-region failover.</span>
        </div>
        <div className="text-slate-300 font-mono text-[10px]">
          Target: <span className="text-saffron-300">rapidoinfratel.com</span>
        </div>
      </div>
    </div>
  );
}
