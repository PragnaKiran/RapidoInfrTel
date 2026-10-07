import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowLeft, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | DPDP Act 2023 & GDPR Compliance",
  description: "Statutory Privacy Policy of RAPIDO® INFRATEL LLP formulated under India's Digital Personal Data Protection Act, 2023 (DPDP 2023) and global data fiduciary standards.",
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Statutory Data Protection Framework
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy &amp; Data Fiduciary Notice
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Formulated in strict adherence to the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong> of India and international standards (including UK/EU GDPR) for B2B institutional communications.
          </p>
          <div className="text-xs text-slate-400 font-mono">
            Last Updated &amp; Effective Date: October 7, 2026 · LLPIN: AAV-6363
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* 1. Data Fiduciary Identity */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">1.</span>
              <span>Data Fiduciary Identification</span>
            </h2>
            <p>
              Under Section 2(i) of the DPDP Act 2023, <strong>RAPIDO INFRATEL LLP</strong> (hereinafter referred to as &ldquo;RILLP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Data Fiduciary&rdquo;), registered under Limited Liability Partnership Identification Number (LLPIN) <strong>AAV-6363</strong>, acts as the Data Fiduciary regarding all personal and organizational data voluntarily provided through this website.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div><strong>Registered Office:</strong> B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India</div>
              <div><strong>Official Email:</strong> contact@rapidoinfratel.com</div>
            </div>
          </section>

          {/* 2. Nature of Data Collected */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">2.</span>
              <span>Information We Collect &amp; Purpose Limitation</span>
            </h2>
            <p>
              We adhere strictly to the principle of <em>purpose limitation</em>. We only collect business contact and project scoping information submitted directly by authorized institutional representatives through our Architecture Review and Contact forms:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-slate-400">
              <li>Full Name &amp; Professional Designation</li>
              <li>Official Enterprise / Institutional Email Address</li>
              <li>Entity / Organization Name &amp; Classification (Enterprise, Government/PSU, Startup)</li>
              <li>Project Scope, Feasibility Notes, and Timeline</li>
              <li>Non-Disclosure Agreement (NDA) request status</li>
            </ul>
            <p>
              <strong>We do not collect</strong> sensitive biometric data, financial payment credentials, or personal tracking cookies on this static website.
            </p>
          </section>

          {/* 3. Lawful Grounds for Processing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">3.</span>
              <span>Lawful Basis &amp; Voluntary Consent</span>
            </h2>
            <p>
              Processing of submitted data is conducted exclusively based on <strong>explicit, affirmative consent</strong> provided by you at the time of form submission for the specified purpose of evaluating solutions architecture requirements, preparing technical proposals, or executing mutual NDAs.
            </p>
          </section>

          {/* 4. Zero Third-Party Advertising & Tracking */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">4.</span>
              <span>Zero Commercial Sale &amp; Tracking Safeguards</span>
            </h2>
            <p>
              RAPIDO® INFRATEL LLP does not rent, sell, monetize, or trade contact information or institutional briefs to any third-party marketers or data aggregators. We operate zero invasive third-party tracking pixels, advertising cookies, or cross-site behavioral telemetry scripts.
            </p>
          </section>

          {/* 5. Data Security & Sovereignty */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">5.</span>
              <span>Data Sovereignty &amp; Technical Safeguards</span>
            </h2>
            <p>
              All communications and project inquiry records are stored within sovereign cloud data enclaves enforcing TLS 1.3 encryption in transit, AES-256 encryption at rest, and strict access controls restricted to authorized Solutions Architecture Committee personnel in Ahmedabad.
            </p>
          </section>

          {/* 6. Rights of the Data Principal */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">6.</span>
              <span>Rights of Data Principals (Under DPDP 2023)</span>
            </h2>
            <p>
              As a Data Principal under Chapter III of the DPDP Act 2023, you are entitled to exercise the following statutory rights at any time without fee:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs">Right to Access</div>
                <div className="text-[11px] text-slate-400">Request a summary of your personal data processed by RILLP.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs">Right to Correction &amp; Erasure</div>
                <div className="text-[11px] text-slate-400">Request prompt correction, updating, or permanent erasure of your records.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs">Right of Grievance Redressal</div>
                <div className="text-[11px] text-slate-400">Directly contact our designated Data Protection Grievance Officer.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs">Right to Nominate</div>
                <div className="text-[11px] text-slate-400">Nominate an individual to exercise rights on your behalf.</div>
              </div>
            </div>
          </section>

          {/* 7. Grievance Officer & Contact */}
          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cloud-400 font-mono">7.</span>
              <span>Data Protection Grievance Officer</span>
            </h2>
            <p>
              For inquiries, withdrawal of consent, or exercising statutory rights under the DPDP Act 2023, please direct written correspondence to:
            </p>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-xs space-y-2">
              <div className="font-bold text-white">Grievance Redressal Cell · RAPIDO® INFRATEL LLP</div>
              <div className="text-slate-300">Attention: Data Protection &amp; Legal Compliance Team</div>
              <div className="text-slate-400">Registered Office: B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India</div>
              <div className="pt-2">
                <a href="mailto:contact@rapidoinfratel.com?subject=DPDP%202023%20Data%20Principal%20Inquiry" className="inline-flex items-center gap-1.5 text-cloud-400 hover:underline font-mono">
                  <Mail className="w-3.5 h-3.5" />
                  <span>contact@rapidoinfratel.com (Subject: DPDP 2023 Inquiry)</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
