import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Layers, 
  Wifi, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  MapPin,
  ShieldCheck,
  Activity,
  Server,
  Cpu,
  Tv,
  Globe2
} from "lucide-react";

export const metadata = {
  title: "Case Studies & Project Blueprints | RAPIDO INFRATEL LLP",
  description: "Explore landmark engineering blueprints and case studies of RAPIDO INFRATEL LLP: Chitragupt SIEM, AdNets sponsored connectivity (Lithuania TV / Google Warsaw), Jayvin RADIUS AAA, enterprise cloud platforms, and AMC Licensed Developer commercial complex BIM.",
};

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: "Project Chitragupt: Centralized SIEM & Telemetry Engine",
      tagline: "ISP Security Information, Event Management & DoT Compliance",
      location: "Multi-Region Cloud (AWS & GCP) · National Deployment",
      desc: "Architected a centralized SIEM and telemetry engine collecting, normalizing, and analyzing massive volumes of syslog events, NetFlow packets, and security logs from core routers, CGNAT gateways, DNS clusters, and perimeter firewalls in real time. Enabled regional ISPs to maintain strict statutory DoT compliance while assisting law enforcement authorities in cyber forensics.",
      stats: [
        { label: "Log Ingestion", value: "50,000+ EPS" },
        { label: "Query Latency", value: "< 250ms" },
        { label: "Data Integrity", value: "Immutable Ledger" },
        { label: "ISP Nodes", value: "100+ Gateways" }
      ],
      deliverables: [
        "Distributed log collector agents with end-to-end cryptographic hashing",
        "Automated NetFlow v9/IPFIX analysis identifying DDoS attacks and anomalous traffic",
        "Sovereign DoT compliance audit reports with instant chain-of-custody exports"
      ],
      icon: ShieldCheck,
      color: "text-blue-400"
    },
    {
      title: "Project AdNets: Sponsored Public Connectivity Platform",
      tagline: "Global Semi-Finalist · Lithuania National TV & Google Campus Warsaw",
      location: "Vilnius, Lithuania & Warsaw, Poland · Global Stage",
      desc: "Engineered an innovative sponsored public connectivity platform democratizing high-speed internet in exchange for ethical digital attention. Achieved landmark international acclaim as the first South-East Asian startup to reach the semi-finals of Lithuania's Government National Login Startup Battle 2017 (featured in a 10-minute live broadcast on Lithuanian National TV) and selected for Google Campus for Startups in Warsaw.",
      stats: [
        { label: "Recognition", value: "Lithuania TV" },
        { label: "Incubation", value: "Google Warsaw" },
        { label: "Access Points", value: "Multi-Venue Mesh" },
        { label: "Engagement Rate", value: "84% CTR" }
      ],
      deliverables: [
        "Lightweight captive portal routing software with zero latency overhead",
        "Targeted digital engagement engine respecting user privacy and anonymity",
        "High-density concurrent session management for civic spaces, transit, and retail"
      ],
      icon: Wifi,
      color: "text-saffron-400"
    },
    {
      title: "Project Jayvin: Enterprise RADIUS AAA & Edge Network Gatekeeper",
      tagline: "Carrier-Grade Network Access Control (NAC) & Perimeter Security",
      location: "High-Complexity Carrier & ISP Network Topologies",
      desc: "Engineered as 'Jaya + Vijaya + Network', Jayvin functions as the ultimate RADIUS Authentication, Authorization, and Accounting (AAA) gatekeeper. Operating at the final network perimeter, Jayvin enforces granular Network Access Control (NAC), dynamic VLAN assignment, and cryptographic credential validation across multi-vendor carrier environments.",
      stats: [
        { label: "Auth Throughput", value: "10,000+ Auth/s" },
        { label: "Response Time", value: "< 15ms" },
        { label: "Protocol Support", value: "EAP-TLS / PAP / CHAP" },
        { label: "Availability SLA", value: "99.999% Ring" }
      ],
      deliverables: [
        "Carrier-grade RADIUS AAA server with active-active clustered state replication",
        "Dynamic subscriber policy enforcement and real-time bandwidth throttling",
        "Zero-trust perimeter gatekeeping with hardware security module (HSM) key storage"
      ],
      icon: Lock,
      color: "text-emerald-400"
    },
    {
      title: "Enterprise Cloud Platforms & Sub-50ms Resilient Digital Utilities",
      tagline: "Fault-Tolerant Microservices & Anycast Sovereign Cloud",
      location: "Sabarmati Riverfront Tech Corridor, Ahmedabad",
      desc: "Engineered distributed cloud-native transactional backbones delivering sub-50ms automated failover resilience. Integrated distributed pub/sub event buses, containerized microservices, and multi-region database clusters operating with contractual 99.999% SLA availability.",
      stats: [
        { label: "Failover Speed", value: "< 50ms Ring" },
        { label: "Uptime SLA", value: "99.999%" },
        { label: "Transaction Speed", value: "Sub-Millisecond" },
        { label: "Data Residency", value: "100% Sovereign" }
      ],
      deliverables: [
        "Direct enterprise network abstractions eliminating public internet jitter",
        "Active-active multi-datacenter database clustering with zero data loss (RPO=0)",
        "Automated blue/green deployment pipelines with deterministic rollback"
      ],
      icon: Server,
      color: "text-cloud-400"
    },
    {
      title: "Commercial Complex BIM & Spatial Cadastre Engineering",
      tagline: "AMC Licensed Developers · Real Estate & Complex Construction",
      location: "Parimal Garden & C.G. Road Commercial Corridor, Ahmedabad",
      desc: "Comprehensive solutions engineering for modern commercial complexes, mixed-use buildings, and campus developments as accredited AMC Licensed Developers. Deployed 3D Building Information Modeling (BIM) LOD 500, drone photogrammetry site surveying, and subsurface MEP conduit clash detection.",
      stats: [
        { label: "License Status", value: "AMC Licensed" },
        { label: "BIM Maturity", value: "LOD 500 As-Built" },
        { label: "Survey Precision", value: "Centimeter RTK" },
        { label: "Clashes Prevented", value: "100% Pre-Build" }
      ],
      deliverables: [
        "Full 3D architectural, structural, and MEP clash-free building coordination",
        "Centimeter-accurate drone LIDAR topographical parcel cadastre",
        "Integrated IoT smart building telemetry for energy and facilities automation"
      ],
      icon: Building2,
      color: "text-amber-400"
    }
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
            <span>Architecting Digital Bharat · Landmark Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Case Studies &amp; <br />
            <span className="gradient-text-cloud">Engineering Blueprints</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Proven engineering blueprints and landmark solutions: From global startup accolades (Lithuania National TV &amp; Google Warsaw) to mission-critical SIEM platforms (Chitragupt), enterprise gatekeepers (Jayvin), resilient cloud utilities, and AMC Licensed Developer commercial complex developments.
          </p>
        </div>

        {/* FEATURE IMAGE BANNER */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/banner_projects.jpg"
            alt="Rapido landmark software blueprints and solutions architecture showcase"
            className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-xl">
            <div className="font-bold text-white text-sm">Landmark Innovations &amp; Proven Architectural Excellence</div>
            <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">
              Proprietary platforms engineered under NDA, recognized internationally, and deployed across mission-critical enterprise environments.
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

                  <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
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
                        Key Architectural Deliverables:
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

        {/* PROJECT DELIVERY SHOWCASE */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cloud-400">PMP-Grade Project Governance</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Enterprise Project Execution &amp; SLA Assurance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From initial architectural blueprints to live production handovers, our solutions architects manage every milestone with deterministic rigor. We enforce continuous verification, statutory compliance, and transparent progress telemetry to ensure on-time, zero-defect delivery.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-400" />
                <span>Deterministic milestone governance compliant with PMP methodologies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-400" />
                <span>Real-time executive dashboards reporting key performance indicators</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-400" />
                <span>Comprehensive acceptance testing and non-repudiation audit trails</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl relative group">
              <img
                src="/images/content_projects.jpg"
                alt="Executive solutions architecture committee reviewing project deliverables in Ahmedabad"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-rapido-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have an Enterprise Solution or Development in Scope?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Submit your technical requirements or commercial complex parameters to our solutions architecture committee.
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
