import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Server, 
  Radio, 
  Wifi, 
  Lock, 
  GitMerge, 
  Database,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Share2,
  Globe2,
  Smartphone
} from "lucide-react";

export const metadata = {
  title: "Technology Architecture | Blueprints & Sovereign Cloud Stack",
  description: "Explore the multi-tier engineering blueprints of RAPIDO INFRATEL LLP: Optical fiber backhaul topology, Zero-Trust network security, cryptographic trust stack, AI/Mobile gateways, and Rapido Hosting.",
};

export default function ArchitecturePage() {
  const architecturalTiers = [
    {
      tier: "Tier 1: Physical Fiber & Transmission Grid",
      tagline: "Carrier-Neutral Dark Fiber & GPON Backhaul",
      desc: "Underground armored ribbon optical fiber networks engineered with micro-trenching, HDD trenchless crossings, and pre-ducted conduits for scalable multi-terabit Dense Wavelength Division Multiplexing (DWDM).",
      specs: [
        "Cable: 48F / 96F / 288F Armored Single Mode G.652.D Optical Fiber",
        "Ducting: High-Density Polyethylene (HDPE) Silicon Ducts (40/33mm)",
        "Enclosures: IP68 Hermetically Sealed Fiber Joint Closures",
        "Splice Budget: < 0.05 dB insertion loss per fusion joint"
      ],
      icon: Radio,
      color: "text-fiber-400"
    },
    {
      tier: "Tier 2: Edge Aggregation & POP Facilities",
      tagline: "Ultra-Low Latency Edge Processing",
      desc: "Strategically sited Point of Presence (POP) shelters equipped with redundant dual-rectifier DC power, environmental monitoring, and carrier-grade GPON Optical Line Terminals (OLTs).",
      specs: [
        "Splitter Ratios: 1:32 and 1:64 Class C+ GPON Optic Budgeting",
        "Power Backup: N+1 SMPS Rectifiers with Lithium Ferro Phosphate (LFP) banks",
        "Ring Topology: Dual-parented ring protection with sub-50ms ITU-T G.8032 ERPS",
        "Edge Compute: Containerized edge micro-clusters for localized civic caching"
      ],
      icon: Server,
      color: "text-saffron-400"
    },
    {
      tier: "Tier 3: Sovereign Trust & Digital Public Infrastructure",
      tagline: "Aadhaar, DigiLocker & PKI Hardware Verification",
      desc: "Hardware-isolated cryptographic trust perimeter integrating national identity and credential issuance stacks with complete audit trails.",
      specs: [
        "Authentication: AUA / KUA compliant Aadhaar OTP and biometric APIs",
        "Document Vault: DigiLocker Push/Pull integration with tamper-proof SHA-256 digests",
        "PKI Security: FIPS 140-2 Level 3 compliant Hardware Security Modules (HSMs)",
        "Zero-Trust: WireGuard / IPsec encrypted inter-facility transit tunnels"
      ],
      icon: Lock,
      color: "text-emerald-400"
    },
    {
      tier: "Tier 4: Municipal GIS & Unified Civic API Mesh",
      tagline: "Smart City ICCC & Cross-Departmental Bus",
      desc: "Cloud-native microservices bus orchestrating spatial cadastre databases, real-time IoT sensory telemetry, and single-window citizen transactions.",
      specs: [
        "Spatial Engine: OGC-compliant PostGIS spatial indexing & vector tile layers",
        "API Gateway: Open API 3.0 compliant high-throughput microservices mesh",
        "Telemetric Ingestion: MQTT / Kafka message brokers handling 100k+ events/sec",
        "Localization: Bhashini Indian language NLP translation microservices"
      ],
      icon: Layers,
      color: "text-blue-400"
    },
    {
      tier: "Tier 5: Enterprise AI, Mobile Gateways & Rapido Hosting",
      tagline: "“We are . in domain name” · Sovereign Cloud Stack",
      desc: "High-availability enterprise datacenter infrastructure powering AI inference models, mobile app backend services (iOS & Android), and premier domain resolution.",
      specs: [
        "Hosting: Sovereign cloud servers, managed VPS & Anycast DNS resolution",
        "AI Architecture: Containerized inference pipelines & Bhashini voice synthesis",
        "Mobile Mesh: Low-latency GraphQL and WebSocket citizen-facing gateways",
        "SLA Standard: 99.999% high-availability datacenter cluster resilience"
      ],
      icon: Globe2,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Architecting Digital Bharat · Technology Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Multi-Tier <br />
            <span className="gradient-text-fiber">Technology Architecture</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A granular blueprint of the carrier transmission, edge processing, sovereign cryptographic trust, enterprise AI/mobile gateways, and high-availability cloud hosting tiers that power RAPIDO INFRATEL LLP products.
          </p>
        </div>

        {/* HERO BANNER IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/architecture_blueprint.jpg"
            alt="National Fiber Network Topology & Operations Center Blueprint"
            className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-xl">
            <div className="font-bold text-white text-sm">National Broadband Fiber Network Topology &amp; NOC Operations</div>
            <p className="text-slate-400 text-[11px] mt-1">
              Architectural orchestration of carrier transmission backbones, edge aggregation POPs, and high-density optical routing rings.
            </p>
          </div>
        </div>

        {/* ARCHITECTURAL TIERS */}
        <div className="space-y-8">
          {architecturalTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.tier}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${tier.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${tier.color}`}>
                          Architecture Tier 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-300 font-mono">
                      {tier.tagline}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-6 bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-fiber-400" />
                      <span>Engineering Specifications &amp; Standards</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {tier.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* OPEN-ACCESS COMMUNITY WI-FI MESH ARCHITECTURE */}
        <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-saffron-500/10 text-saffron-400 border border-saffron-500/20">
              <Wifi className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Open-Access Community Wi-Fi Mesh Stack
              </h3>
              <p className="text-xs text-slate-400">
                Carrier-Neutral Edge Aggregation &amp; Open-Standard Civic Protocol Interoperability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="font-bold text-white">1. Community Access Point Mesh</div>
              <p className="text-slate-400 leading-relaxed">
                Dual-band 802.11ax (Wi-Fi 6) access points installed across public plazas, transit hubs, and civic nodes with seamless captive portal handshakes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="font-bold text-white">2. Gateway Controller &amp; Mesh Director</div>
              <p className="text-slate-400 leading-relaxed">
                Decentralized session routing, bandwidth allocation, quality-of-service (QoS) prioritization, and privacy-preserving token verification.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="font-bold text-white">3. Open Authentication &amp; Sachet Bus</div>
              <p className="text-slate-400 leading-relaxed">
                Interoperable user discovery, instant KYC authorization, and seamless micro-payments via UPI for sachet civic connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center space-y-4 pt-6">
          <h3 className="text-xl font-bold text-white">
            Need a Customized Blueprint for Your Municipal, Carrier or Cloud Network?
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Our solutions architecture team prepares detailed Route Survey Maps, Link Loss Budgets, and Bill of Quantities (BOQ).
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-saffron-500 hover:bg-saffron-400 text-white font-bold text-xs transition-colors shadow-lg shadow-saffron-500/20"
          >
            <span>Consult Solutions Architecture Committee</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
