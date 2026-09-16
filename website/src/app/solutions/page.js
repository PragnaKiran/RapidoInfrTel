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
  Terminal
} from "lucide-react";

export const metadata = {
  title: "Solutions & Pillars | Digital India Vision Framework",
  description: "Comprehensive technical solutions across the Three Vision Pillars of Digital India: Optical Fiber & FTTH Engineering, Digital Identity Trust Stack, Paperless e-Gov Portals, Municipal GIS, and PM-WANI Public Wi-Fi.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            Engineering Solutions Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            The Three Vision Pillars of <br />
            <span className="gradient-text-fiber">Digital India</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our technology engineering portfolio translates national digital missions into tangible, scalable, and resilient civic realities across telecommunications, e-governance, and public empowerment.
          </p>
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
            A well-connected nation is a progressive nation. We design and deploy high-speed, high-availability physical and cyber infrastructure that serves as the foundation for modern commerce, administration, and civic life.
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
                Turnkey design of next-generation Optical Fiber Networks (OFC) utilizing ribbon cables, micro-duct systems, and Horizontal Directional Drilling (HDD) trenchless technology. We engineer high-density FTTH GPON rollouts, telecom tower siting, and urban small-cell densification for 5G readiness.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>48F, 96F, and 288F Armored Ribbon OFC routes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Carrier-neutral duct sharing &amp; RoW compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Optical Line Terminal (OLT) and Splitter network budgeting</span>
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
                Empowering telecom service providers (TSPs), internet service providers (ISPs), and municipal corporations to deliver high-bandwidth digital pipelines to urban centers, industrial clusters, and rural panchayats.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Gigabit symmetrical bandwidth backhauls</span>
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
                Architectural integration of lifelong, authenticable digital identity stacks. We implement sovereign trust frameworks connecting Aadhaar authentication (AUA/KUA), DigiLocker credential vaults, e-Sign, and PKI-based cryptographic security.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Aadhaar OTP &amp; Biometric authentication stacks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>DigiLocker API push &amp; pull automated document pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Hardware Security Module (HSM) PKI key signing</span>
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
                Zero-Trust Network Architectures (ZTNA) protecting critical digital information infrastructure. We design secure edge compute POPs, sovereign cloud network enclaves, DDoS mitigation rings, and granular role-based identity perimeters.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Zero-Trust access control &amp; micro-segmentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Edge compute facilities with low-latency encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>CERT-In guidelines and ISO/IEC 27001 compliance</span>
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
            Transitioning government operations from traditional bureaucratic silos to transparent, real-time, demand-driven digital platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2.1 Seamless Service Integration */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Seamless Cross-Departmental Integration</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-time API gateway integration across municipal corporations, state departments, and central government portals. Creating a unified single-window citizen experience that eliminates duplicated data entry and administrative bottlenecks.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Open API standard compliant middleware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Single-window clearance for trade, construction &amp; utilities</span>
                </li>
              </ul>
            </div>

            {/* 2.2 Paperless & Faceless Portals */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Paperless &amp; Faceless Citizen Portals</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                End-to-end cloud-native enterprise web applications and mobile platforms enabling paperless, cashless, and fully faceless public service delivery with immutable audit trails.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Automated verification of certificates via DigiLocker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Integrated Bharat Bill Payment System (BBPS) &amp; UPI</span>
                </li>
              </ul>
            </div>

            {/* 2.3 Unified GIS & Smart City */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Unified GIS &amp; Smart City Infrastructure</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Spatial data engines mapping municipal utilities (water, sewage, electricity, street lighting, OFC routes). Direct integration with Integrated Command and Control Centers (ICCC) for citywide situational awareness.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Sub-meter GIS cadastral mapping &amp; property geo-tagging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Real-time telemetry ingestion from IoT sensors</span>
                </li>
              </ul>
            </div>

            {/* 2.4 Data Analytics for Public Welfare */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Data Analytics for Public Welfare</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scalable data pipelines aggregating civic metrics, automated grievance redressal routing, and predictive resource allocation for municipal health, sanitation, and transit systems.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Automated SLA tracking on citizen grievance redressal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Executive dashboards for civic leadership &amp; collectors</span>
                </li>
              </ul>
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

          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Technology is only as powerful as its inclusivity. We build architectures that ensure no citizen is left behind due to language barriers, geographic remoteness, or economic constraints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3.1 Universal Digital Access (Bhashini) */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 border border-slate-800 w-fit">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Universal Multilingual Access (Bhashini)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full compatibility with Digital India Bhashini NLP services, enabling voice-driven and regional language text interfaces across 22 scheduled Indian languages for effortless citizen adoption.
              </p>
            </div>

            {/* 3.2 PM-WANI Public Wi-Fi */}
            <div id="pm-wani" className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800 w-fit">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">PM-WANI Public Wi-Fi Grids</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Public Data Office Aggregator (PDOA) compliant network engineering, enabling affordable high-speed broadband in rural markets, transport terminals, and village common service centers.
              </p>
            </div>

            {/* 3.3 Participatory Digital Platforms */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Participatory Digital Platforms</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collaborative digital governance interfaces, localized community polling, participatory budgeting, and transparent town hall feedback ecosystems.
              </p>
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
