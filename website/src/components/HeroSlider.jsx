"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Radio, 
  Cpu, 
  Server, 
  Users, 
  Wifi, 
  Globe2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      badge: "Proprietary Product Architecture · Est. 2009",
      badgeColor: "text-cloud-400 bg-cloud-500/10 border-cloud-500/30",
      headline: (
        <>
          Engineering Proprietary <span className="gradient-text-cloud">IT &amp; Mobile Products</span> with High-Precision Architecture
        </>
      ),
      description:
        "We design and architect bespoke, mission-critical mobile applications and enterprise software systems engineered for long-term scalability.",
      image: "/images/content_mobile_products.jpg",
      imageAlt: "Two engineers at a dual-monitor workstation reviewing mobile application UI screens and code",
      primaryBtn: { text: "Explore Proprietary Products", href: "/solutions/mobile-products" },
      secondaryBtn: { text: "Initiate Architecture Review", href: "/contact" },
      metric: { val: "15+ Years", label: "Continuous Engineering Heritage", sub: "Est. 2009" }
    },
    {
      id: 2,
      badge: "Sovereign Cloud Infrastructure · Enterprise Hosting",
      badgeColor: "text-cloud-400 bg-cloud-500/10 border-cloud-500/30",
      headline: (
        <>
          Sovereign <span className="gradient-text-cloud">Cloud Platforms</span> Engineered for Resilient Enterprise Data
        </>
      ),
      description:
        "Under the Rapido Hosting brand, we provide high-availability sovereign cloud environments, managed VPS, and localized data residency compliant with Indian regulatory standards.",
      image: "/images/content_rapido_hosting.jpg",
      imageAlt: "Systems engineers in an enterprise operations center monitoring cloud telemetry",
      primaryBtn: { text: "Explore Sovereign Cloud", href: "/solutions/rapido-hosting" },
      secondaryBtn: { text: "Enterprise Cloud Specs", href: "/architecture" },
      metric: { val: "99.999%", label: "Target Cloud Availability SLA", sub: "High-Availability Sovereign Datacenters" }
    },
    {
      id: 3,
      badge: "Civic Digital Systems · Digital Bharat",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      headline: (
        <>
          Architecting <span className="gradient-text-cloud">Civic Digital Systems</span> for Bharat’s Scale
        </>
      ),
      description:
        "Designing inclusive, paperless digital utilities and citizen portals that eliminate operational barriers and ensure seamless public service delivery.",
      image: "/images/content_civic_inclusion.jpg",
      imageAlt: "Professional interacting with a citizen using a mobile tablet in a modern civic service center",
      primaryBtn: { text: "Explore Civic Systems", href: "/solutions/civic-inclusion" },
      secondaryBtn: { text: "Digital Bharat Vision", href: "/digital-india" },
      metric: { val: "Universal", label: "Civic Accessibility & Transparent Governance", sub: "Inclusive Interfaces" }
    },
    {
      id: 4,
      badge: "Sovereign AI Intelligence · 22 Indian Languages",
      badgeColor: "text-saffron-400 bg-saffron-500/10 border-saffron-500/30",
      headline: (
        <>
          Voice-First AI &amp; Multilingual Computing in <span className="gradient-text-saffron">22 Scheduled Languages</span>
        </>
      ),
      description:
        "Integrating state-of-the-art Bhashini language models into mobile and enterprise platforms, enabling voice-driven citizen and customer interactions.",
      image: "/images/about_banner.jpg",
      imageAlt: "Senior tech architects discussing a blueprint on a conference screen",
      primaryBtn: { text: "Explore AI Solutions", href: "/solutions/ai-intelligence" },
      secondaryBtn: { text: "Technical Specs", href: "/architecture" },
      metric: { val: "22 Languages", label: "Bhashini-Ready Sovereign NLP Models", sub: "Inclusive Multilingual Interfaces" }
    },
    {
      id: 5,
      badge: "Strategic Technology Partnerships · Enterprise Advisory",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      headline: (
        <>
          Architectural Guidance for Enterprise CTOs and <span className="text-white">Public Institutions</span>
        </>
      ),
      description:
        "Collaborating directly with enterprise leadership and government departments to scope, prototype, and deploy high-reliability digital architectures.",
      image: "/images/about_boardroom.jpg",
      imageAlt: "Executive leadership and architects around a clean wooden meeting table",
      primaryBtn: { text: "Initiate Architecture Review", href: "/contact" },
      secondaryBtn: { text: "Our Engagement Lifecycle", href: "/about" },
      metric: { val: "Milestone-Driven", label: "Structured Architectural Oversight", sub: "Milestone-Driven Solutions" }
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advancing timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative overflow-hidden bg-rapido-950 min-h-[600px] md:min-h-[665px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cloud-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none translate-x-8"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
                {/* Left Content (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cloud-400 animate-pulse" />
                    <span className={slide.badgeColor}>{slide.badge}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                    {slide.headline}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Actions & Metric Strip */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={slide.primaryBtn.href}
                      className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-rapido-950 bg-cloud-400 hover:bg-cloud-300 shadow-xl shadow-cloud-500/20 transition-all flex items-center gap-2"
                    >
                      <span>{slide.primaryBtn.text}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={slide.secondaryBtn.href}
                      className="px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
                    >
                      <span>{slide.secondaryBtn.text}</span>
                    </Link>
                  </div>

                  {/* Key Metric Snapshot */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                      {slide.metric.val}
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-cloud-400">{slide.metric.label}</div>
                      <div className="text-slate-400 text-[11px]">{slide.metric.sub}</div>
                    </div>
                  </div>
                </div>

                {/* Right Image (5 cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
                    
                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
                      <span className="text-slate-300 font-medium">{slide.imageAlt}</span>
                      <span className="text-[10px] font-mono text-saffron-400 font-bold">RAPIDO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* CONTROLS: PREV/NEXT & DOTS */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  idx === current
                    ? "w-8 bg-cloud-400"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
