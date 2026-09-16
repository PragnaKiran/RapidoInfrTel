import React from "react";
import Link from "next/link";
import { 
  Server, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock, 
  Share2,
  Database,
  Layers,
  Activity
} from "lucide-react";

export const metadata = {
  title: "Enterprise Cloud Platforms & Digital Utilities | RAPIDO INFRATEL LLP",
  description: "Enterprise cloud-native microservices, fault-tolerant transaction pipelines, and distributed digital utility backbones running over carrier telecommunication networks.",
};

export default function EnterprisePlatformsPage() {
  const capabilities = [
    {
      title: "Cloud-Native Microservices & High-Throughput Pipelines",
      desc: "Architecting resilient, containerized microservices architectures capable of processing millions of concurrent transactions with deterministic sub-millisecond execution times.",
      icon: Server,
      points: [
        "Event-driven architecture utilizing distributed pub/sub messaging and message queues",
        "Stateless API gateways with dynamic auto-scaling, load balancing, and rate-limiting",
        "Carrier network interface abstractions for direct carrier-grade interconnect",
        "High-density database clustering with read-replica auto-failover and zero data loss"
      ]
    },
    {
      title: "Sub-50ms Failover & Distributed Utility Resilience",
      desc: "Eliminating single points of failure across enterprise workloads through automated traffic rerouting and active-active geographic replication over carrier transmission backbones.",
      icon: Zap,
      points: [
        "Sub-50ms automated multi-region failover orchestration across distributed cloud zones",
        "Zero-downtime blue/green and canary deployment pipelines with instant rollback",
        "Carrier-grade service mesh resilience protocols with automated health probing",
        "Continuous automated chaos engineering and state validation under load"
      ]
    },
    {
      title: "Zero-Trust Security Perimeter & Sovereign Hardware Enclaves",
      desc: "Securing mission-critical data pipelines with cryptographic verification, mutual TLS (mTLS), and dedicated hardware security modules compliant with sovereign data policies.",
      icon: Lock,
      points: [
        "FIPS 140-2 Level 3 Hardware Security Module (HSM) key isolation and sovereign management",
        "Zero-Trust Network Architecture (ZTNA) with continuous policy evaluation and identity fencing",
        "Immutable audit ledgers with cryptographic non-repudiation for compliance verification",
        "End-to-end data encryption at rest (AES-256) and in transit (TLS 1.3 Post-Quantum ready)"
      ]
    },
    {
      title: "Carrier Network Interconnect & Data Bus Architecture",
      desc: "Bridging software applications directly to carrier optical backbones, small-cell networks, and edge datacenters without public internet jitter or transit overhead.",
      icon: Share2,
      points: [
        "Dedicated Layer-2/Layer-3 direct carrier transmission peering interfaces",
        "Optimized MTU frame sizing and low-latency packet routing across telecom corridors",
        "Carrier-neutral software interconnect across national telecom lines",
        "Deterministic bandwidth reservation for civic utilities and emergency payloads"
      ]
    }
  ];

  const specs = [
    { label: "Target Availability SLA", val: "99.999% SLA", sub: "Clustered Geographic Redundancy" },
    { label: "Failover Latency", val: "< 50ms Failover", sub: "Automated Traffic Steering" },
    { label: "Security Architecture", val: "Zero-Trust & mTLS", sub: "Continuous Cryptographic Auth" },
    { label: "Infrastructure Model", val: "Carrier-Interfaced", sub: "Direct Telecommunication Bus" },
  ];

  return (
    <div className="bg-telecom-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-fiber-400 animate-pulse" />
            <span>Architecting Digital Bharat · Cloud Platforms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Enterprise <span className="gradient-text-fiber">Cloud-Native Platforms</span> &amp; Digital Utilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We architect and manage resilient cloud-native platforms, high-throughput microservices, and distributed digital utility backbones designed to operate directly across carrier telecommunications infrastructure with sub-50ms resilience and zero-downtime reliability.
          </p>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="glass-card p-5 rounded-xl border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-white font-mono">{s.val}</div>
              <div className="text-xs font-semibold text-fiber-400 mt-1">{s.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Architectural Framework</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Core Engineering Pillars &amp; Platform Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-fiber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{cap.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{cap.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {cap.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-card p-8 rounded-2xl border border-fiber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Ready to Architect Resilient Enterprise Platforms?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consult with our solutions architecture committee in Ahmedabad. We design and deliver production-grade platforms with PMP-grade project governance.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/architecture"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              View System Architecture
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-telecom-950 bg-fiber-400 hover:bg-fiber-300 shadow-lg shadow-fiber-500/20 transition-all flex items-center gap-2"
            >
              <span>Consult Solutions Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
