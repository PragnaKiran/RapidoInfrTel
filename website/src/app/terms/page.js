import React from "react";
import Link from "next/link";
import { Scale, FileText, CheckCircle2, ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Terms of Engagement | Professional Services & Architecture Advisory",
  description: "Terms of Engagement governing solutions architecture consulting, NDA protocols, and intellectual property practices of RAPIDO® INFRATEL LLP.",
};

export default function TermsPage() {
  return (
    <div className="bg-rapido-950 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cloud-400 hover:text-cloud-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Title Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-3 py-1 rounded-full">
            <Scale className="w-3.5 h-3.5" />
            Statutory Legal Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms of Engagement &amp; Service
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Standard contractual guidelines governing solutions architecture advisory, technical scoping reviews, and proprietary software platform design by <strong>RAPIDO INFRATEL LLP</strong>.
          </p>
          <div className="text-xs text-slate-400 font-mono">
            LLPIN: AAV-6363 · Ahmedabad Jurisdiction · Effective Date: October 7, 2026
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">1.</span>
              <span>Scope of Professional Practice</span>
            </h2>
            <p>
              RAPIDO® INFRATEL LLP operates as a Technology Solutions Designing Firm. All preliminary scoping documents, system blueprints, and architecture advisory sessions conducted prior to a formalized Master Services Agreement (MSA) are exploratory in nature.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">2.</span>
              <span>Non-Disclosure Agreements (NDA) &amp; Confidentiality</span>
            </h2>
            <p>
              We treat all submitted enterprise project briefs, system diagrams, and proprietary product concepts under strict institutional confidentiality. Where indicated on our intake forms, standard bilateral Non-Disclosure Agreements (NDAs) are formally executed prior to the disclosure of proprietary codebase or technical specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">3.</span>
              <span>Intellectual Property &amp; Trademarks</span>
            </h2>
            <p>
              The name <strong>Rapido®</strong>, including related logos, Sudarshan Chakra inspired emblems, and proprietary software framework names (such as Rapido® Hosting), are registered intellectual property of the firm and its affiliated group companies (Pragna Kiran Group, est. 2009). Nothing on this website shall be construed as conferring any license or right under trademark or copyright law without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">4.</span>
              <span>Governing Law &amp; Jurisdiction</span>
            </h2>
            <p>
              These terms and any legal engagements arising out of technical consultation with RAPIDO® INFRATEL LLP shall be governed by and construed in accordance with the laws of the Republic of India. The courts of competent jurisdiction at <strong>Ahmedabad, Gujarat, India</strong> shall have exclusive jurisdiction over all disputes.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">5.</span>
              <span>Inquiries &amp; Legal Notices</span>
            </h2>
            <p>
              For formal legal communications, contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <div><strong>Legal Cell · RAPIDO® INFRATEL LLP</strong></div>
              <div>B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad - 380006</div>
              <div className="mt-1">Email: <a href="mailto:contact@rapidoinfratel.com" className="text-cloud-400 underline font-mono">contact@rapidoinfratel.com</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
