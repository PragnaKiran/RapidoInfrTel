"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe2, Check, ChevronDown } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिन्दी" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900/90 border border-slate-700 hover:border-cloud-500/50 text-slate-200 hover:text-white shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-cloud-500"
        aria-label="Select Language (Bhashini Localization)"
        title="Bhashini Localization: English, हिन्दी, ગુજરાતી"
        aria-expanded={isOpen}
      >
        <Globe2 className="w-3.5 h-3.5 text-cloud-400" />
        <span>{currentLang.native}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 rounded-xl bg-slate-900 border border-slate-700/90 shadow-2xl shadow-black py-1.5 z-[100] backdrop-blur-2xl ring-1 ring-white/10"
        >
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cloud-400 border-b border-slate-800">
            Bhashini AI / ભાષા
          </div>
          <div className="py-1">
            {languages.map((l) => {
              const isSelected = l.code === language;
              return (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                    isSelected
                      ? "bg-cloud-500/20 text-cloud-300 font-bold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{l.native}</span>
                    <span className="text-[10px] text-slate-400">{l.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cloud-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
