import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Zap, 
  Activity, 
  Database,
  Cpu,
  Layers
} from "lucide-react";

export const metadata = {
  title: "Rapido Hosting & Cloud Infrastructure | “We are . in domain name”",
  description: "Under the established Rapido Hosting brand, we are one of the leading hosting service providers and domain name authorities: Sovereign cloud VPS, edge enclaves, Anycast DNS, and instant domain registration.",
};

export default function RapidoHostingPage() {
  const services = [
    {
      title: "Premier Domain Name Registration & Anycast DNS",
      desc: "Instant domain acquisition and authoritative Anycast DNS resolution across global and sovereign national nodes. “We are . in domain name” represents trusted heritage and cryptographic DNSSEC verification.",
      icon: Globe2,
      points: [
        "Accredited registrar integration for .IN, .CO.IN, .COM, .ORG, and sovereign TLDs",
        "Global Anycast DNS cluster with sub-10ms DNS query resolution worldwide",
        "Automated DNSSEC signing protecting against cache poisoning and DNS spoofing",
        "Comprehensive WHOIS privacy protection and granular zone file control"
      ]
    },
    {
      title: "Sovereign Cloud Servers & Managed High-Performance VPS",
      desc: "Enterprise compute instances hosted within Tier-IV sovereign datacenters, powered by ultra-fast PCIe NVMe storage and dedicated bare-metal hypervisors with guaranteed resource isolation.",
      icon: Server,
      points: [
        "Pure NVMe SSD storage arrays delivering over 100,000 IOPS per instance",
        "Dedicated vCPU and RAM allocations with zero noisy-neighbor contention",
        "Automated daily snapshot backups with one-click point-in-time restoration",
        "Bespoke Linux distributions hardened with kernel-level security patches"
      ]
    },
    {
      title: "Edge Compute Enclaves & Low-Latency Caching",
      desc: "Distributing application state and static assets across strategic municipal edge enclaves in Ahmedabad, Mumbai, Delhi, and Bangalore to achieve sub-millisecond local response times.",
      icon: Zap,
      points: [
        "Edge reverse proxy with intelligent HTTP/3 and Brotli compression",
        "Zero-latency edge TLS termination using sovereign certificate managers",
        "Multi-terabit volumetric DDoS mitigation with automated traffic scrubbing",
        "Localized data residency ensuring full compliance with Indian data protection norms"
      ]
    },
    {
      title: "Clustered High-Availability & Disaster Recovery",
      desc: "Architecting active-active and active-passive redundant cluster topologies that deliver guaranteed 99.999% SLA availability for critical government and enterprise workloads.",
      icon: Activity,
      points: [
        "99.999% uptime SLA backed by contractual financial guarantees",
        "Real-time synchronous database replication across divergent power grids",
        "Automated health checks with sub-second failover traffic migration",
        "24x7 enterprise monitoring by specialized network operations architects"
      ]
    }
  ];

  const metrics = [
    { label: "Cloud Uptime SLA", val: "99.999% SLA", sub: "Contractual Availability" },
    { label: "DNS Resolution", val: "< 10ms Anycast", sub: "Global Authoritative Cluster" },
    { label: "Brand Heritage", val: "Since 2009", sub: "15+ Years Registered Trust" },
    { label: "Security Standard", val: "Tier-IV / DNSSEC", sub: "Sovereign Datacenters" },
  ];

  return (
    <div className="bg-telecom-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
            <span>Rapido Hosting · Brand Heritage Since 2009</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Sovereign Cloud Hosting &amp; <br />
            <span className="gradient-text-saffron">“We are . in domain name”</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Under the established <strong>Rapido Hosting</strong> brand, we are one of the leading hosting service providers and domain name authorities. We deliver high-availability sovereign cloud hosting, managed VPS, edge compute enclaves, and premier domain name registration.
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

        {/* Interactive Telemetry Showcase Card */}
        <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-saffron-400 font-bold tracking-wider">
                Active Cloud Enclave Telemetry
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Rapido Sovereign Hosting Infrastructure
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Sovereign Nodes Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400">DNS Query Latency</div>
              <div className="text-xl font-bold text-white">4.2ms</div>
              <div className="text-[10px] text-emerald-400">Anycast BGP Routed</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400">Storage Throughput</div>
              <div className="text-xl font-bold text-white">6,800 MB/s</div>
              <div className="text-[10px] text-saffron-400">Gen4 NVMe RAID-10</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400">DDoS Scrubbing Capacity</div>
              <div className="text-xl font-bold text-white">2.4 Tbps</div>
              <div className="text-[10px] text-fiber-400">Automated Edge Drop</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400">Data Residency</div>
              <div className="text-xl font-bold text-white">100% Bharat</div>
              <div className="text-[10px] text-slate-400">Gujarat / Maharashtra</div>
            </div>
          </div>
        </div>

        {/* Dedicated Anchor Section for Domains: #domains */}
        <section id="domains" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Domain Authority</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Domain Name Solutions: “We are . in domain name”
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl">
              As trusted leaders in national and enterprise domain solutions, we provide sovereign identity registration with automated DNSSEC encryption, zero latency Anycast routing, and dedicated corporate domain portfolio management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-saffron-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{svc.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {svc.points.map((pt, idx) => (
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
        </section>

        {/* CTA */}
        <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Deploy Your Infrastructure on Rapido Sovereign Hosting
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consult with our cloud engineering team for enterprise VPS provisioning, dedicated bare metal clusters, or corporate domain registration.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/architecture"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Architecture Blueprint
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-telecom-950 bg-saffron-400 hover:bg-saffron-300 shadow-lg shadow-saffron-500/20 transition-all flex items-center gap-2"
            >
              <span>Initiate Hosting Provisioning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
