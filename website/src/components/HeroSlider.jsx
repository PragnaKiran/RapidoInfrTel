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
      imageAlt: "Solutions Architects analyzing digital infrastructure topology",
      primaryBtn: { text: "Explore Architectural Scope", href: "/solutions" },
      secondaryBtn: { text: "Technical Architecture", href: "/architecture" },
      metric: { val: "PMP-Grade", label: "Project Governance", sub: "End-to-End Architectural Oversight" }
    },
    {
      id: 2,
      badge: "Enterprise Cloud-Native Platforms · Digital Utilities",
      badgeColor: "text-fiber-400 bg-fiber-500/10 border-fiber-500/30",
      headline: (
        <>
          Enterprise <span className="gradient-text-fiber">Cloud Platforms</span> &amp;{" "}
          <span className="text-white">Digital Utilities</span>
        </>
      ),
      description:
        "Engineering high-availability cloud-native microservices, fault-tolerant transaction pipelines, and distributed digital utility backbones running over carrier telecommunication networks.",
      image: "/images/home_hero_platforms.jpg",
      imageAlt: "Executive solution architect and engineering team reviewing cloud platform topologies",
      primaryBtn: { text: "Cloud Platforms", href: "/solutions/enterprise-platforms" },
      secondaryBtn: { text: "Case Studies", href: "/projects" },
      metric: { val: "Sub-50ms", label: "Failover Resilience", sub: "Distributed Cloud Utility Architecture" }
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
      primaryBtn: { text: "Mobile Applications", href: "/solutions/mobile-products" },
      secondaryBtn: { text: "Sovereign AI Intelligence", href: "/solutions/ai-intelligence" },
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
      primaryBtn: { text: "Rapido Hosting Solutions", href: "/solutions/rapido-hosting" },
      secondaryBtn: { text: "Domain Services", href: "/solutions/rapido-hosting#domains" },
      metric: { val: "99.999%", label: "Cloud Uptime", sub: "High-Availability Sovereign Datacenters" }
    },
    {
      id: 5,
      badge: "Universal Human Inclusion & Equity · Civic Access",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      headline: (
        <>
          Universal <span className="gradient-text-saffron">Human Inclusion</span> &amp;{" "}
          <span className="text-white">Civic Digital Products</span>
        </>
      ),
      description:
        "Empowering every citizen, merchant, and student through barrier-free digital civic products and paperless service engines built on the universal human inclusion principle of equity and mutual respect.",
      image: "/images/home_hero_civic_inclusion.jpg",
      imageAlt: "Diverse cross-functional engineering and civic leadership team collaborating on inclusive digital products",
      primaryBtn: { text: "Civic Inclusion Products", href: "/solutions/civic-inclusion" },
      secondaryBtn: { text: "Architecting Digital Bharat", href: "/digital-india" },
      metric: { val: "100% Inclusive", label: "Zero-Barrier Access", sub: "Universal Human Equity & Civic Dignity" }
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
      className="relative overflow-hidden bg-telecom-950 min-h-[600px] md:min-h-[665px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-fiber-500/10 rounded-full blur-[140px] pointer-events-none" />
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
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
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
