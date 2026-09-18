import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Compass, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  ArrowRight,
  Radio, 
  FileCheck, 
  Scale,
  Sparkles,
  Clock,
  Layers,
  Cpu,
  Users,
  Globe,
  Lock,
  Wifi,
  Server,
  Tv,
  Briefcase
} from "lucide-react";

export const metadata = {
  title: "About Us | Brand Heritage Since 2009 & Solutions Architecture",
  description: "Learn about RAPIDO INFRATEL LLP. Originating on Sep 2, 2009 within the Pragna Kiran Group, our journey spans Sudarshan Chakra inspired engineering, 2013 DoT telecom IT ventures, landmark NDA innovations (Chitragupt SIEM, AdNets, Jayvin), and AMC Licensed Developer operations.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2009",
      title: "Inception & Sudarshan Chakra Inspiration",
      desc: "Incorporated on September 2, 2009 as part of the Pragna Kiran Group of Companies to unify hosting and domain services under the Rapido brand. Name inspired by Lord Krishna's Sudarshan Chakra (fashioned by Lord Shiva) — rapid speed and 100% uptime: Rapid + Do = Rapido.",
      badge: "Brand Origin"
    },
    {
      year: "2013",
      title: "DoT Telecom Ventures & Vedant TechServe",
      desc: "Pragna Kiran Group ventured into Telecom under Unified Licenses from the Department of Telecommunications (DoT), Government of India. Group consolidated IT services of Vedant Technical and Saathiv Creations into Vedant TechServe, solving telecom-grade IT bottlenecks.",
      badge: "Ecosystem Expansion"
    },
    {
      year: "2017",
      title: "Rapido InfrTel Pvt Ltd & Landmark NDA Projects",
      desc: "Incorporated as RAPIDO INFRATEL PRIVATE LIMITED (CIN: U64200GJ2017PTC096551). Engineered mission-critical systems including Chitragupt SIEM, AdNets (Lithuania TV / Google Warsaw), and Jayvin RADIUS AAA gatekeeper.",
      badge: "Corporate Inception"
    },
    {
      year: "2021",
      title: "LLP Restructuring & Realty Diversification",
      desc: "Transitioned to LLP structure for streamlined compliance and agile operations. Diversified into redevelopment as AMC Licensed Developers, alongside establishing Rapido Realty LLP.",
      badge: "Structural Evolution"
    },
    {
      year: "Present",
      title: "RAPIDO INFRATEL LLP",
      desc: "Operating as premier Solutions Architects, delivering enterprise cloud platforms, spatial GIS, AI intelligence, sovereign hosting, and PMP-grade governance under the Rapido heritage.",
      badge: "Active Practice"
    }
  ];

  const landmarkProjects = [
    {
      title: "Project Chitragupt",
      subtitle: "Centralized SIEM & Telemetry for Internet Service Providers",
      desc: "A centralized Security Information and Event Management (SIEM) and ISP telemetry tool collecting, normalizing, and analyzing massive volumes of log data, netflow telemetry, and security events from core routers, switches, CGNAT gateways, DNS servers, and perimeter firewalls in real time on AWS and GCP. Enabled rural and regional ISPs to maintain full DoT compliance and assisted law enforcement in tracking cybercrime.",
      inspiration: "Inspired by Chitragupta, the cosmic scribe assigned to deity Yama, who maintains the infallible ledger (Agrasanadani) recording every single action with absolute integrity.",
      icon: ShieldCheck,
      tag: "SIEM & Compliance",
      gradient: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400"
    },
    {
      title: "Project AdNets",
      subtitle: "Sponsored Public Wi-Fi & Global Startup Recognition",
      desc: "A pioneering business model allowing venues, municipalities, and businesses to provide high-speed internet access free of charge in exchange for user attention through sponsored digital engagements. Achieved international acclaim as a semi-finalist in Lithuania's Government National Login Startup Battle in 2017 (the first South-East Asian startup to reach the semi-finals, featured in a 10-minute live broadcast on Lithuanian National TV) and selected for Google Campus for Startups in Warsaw.",
      inspiration: "Engineered to dismantle digital divides and democratize high-speed internet access across communities through ethical advertising networks.",
      icon: Wifi,
      tag: "Global Recognition · Lithuania TV & Google Warsaw",
      gradient: "from-saffron-500/20 to-amber-500/10 border-saffron-500/30 text-saffron-400"
    },
    {
      title: "Project Jayvin",
      subtitle: "Enterprise RADIUS AAA & Edge Network Gatekeeper",
      desc: "Operating as 'Jaya + Vijaya + Network', Jayvin was engineered as the definitive RADIUS AAA server tailored to high-complexity carrier and ISP network topologies. Operating at the final perimeter, it acted as the literal definition of Network Access Control (NAC) and edge firewall gatekeeping, strictly verifying identities and cryptographic permissions.",
      inspiration: "Named after Jaya and Vijaya, the legendary cosmic gatekeepers of Vaikuntha, who maintain absolute perimeter security before allowing access to core sacred domains.",
      icon: Lock,
      tag: "Network Access Control (NAC)",
      gradient: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    }
  ];

  const values = [
    {
      title: "Universal Human Equity & Civic Dignity",
      desc: "Rooted in the original founders' rules: actively valuing every individual regardless of race, color, or gender; dismantling hidden prejudices, closing wage gaps, and championing female technology leadership.",
      icon: Users,
    },
    {
      title: "Solutions Architecture & Product Rigor",
      desc: "Architecting enterprise-grade digital platform topology, zero-trust cybersecurity perimeters, and IT & mobile products engineered for multi-decade durability.",
      icon: Cpu,
    },
    {
      title: "Architecting Digital Bharat",
      desc: "Inspired by the transformative vision of universal digital connectivity and sovereign digital infrastructure, delivered through independent private product engineering.",
      icon: Target,
    },
    {
      title: "Intellectual Property & Brand Trust",
      desc: "Over 15+ years of verified brand trust, registered trademark (®) protection, and statutory compliance with the Ministry of Corporate Affairs (RoC Ahmedabad).",
      icon: Award,
    },
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO BANNER & TITLE */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
              Corporate Profile &amp; Brand Heritage
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              A Legacy of Trust Since 2009: <br />
              <span className="gradient-text-cloud">IT &amp; Mobile Products</span> on Enterprise Digital Networks
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>RAPIDO INFRATEL LLP</strong> is an Ahmedabad-headquartered Technology Solutions Designing Firm. Originating on September 2, 2009, we architect proprietary IT &amp; Mobile Products, sovereign cloud platforms, and spatial GIS utilities with uncompromised engineering precision.
            </p>
          </div>

          {/* BANNER IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/about_banner.jpg"
              alt="Rapido Solutions Architecture Studio in Ahmedabad"
              className="w-full h-[280px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-bold text-white text-sm">Rapido Solutions Architecture Studio · Ahmedabad</div>
                <div className="text-[11px] text-slate-400">Collaborative engineering hub overlooking Sabarmati Riverfront, C.G. Road Technology Corridor</div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-saffron-400 bg-saffron-500/10 px-3 py-1 rounded border border-saffron-500/20 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" /> Established September 2, 2009
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: THE SUDARSHAN CHAKRA INSPIRATION & ETYMOLOGY */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Brand Origin &amp; Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Genesis of Rapido: Rapid Speed, 100% Uptime
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              On <strong>September 2, 2009</strong>, Rapido was incorporated as part of the <strong>Pragna Kiran Group of Companies</strong> to consolidate Pragna Kiran&apos;s hosting and domain infrastructure business under a unified, forward-looking brand.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our founders drew deep philosophical inspiration from <strong>Lord Krishna&apos;s Sudarshan Chakra</strong>, the celestial disc crafted by <strong>Lord Shiva</strong>. The hallmark of the Sudarshan Chakra is its unmatched velocity and its absolute, infallible execution with zero deviation—what modern engineers define as <strong>100% uptime</strong>. Combining rapid action with decisive execution gave birth to our identity:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-saffron-500/30 flex items-center justify-center gap-3 text-sm sm:text-base font-bold text-white font-mono">
              <span className="text-cloud-400">Rapid</span>
              <span className="text-slate-500">+</span>
              <span className="text-saffron-400">Do</span>
              <span className="text-slate-500">=</span>
              <span className="text-emerald-400 text-lg sm:text-xl">RAPIDO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Backed by a registered trademark (®), the Rapido brand represents unwavering intellectual property integrity, technological resilience, and steadfast commitment to client success.
            </p>
          </div>
        </div>

        {/* SECTION 2: LANDMARK INNOVATIONS (DELIVERED UNDER NDA) */}
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-cloud-400">Engineering Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Pioneering Systems Delivered Under NDA
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mt-1">
              Engineered with pride in India at the heart of Gujarat in Ahmedabad, these landmark platforms powered domestic and global telecommunications, ISP governance, and public connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {landmarkProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`p-6 rounded-2xl bg-slate-900/80 border ${p.gradient} space-y-4 flex flex-col justify-between`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800">
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <div className="text-xs font-semibold text-slate-300">{p.subtitle}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 italic">
                    {p.inspiration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: BOARDROOM SHOWCASE & ECOSYSTEM EVOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Organizational Maturity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Telecom IT Ventures to AMC Licensed Developers
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              In <strong>2013</strong>, the Pragna Kiran Group ventured into Telecom under Unified Licenses granted by the Department of Telecommunications (DoT), Government of India. The group unified its IT service competencies—including Vedant Technical and Saathiv Creations—under <strong>Vedant TechServe</strong>.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Navigating complex telecom infrastructure environments highlighted the need for specialized IT solutions. To solve these mission-critical challenges, the group established <strong>Rapido InfrTel Pvt Ltd</strong>, capitalizing on deep data center operational experience and direct telco interconnects to support bulk telecommunications services.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              In <strong>2021</strong>, to embrace redevelopment and realty opportunities, corporate structures were converted to Limited Liability Partnerships (LLP) for optimized compliance and operational ease. Today, the group is not only an established developer of IT, mobile products, and cloud infrastructure, but also certified as <strong>AMC Licensed Developers</strong>, with realty activities channeled through <strong>Rapido Realty LLP</strong>.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
              <img
                src="/images/about_boardroom.jpg"
                alt="Rapido InfraTel Solution Architecture Committee in Ahmedabad"
                className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                <div className="font-bold text-white">Solution Architecture Committee</div>
                <div className="text-[11px] text-slate-400">Ahmedabad Tech Hub · Female Tech Leadership &amp; PMP Governance</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: COMPLETE HERITAGE TIMELINE */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">15+ Years Evolution</span>
              <h3 className="text-xl font-bold text-white mt-0.5">Corporate Heritage &amp; Milestone Timeline</h3>
            </div>
            <div className="text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              Registered Trademark (®) Protection
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 relative flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-white font-mono">{m.year}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-cloud-400 bg-cloud-500/10 px-1.5 py-0.5 rounded border border-cloud-500/20">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white">{m.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: STATUTORY ENTITY VERIFICATION CARD */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-saffron-500/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Corporate Entity Verification &amp; Statutory Registry
                </h3>
                <p className="text-xs text-slate-400">
                  Ministry of Corporate Affairs (RoC Ahmedabad) · AMC Licensed Developers
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
              <CheckCircle2 className="w-4 h-4" /> Active &amp; Verified Entity
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Legal Entity Name:</span>
              <div className="font-bold text-white text-sm">RAPIDO INFRATEL LLP</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">LLPIN Identifier:</span>
              <div className="font-mono font-bold text-saffron-400 text-sm">AAV-6363</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Corporate Inception CIN:</span>
              <div className="font-mono font-bold text-slate-200 text-sm">U64200GJ2017PTC096551</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Accreditations &amp; Affiliates:</span>
              <div className="font-bold text-white text-sm">AMC Licensed Developers · Rapido Realty LLP</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Registered Office Address:</strong> B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India
            </span>
          </div>
        </div>

        {/* SECTION 6: CORE ARCHITECTURAL & ETHICAL VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="glass-card p-6 rounded-xl border border-slate-800 space-y-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-cloud-400 border border-slate-800 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ACTION */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-rapido-900 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Consult Our Solutions Architecture Team</h3>
            <p className="text-xs text-slate-400 mt-1">
              Discuss feasibility parameters, PMP-grade milestone structuring, or enterprise cloud hosting requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-lg bg-cloud-500 hover:bg-cloud-400 text-rapido-950 font-bold text-xs transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Contact Committee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
