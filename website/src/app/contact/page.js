import React from "react";
import ContactForm from "@/components/ContactForm";
import { 
  Building2, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Phone,
  CheckCircle2,
  ExternalLink,
  Globe2
} from "lucide-react";

export const metadata = {
  title: "Contact & Technical Inquiries | RAPIDO INFRATEL LLP",
  description: "Contact RAPIDO INFRATEL LLP (LLPIN: AAV-6363). Registered office at Parimal Garden Cross Road, C.G. Road, Ahmedabad. Submit project feasibility inquiries, technical scoping, and solutions architecture briefs.",
};

export default function ContactPage() {
  return (
    <div className="bg-telecom-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            Direct Corporate Channel
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Contact &amp; <br />
            <span className="gradient-text-saffron">Technical Scoping</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Submit your infrastructure parameters, municipal scope, AI/mobile application briefs, or enterprise hosting inquiries directly to the RAPIDO INFRATEL LLP solutions architecture team.
          </p>
        </div>

        {/* MAIN LAYOUT: CONTACT DETAILS + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Registered Office & Entity Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Entity Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">RAPIDO INFRATEL LLP</h3>
                  <p className="text-xs text-saffron-400 font-mono">LLPIN: AAV-6363 · RoC Ahmedabad</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Registered Office Address:</strong>
                    <span>B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-fiber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Primary Contact Email:</strong>
                    <a href="mailto:contact@rapidoinfratel.com" className="text-fiber-400 hover:underline">
                      contact@rapidoinfratel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Hosting &amp; Domain Division:</strong>
                    <span className="text-slate-300">Rapido Hosting — “We are . in domain name”</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Solutions Architecture Office Hours:</strong>
                    <span>Monday &ndash; Saturday: 09:30 IST &ndash; 18:30 IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Corporate Heritage:</strong>
                    <span>Rapido® brand established 2009 (Registered Trademark renewed for 10 years)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Scoping Protocols Note */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs text-slate-300">
              <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-saffron-400" />
                <span>Technical Scoping Protocols</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                For formal technical scoping, municipal utility specifications, or carrier route blueprints, you may initiate submission via the form or email project documentation directly to <strong className="text-white">contact@rapidoinfratel.com</strong>.
              </p>
              <div className="flex items-center gap-2 text-fiber-400 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sub-24h turnaround on formal project inquiries</span>
              </div>
            </div>

            {/* Location Reference */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 h-48 relative flex items-center justify-center p-4 text-center">
              <div className="absolute inset-0 bg-telecom-grid opacity-60 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <MapPin className="w-8 h-8 text-saffron-400 mx-auto animate-bounce" />
                <div className="text-xs font-bold text-white">Parimal Garden Cross Road, C.G. Road</div>
                <div className="text-[11px] text-slate-400">Ahmedabad, Gujarat - 380006</div>
                <a
                  href="https://maps.google.com/?q=Rangkrupa+Complex+Parimal+Garden+Cross+Road+CG+Road+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-fiber-400 hover:underline pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: relayBuoy Connected Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
