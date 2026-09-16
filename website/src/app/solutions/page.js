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
  Sparkles,
  Zap,
  MapPin
} from "lucide-react";

export const metadata = {
  title: "Solutions & Architecture | IT & Mobile Products · Rapido Hosting",
  description: "Explore the solutions architecture portfolio of RAPIDO INFRATEL LLP: Enterprise cloud-native platforms, AI & Mobile product engineering on carrier transmission infrastructure, municipal spatial GIS, Universal Human Inclusion civic platforms, and Rapido Hosting ('We are . in domain name').",
};

export default function SolutionsPage() {
  const dedicatedSolutions = [
    {
      title: "Enterprise Cloud Platforms",
      desc: "Cloud-native microservices, fault-tolerant transaction pipelines, and sub-50ms failover orchestration running over carrier transmission backbones.",
      href: "/solutions/enterprise-platforms",
      icon: Server,
      color: "text-fiber-400 border-fiber-500/30",
      badge: "Core Platform"
    },
    {
      title: "Mobile Applications & Mobility",
      desc: "Native iOS and Android citizen and merchant applications with offline-first synchronization, biometric authentication, and field telemetry.",
      href: "/solutions/mobile-products",
      icon: Smartphone,
      color: "text-emerald-400 border-emerald-500/30",
      badge: "Native Mobility"
    },
    {
      title: "Sovereign AI & Intelligence",
      desc: "Bhashini 22-language speech/text models, predictive civic analytics, and machine learning audited for 0% demographic and gender bias.",
      href: "/solutions/ai-intelligence",
      icon: Cpu,
      color: "text-fiber-400 border-fiber-500/30",
      badge: "Sovereign AI"
    },
    {
      title: "Municipal Spatial GIS",
      desc: "Centimeter-accurate geospatial asset intelligence, digital twin modeling, and real-time IoT utility sensor telemetry pipelines.",
      href: "/solutions/spatial-gis",
      icon: MapPin,
      color: "text-saffron-400 border-saffron-500/30",
      badge: "Digital Twin"
    },
    {
      title: "Universal Human Inclusion",
      desc: "Zero-barrier civic portals, decentralized community Wi-Fi mesh software, and paperless sovereign credential engines built for equity.",
      href: "/solutions/civic-inclusion",
      icon: Users,
      color: "text-amber-400 border-amber-500/30",
      badge: "Civic Equity"
    },
    {
      title: "Rapido Hosting & Domains",
      desc: "“We are . in domain name” · 15+ years brand heritage, accredited domain registrar, sovereign managed VPS, and 99.999% SLA Anycast cloud.",
      href: "/solutions/rapido-hosting",
      icon: Globe2,
      color: "text-saffron-400 border-saffron-500/30",
      badge: "“We are . in domain name”"
    }
  ];

  return (
    <div className="bg-telecom-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fiber-400 bg-fiber-500/10 border border-fiber-500/20 px-3 py-1 rounded-full">
            <span>Architecting Digital Bharat · Solutions Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Proprietary <span className="gradient-text-fiber">IT &amp; Mobile Products</span> on Carrier Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            As solution architects, we deliver resilient architectural designs and PMP-grade project management of proprietary IT &amp; mobile products operating across the transmission pipelines of carrier networks, sovereign cloud infrastructure, and open civic grids—anchored in universal human inclusion and equity.
          </p>
        </div>

        {/* FEATURE BANNER IMAGE WITH RE-ARTICULATED CAPTION (POINT 5 COMPLIANT) */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
          <img
            src="/images/solutions_smart_city.jpg"
            alt="Carrier Transmission Infrastructure as Delivery Backbone for Enterprise IT & Mobile Products"
            className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 p-4 md:p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 max-w-2xl">
            <div className="font-bold text-white text-sm">
              Carrier Grids as the Delivery Backbone for Enterprise IT &amp; Mobile Products
            </div>
            <p className="text-slate-300 text-[11px] mt-1.5 leading-relaxed">
              We do not build raw physical connectivity or lay optical cables; we harness established high-capacity carrier transmission infrastructure to deliver resilient, cloud-native IT platforms, mobile applications, and civic empowerment products.
            </p>
          </div>
        </div>

        {/* DEDICATED SOLUTION DOMAINS GRID */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">Dedicated Practice Areas</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Explore Our Six Dedicated Solution Architectures
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Select an architectural practice to review in-depth engineering specifications, telemetry models, and deployment blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dedicatedSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-4 group transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl bg-slate-900 border ${sol.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {sol.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-fiber-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-fiber-400 hover:text-fiber-300 group/link"
                    >
                      <span>Explore Dedicated Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PILLAR 1: CLOUD PLATFORMS & DIGITAL UTILITIES */}
        <section id="pillar-1" className="scroll-mt-24 space-y-8 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-fiber-500/10 border border-fiber-500/30 flex items-center justify-center text-fiber-400">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-fiber-400">Pillar 01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Enterprise Cloud Platforms &amp; Digital Utilities
                </h2>
              </div>
            </div>
            <Link
              href="/solutions/enterprise-platforms"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-fiber-500/10 hover:bg-fiber-500/20 text-fiber-300 border border-fiber-500/30 text-xs font-semibold transition-colors"
            >
              <span>View Dedicated Platform Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Delivering resilient cloud-native microservices, fault-tolerant transaction pipelines, and digital utilities running across carrier telecommunication infrastructure with sub-50ms failover resilience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Cloud-Native Microservices &amp; Transaction Pipelines</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architecting high-throughput transaction pipelines, distributed pub/sub event buses, and containerized microservice clusters that interface directly with national carrier transmission nodes.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Sub-millisecond API execution with automated horizontal scaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Direct carrier interconnect abstractions eliminating internet jitter</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Multi-datacenter active-active database clustering</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Sub-50ms Ring Failover &amp; Service Resilience</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Applying carrier-grade ring resilience principles to digital utility backbones, ensuring that network packet routing and service state instantaneously recover during fiber or node disruptions.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Sub-50ms automated multi-region failover orchestration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Zero-downtime blue/green deployment pipelines with live rollback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fiber-400" />
                  <span>Contractual 99.999% cloud availability SLAs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PILLAR 2: SOVEREIGN TRUST & PAPERLESS PORTALS */}
        <section id="pillar-2" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Pillar 02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Sovereign Trust &amp; Paperless Portals
                </h2>
              </div>
            </div>
            <Link
              href="/solutions/spatial-gis"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-saffron-500/10 hover:bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 text-xs font-semibold transition-colors"
            >
              <span>View Spatial GIS &amp; Sensors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Paperless &amp; Cryptographic Civic Portals</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architectural integration of sovereign identity stacks: Aadhaar biometric/OTP verification, automated DigiLocker repository integration, and FIPS 140-2 Level 3 HSM digital signatures.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Municipal Spatial GIS &amp; Telemetry Sensors</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Municipal asset mapping, underground utility spatial tracking, and Integrated Command and Control Center (ICCC) integrations with high-frequency IoT telemetry sensors.
              </p>
            </div>
          </div>
        </section>

        {/* PILLAR 3: UNIVERSAL HUMAN INCLUSION & EQUITY */}
        <section id="pillar-3" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Pillar 03</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Universal Human Inclusion &amp; Equity
                </h2>
              </div>
            </div>
            <Link
              href="/solutions/civic-inclusion"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors"
            >
              <span>View Civic Inclusion Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 border border-slate-800 w-fit">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Bhashini 22-Language NLP</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Universal access across 22 scheduled Indian languages with voice prompts and natural dialect recognition, dismantling literacy barriers.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-saffron-400 border border-slate-800 w-fit">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Open Community Wi-Fi Mesh</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Decentralized open-access community Wi-Fi mesh routing software bringing high-speed connectivity to underserved local merchants and students.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-2 rounded-lg bg-slate-900 text-fiber-400 border border-slate-800 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Dismantling Bias &amp; Wage Gaps</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineering software systems that actively eliminate hidden prejudices in everyday interactions, close the wage gap, and elevate diverse leadership.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: AI & MOBILE APPLICATIONS */}
        <section id="ai-mobile" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-3">
              <Link
                href="/solutions/mobile-products"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <span>Mobile Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions/ai-intelligence"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-fiber-500/10 hover:bg-fiber-500/20 text-fiber-300 border border-fiber-500/30 text-xs font-semibold transition-colors"
              >
                <span>Sovereign AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-fiber-400" />
                <h3 className="text-base font-bold text-white">Native Mobile Applications (iOS &amp; Android)</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cloud-native mobile apps with offline-first synchronization, sovereign biometric authentication, and field utility inspection engines.
              </p>
              <Link href="/solutions/mobile-products" className="inline-flex items-center gap-1 text-xs font-bold text-fiber-400 hover:underline pt-2">
                <span>Explore Native Mobile Practice</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Enterprise AI &amp; Bhashini NLP</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated workflow classification, time-series utility prediction, and 22-language speech intelligence with zero bias.
              </p>
              <Link href="/solutions/ai-intelligence" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:underline pt-2">
                <span>Explore Sovereign AI Practice</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: RAPIDO HOSTING */}
        <section id="hosting" className="scroll-mt-24 space-y-8 pt-12 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Rapido Hosting</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Sovereign Cloud Hosting &amp; Domain Authority
                </h2>
              </div>
            </div>
            <Link
              href="/solutions/rapido-hosting"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-saffron-500/10 hover:bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 text-xs font-semibold transition-colors"
            >
              <span>View Rapido Hosting Dedicated Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-saffron-500/30 relative space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-md">
              “We are . in domain name”
            </div>
            <h3 className="text-xl font-bold text-white">
              Leading Hosting Service Provider &amp; Domain Authority Since 2009
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Backed by 15+ years of registered brand heritage, we deliver high-availability sovereign cloud hosting, managed VPS, edge compute enclaves, and premier domain registration with 99.999% availability and national data residency compliance.
            </p>
            <div className="pt-2">
              <Link
                href="/solutions/rapido-hosting"
                className="inline-flex items-center gap-2 text-xs font-bold text-saffron-400 hover:underline"
              >
                <span>Explore Rapido Hosting Specs &amp; Domain Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM ACTION */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Review Detailed Technology Architecture</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Inspect our multi-tier network and cloud engineering blueprints.
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
