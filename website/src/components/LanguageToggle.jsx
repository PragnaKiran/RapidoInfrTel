"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe2, Check } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिन्दी" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cloud-500/40 transition-colors"
        aria-label="Select Language (Bhashini Localization)"
        title="Bhashini Localization Toggle"
      >
        <Globe2 className="w-3.5 h-3.5 text-cloud-400" />
        <span>{currentLang.native}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-1.5 w-36 rounded-xl bg-rapido-950 border border-slate-700 shadow-2xl shadow-black/90 py-1 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-100"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
            Bhashini AI / भाषा
          </div>
          {languages.map((l) => {
            const isSelected = l.code === language;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left transition-colors ${
                  isSelected
                    ? "bg-cloud-500/15 text-cloud-300 font-bold"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                <span>{l.native}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-cloud-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
