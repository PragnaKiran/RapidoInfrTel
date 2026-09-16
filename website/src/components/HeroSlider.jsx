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
      badge: "Architecting Digital Bharat · Solutions Architecture",
      badgeColor: "text-fiber-400 bg-fiber-500/10 border-fiber-500/30",
      headline: (
        <>
          Delivering Resilient <span className="gradient-text-fiber">Solutions Architecture</span> &amp;{" "}
          <span className="gradient-text-saffron">PMP-Grade Management</span>
        </>
      ),
      description:
        "Specialized solutions architects delivering resilient architectural designs and PMP-grade project management of ultra-high-speed digital pipelines as fundamental civic utilities for every citizen, enterprise, and public institution.",
      image: "/images/home_hero_architects.jpg",
      imageAlt: "Solutions Architects analyzing fiber network topology",
      primaryBtn: { text: "Explore Architectural Scope", href: "/solutions" },
      secondaryBtn: { text: "Technical Architecture", href: "/architecture" },
      metric: { val: "PMP-Grade", label: "Project Governance", sub: "End-to-End Architectural Oversight" }
    },
    {
      id: 2,
      badge: "Transmission Infrastructure · 48F–288F OFC",
      badgeColor: "text-fiber-400 bg-fiber-500/10 border-fiber-500/30",
      headline: (
        <>
          Carrier-Grade <span className="gradient-text-fiber">Optical Fiber</span> &amp;{" "}
          <span className="text-white">FTTH GPON Networks</span>
        </>
      ),
      description:
        "Engineering high-density armored ribbon OFC ducting, micro-trenching corridors, and GPON distribution backhauls designed with sub-50ms ring protection for 25+ year infrastructure lifespans.",
      image: "/images/home_hero_fiber.jpg",
      imageAlt: "Infrastructure engineer testing optical distribution panel",
      primaryBtn: { text: "Optical Infrastructure", href: "/solutions#pillar-1" },
      secondaryBtn: { text: "Case Studies", href: "/projects" },
      metric: { val: "Sub-50ms", label: "Ring Resilience", sub: "G.8032 ERPS Carrier Standards" }
    },
    {
      id: 3,
      badge: "Intelligent Systems · Mobile Engineering",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      headline: (
        <>
          Enterprise <span className="gradient-text-fiber">AI Systems</span> &amp;{" "}
          <span className="gradient-text-saffron">Multilingual Mobile Apps</span>
        </>
      ),
      description:
        "Architecting predictive data models, intelligent workflow pipelines, and mobile applications riding on high-capacity carrier transmission infrastructure, equipped with native 22-language translation.",
      image: "/images/hero_ai_mobile.jpg",
      imageAlt: "Software engineers developing AI models and mobile applications",
      primaryBtn: { text: "AI & Mobile Development", href: "/solutions#ai-mobile" },
      secondaryBtn: { text: "Consult Solutions Team", href: "/contact" },
      metric: { val: "22 Languages", label: "Bhashini Ready", sub: "Inclusive Multilingual Interfaces" }
    },
    {
      id: 4,
      badge: "Rapido Hosting · Domain Infrastructure",
      badgeColor: "text-saffron-400 bg-saffron-500/10 border-saffron-500/30",
      headline: (
        <>
          Sovereign Cloud Hosting &amp; <br />
          <span className="gradient-text-saffron">“We are . in domain name”</span>
        </>
      ),
      description:
        "Under the trusted Rapido Hosting brand, we provide high-availability enterprise cloud servers, managed VPS, edge compute enclaves, and premier domain name registration solutions.",
      image: "/images/hero_hosting.jpg",
      imageAlt: "Enterprise cloud datacenter and server cluster",
      primaryBtn: { text: "Rapido Hosting Solutions", href: "/solutions#hosting" },
      secondaryBtn: { text: "Domain Services", href: "/contact" },
      metric: { val: "99.999%", label: "Cloud Uptime", sub: "High-Availability Sovereign Datacenters" }
    },
    {
      id: 5,
      badge: "Civic Access & Equity · Open Wi-Fi Mesh",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      headline: (
        <>
          Universal <span className="gradient-text-saffron">Open-Access Wi-Fi Mesh</span> &amp;{" "}
          <span className="text-white">Empowerment Products</span>
        </>
      ),
      description:
        "Deploying decentralized open-access community Wi-Fi mesh software and sovereign paperless credential engines that empower local merchants, students, and citizens under universal human inclusion and equity.",
      image: "/images/hero_citizen.jpg",
      imageAlt: "Citizens using open community Wi-Fi on smartphones in town square",
      primaryBtn: { text: "Universal Access Products", href: "/solutions#pillar-3" },
      secondaryBtn: { text: "Digital Bharat", href: "/digital-india" },
      metric: { val: "Open Mesh", label: "Decentralized Wi-Fi", sub: "Universal Human Equity & Access" }
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
      className="relative overflow-hidden bg-telecom-950 min-h-[640px] md:min-h-[700px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-fiber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-fiber-400 animate-pulse" />
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
                      className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-telecom-950 bg-fiber-400 hover:bg-fiber-300 shadow-xl shadow-fiber-500/20 transition-all flex items-center gap-2"
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
                      <div className="font-semibold text-fiber-400">{slide.metric.label}</div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-telecom-950 via-telecom-950/20 to-transparent pointer-events-none" />
                    
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
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  idx === current
                    ? "w-8 bg-fiber-400"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Current index label */}
          <div className="text-xs font-mono text-slate-400">
            Slide <span className="text-white font-bold">{current + 1}</span> of {slides.length}
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
