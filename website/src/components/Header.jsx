"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RapidoLogo from "./RapidoLogo";
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight,
  Radio,
  Server,
  Users,
  Cpu,
  Globe2
} from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const distFromBottom = docHeight - (scrollY + winHeight);

      // Proximity detection: Unfix / fade sticky header when near footer to eliminate duplicate logo collisions
      if (scrollY > 80 && distFromBottom > 420) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Solutions", 
      href: "/solutions",
      hasDropdown: true,
      subItems: [
        {
          title: "Optical Fiber & FTTH Networks",
          desc: "48F-288F Armored Ribbon OFC & GPON Transmission",
          href: "/solutions#pillar-1",
          icon: Radio
        },
        {
          title: "Governance & Paperless Portals",
          desc: "Aadhaar, DigiLocker & Unified Municipal GIS",
          href: "/solutions#pillar-2",
          icon: Server
        },
        {
          title: "Citizen Enablement & PM-WANI",
          desc: "PDOA Public Wi-Fi Mesh & Multilingual Bhashini",
          href: "/solutions#pillar-3",
          icon: Users
        },
        {
          title: "AI & Mobile App Development",
          desc: "Enterprise Cloud-Native Apps & Predictive Analytics",
          href: "/solutions#ai-mobile",
          icon: Cpu
        },
        {
          title: "Rapido Hosting & Domains",
          desc: "“We are . in domain name” · Sovereign Cloud Hosting",
          href: "/solutions#hosting",
          icon: Globe2
        }
      ]
    },
    { name: "Architecture", href: "/architecture" },
    { name: "Digital India", href: "/digital-india" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. TOP STATUTORY & ENTITY BAR */}
      <div className="bg-telecom-950 border-b border-slate-800/80 text-[11px] text-slate-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Entity Status */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 font-semibold text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              LLPIN: AAV-6363 · RoC Ahmedabad
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-fiber-400 font-semibold tracking-wide hidden lg:inline">
              Architecting Bharat
            </span>
          </div>

          {/* Contact Directs */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <a 
              href="mailto:contact@rapidoinfratel.com" 
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-fiber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-fiber-400" />
              <span>contact@rapidoinfratel.com</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400 hidden sm:inline-flex">
              <MapPin className="w-3 h-3 text-saffron-400" />
              <span>Parimal Garden Cross Rd, C.G. Road, Ahmedabad</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN FLOATING NAVBAR (Sticky with Proximity Detection) */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 glass-nav py-3.5 shadow-2xl shadow-black/50 border-b border-fiber-500/20"
            : "relative bg-telecom-900/90 py-5 border-b border-slate-800/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <RapidoLogo size={isSticky ? "sm" : "default"} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-fiber-400 bg-fiber-500/10"
                          : "text-slate-200 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-88 pt-2 transition-all duration-200 ${
                        solutionsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 rounded-xl bg-telecom-950/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl shadow-black/80 w-80 space-y-1">
                        {link.subItems.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/70 transition-colors group/sub"
                            >
                              <div className="p-2 rounded-lg bg-fiber-500/10 text-fiber-400 border border-fiber-500/20 group-hover/sub:bg-fiber-500 group-hover/sub:text-telecom-950 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover/sub:text-fiber-300">
                                  {sub.title}
                                </div>
                                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-fiber-400 bg-fiber-500/10 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 rounded-lg shadow-lg shadow-saffron-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Inquire / RFP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-telecom-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-fiber-400 hover:bg-slate-900/60 rounded-lg"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1 mt-1 border-l border-slate-800 ml-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="block py-1.5 text-xs text-slate-400 hover:text-fiber-300"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-saffron-500 rounded-lg"
              >
                <span>Submit RFP / Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
