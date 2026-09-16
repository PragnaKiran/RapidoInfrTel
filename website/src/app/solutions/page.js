import React from "react";
import Link from "next/link";
import { 
  Radio, 
  Server, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Wifi, 
  Lock, 
  Layers, 
  Cpu, 
  FileText, 
  Database,
  Globe2,
  Share2,
  Activity,
  Smartphone,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Solutions & Architecture | IT & Mobile Products · Rapido Hosting",
  description: "Explore the comprehensive solutions architecture portfolio of RAPIDO INFRATEL LLP: Optical Fiber & FTTH design, AI & Mobile product engineering on telecom infrastructure, Open Community Wi-Fi Mesh, and Rapido Hosting ('We are . in domain name').",
};

export default function SolutionsPage() {
  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Architecting Digital Bharat · Solutions Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive <br />
            <span className="gradient-text-fiber">Solutions Architecture</span> &amp; Digital Utilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            As solution architects, we deliver resilient architectural designs and PMP-grade project management of proprietary IT &amp; mobile products operating across the transmission pipelines of telecommunications carriers, sovereign cloud infrastructure, and open civic grids—founded upon universal human inclusion and equity.
          </p>
        </div>

        {/* FEATURE BANNER IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/solutions_smart_city.jpg"
            alt="Smart City Telecommunications & Digital Infrastructure"
            className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-xl">
            <div className="font-bold text-white text-sm">Metropolitan Connectivity &amp; Urban Digital Grids</div>
            <p className="text-slate-400 text-[11px] mt-1">
              End-to-end solutions architecture: Underground utility duct planning, carrier-neutral dark fiber backbones, and smart city command integrations.
            </p>
          </div>
        </div>

        {/* PILLAR 1: DIGITAL INFRASTRUCTURE AS A UTILITY */}
        <section id="pillar-1" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-fiber-500/10 border border-fiber-500/30 flex items-center justify-center text-fiber-400">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-fiber-400">Pillar 01</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Digital Infrastructure as a Utility
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Delivering resilient solutions architecture designs and PMP-grade project management of carrier-neutral transmission pipelines and physical telecom facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1.1 Telecom & Fiber Engineering */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Telecom &amp; Fiber Engineering (OFC/FTTH)</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Turnkey architectural design of Optical Fiber Networks (OFC) utilizing 48F, 96F, and 288F armored ribbon cables, micro-duct networks, and Horizontal Directional Drilling (HDD) trenchless methodology. We provide PMP-grade project governance for high-density FTTH GPON rollouts, telecom tower infrastructure, and urban small-cell planning for 5G readiness.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Armored ribbon OFC route planning &amp; micro-duct layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Right-of-Way (RoW) planning and carrier-neutral shared ducting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Optical Line Terminal (OLT) and Class C+ optical power budgeting</span>
                </li>
              </ul>
            </div>

            {/* 1.2 High-Speed Connectivity Enablement */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">High-Speed Connectivity Enablement</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering telecom operators, internet service providers (ISPs), and municipal corporations to deliver high-speed, ultra-reliable digital pipelines across urban clusters and rural communities with resilient ring topologies.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Gigabit symmetrical bandwidth backhaul architectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Dual-homed ring protection with sub-50ms failover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Carrier SLA modeling (99.9% to 99.999% availability)</span>
                </li>
              </ul>
            </div>

            {/* 1.3 Digital Identity & Trust Backbone */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Digital Identity &amp; Trust Backbone</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architectural integration of authenticable, lifelong digital identity frameworks. Connecting sovereign identity stacks (Aadhaar authentication stack, DigiLocker repository, e-Sign, and PKI-based credential verification).
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Aadhaar OTP &amp; Biometric authentication stacks (AUA/KUA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>DigiLocker automated certificate push &amp; pull workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>FIPS 140-2 Level 3 Hardware Security Module (HSM) PKI signing</span>
                </li>
              </ul>
            </div>

            {/* 1.4 Safe & Secure Cyber Space */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Safe &amp; Secure Cyber Space</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero-Trust Network Architectures (ZTNA) protecting critical infrastructure. We design secure edge compute POPs, sovereign cloud network enclaves, DDoS mitigation rings, and granular role-based identity perimeters.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Zero-Trust access control &amp; inter-facility encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Edge compute facilities with low-latency cryptographic isolation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>CERT-In guidelines and ISO/IEC 27001 compliance standards</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PILLAR 2: GOVERNANCE & SERVICES ON DEMAND */}
        <section id="pillar-2" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Pillar 02</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Governance &amp; Services on Demand
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Transitioning administration to transparent, real-time digital platforms that eliminate paper-based latency and physical friction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Seamless Cross-Departmental Integration</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-time API gateway integration across civic, state, and central platforms to provide a single-window citizen experience without bureaucratic bottlenecks.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Paperless &amp; Faceless Portals</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                End-to-end cloud-native enterprise web applications and mobile platforms enabling paperless, cashless, and transparent public service delivery.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Unified GIS &amp; Smart City Infrastructure</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                GIS-driven municipal asset mapping, underground utility tracking, automated billings, and Integrated Command and Control Center (ICCC) integrations.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Data Analytics for Public Welfare</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scalable data pipeline design for governance metrics, automated grievance redressal, and real-time civic analytics.
              </p>
            </div>
          </div>
        </section>

        {/* PILLAR 3: DIGITAL EMPOWERMENT OF CITIZENS */}
        <section id="pillar-3" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Pillar 03</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Digital Empowerment of Citizens
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 border border-slate-800 w-fit">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Universal Multilingual Access (Bhashini)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Universal access to digital platforms with multi-lingual Indian language interfaces, voice prompts, and Bhashini-ready localization across 22 scheduled languages.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800 w-fit">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Open Community Wi-Fi Mesh &amp; Civic Grids</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Decentralized, open-access public Wi-Fi mesh architectures engineered to deliver equitable high-speed digital connectivity to underserved clusters, civic hubs, and rural communities.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Participatory Digital Platforms</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collaborative digital governance tools, feedback systems, and community empowerment portals enabling transparent citizen participation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: AI & ENTERPRISE MOBILE APPLICATIONS */}
        <section id="ai-mobile" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-fiber-500/10 border border-fiber-500/30 flex items-center justify-center text-fiber-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-fiber-400">Intelligent Mobility</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI &amp; Mobile Applications Development
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                We design and engineer enterprise-grade artificial intelligence workflows and native mobile applications (iOS &amp; Android). From field-force utility tracking to citizen-facing portals, our mobile applications bridge real-time data from underground optical conduits directly to fingertips.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-fiber-400" />
                    <span>Cloud-Native Mobile Apps (iOS &amp; Android)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    High-performance cross-platform and native architectures with offline data caching, biometric authentication, and push notifications.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>AI &amp; Predictive Civic Intelligence</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Automated grievance triage, spatial utility bottleneck forecasting, and NLP models integrated with Bhashini for instant localized speech processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Mobile AI Gateway · Active</span>
                  </div>
                  <span className="text-[10px] font-mono text-fiber-400 bg-fiber-500/10 px-2 py-0.5 rounded border border-fiber-500/20">
                    Bhashini 22L Mesh
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-telecom-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-fiber-400" />
                      <div>
                        <div className="font-semibold text-white">Native Mobile App (iOS / Android)</div>
                        <div className="text-[10px] text-slate-400">Offline Biometric Cache &amp; Encrypted Sync</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">0.4ms</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs">↓</div>

                  <div className="p-3 rounded-xl bg-telecom-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-saffron-400" />
                      <div>
                        <div className="font-semibold text-white">Sovereign AI Inference Node</div>
                        <div className="text-[10px] text-slate-400">Speech-to-Text &amp; Grievance Triage</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">18ms</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs">↓</div>

                  <div className="p-3 rounded-xl bg-telecom-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Radio className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-white">Carrier Fiber Transmission Bus</div>
                        <div className="text-[10px] text-slate-400">Low-Latency Ring Backhaul to Cloud</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">99.99%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-fiber-500/5 border border-fiber-500/20 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Concurrent Edge Sessions:</span>
                  <span className="font-mono font-bold text-fiber-400">125,000+ Active</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: RAPIDO HOSTING & DOMAIN SERVICES */}
        <section id="hosting" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Rapido Hosting</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Sovereign Cloud Hosting &amp; Domain Registration
              </h2>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-md">
                  “We are . in domain name”
                </div>
                <h3 className="text-xl font-bold text-white">
                  High-Availability Sovereign Datacenter Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Operating under the well-established <strong>Rapido Hosting</strong> brand, we are one of the leading hosting service and domain name providers in India. We supply enterprise managed VPS, dedicated cloud servers, high-availability DNS clusters, and domain registration with strict data residency compliance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                    <span>Premier .IN &amp; International Domain Registrar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                    <span>Managed VPS &amp; Bare-Metal Servers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                    <span>Anycast Global DNS Routing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                    <span>99.999% SLA Uptime Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-xl bg-slate-900/90 border border-saffron-500/20 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Rapido Cloud Cluster</span>
                    </div>
                    <span className="text-[10px] font-mono text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                      Tier-III Sovereign
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-telecom-950/80 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider">Anycast DNS Nodes</div>
                      <div className="text-base font-bold text-white font-mono mt-1">12 Clusters</div>
                      <div className="text-emerald-400 text-[10px] mt-0.5">Latency &lt; 0.8ms</div>
                    </div>
                    <div className="p-3 rounded-lg bg-telecom-950/80 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider">Uptime SLA</div>
                      <div className="text-base font-bold text-white font-mono mt-1">99.999%</div>
                      <div className="text-emerald-400 text-[10px] mt-0.5">Zero Failover Loss</div>
                    </div>
                    <div className="p-3 rounded-lg bg-telecom-950/80 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider">.IN Registry TLD</div>
                      <div className="text-base font-bold text-white font-mono mt-1">Accredited</div>
                      <div className="text-fiber-400 text-[10px] mt-0.5">Instant DNSSEC</div>
                    </div>
                    <div className="p-3 rounded-lg bg-telecom-950/80 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase tracking-wider">Data Residency</div>
                      <div className="text-base font-bold text-white font-mono mt-1">100% India</div>
                      <div className="text-saffron-400 text-[10px] mt-0.5">Sovereign Cloud</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-saffron-500/5 border border-saffron-500/20 text-[11px] text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">DNS Query Throughput:</span>
                    <span className="font-mono font-bold text-saffron-400">4.2B Requests / Mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM ACTION */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Review Detailed Technology Architecture</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Inspect our multi-tier telecom and cloud network engineering blueprints.
            </p>
          </div>
          <Link
            href="/architecture"
            className="px-5 py-2.5 rounded-lg bg-fiber-500 hover:bg-fiber-400 text-telecom-950 font-bold text-xs transition-colors flex items-center gap-2"
          >
            <span>View Architecture Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
