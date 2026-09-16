"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm({ initialSolution = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    solution_interest: initialSolution || "Solutions Architecture & Project Management (PMP Grade)",
    message: "",
    _gotcha: "", // Honeypot field
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData._gotcha && formData._gotcha.trim() !== "") {
      setStatus({ submitting: false, submitted: true, error: null });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    const webhookUrl = "https://script.google.com/macros/s/AKfycbyV06eDsiCFPehDeroAUgFf-ttlR2TVbAP0n40paUw9_tnvdR4VtkbRwkRQwZ5Cqz91/exec";

    const payload = {
      project: "rapidoinfratel",
      client_id: "rapidoinfratel",
      owner_email: "contact@rapidoinfratel.com",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      organization: formData.organization,
      solution_interest: formData.solution_interest,
      message: formData.message,
      _gotcha: formData._gotcha,
      submitted_at: new Date().toISOString(),
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: "",
        phone: "",
        email: "",
        organization: "",
        solution_interest: "Solutions Architecture & Project Management (PMP Grade)",
        message: "",
        _gotcha: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Unable to submit inquiry automatically. Please email contact@rapidoinfratel.com directly.",
      });
    }
  };

  return (
    <div className="w-full glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fiber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Submit Infrastructure RFP or Technical Inquiry
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Direct inquiry route to RAPIDO INFRATEL LLP solutions architecture team.
        </p>
      </div>

      {status.submitted ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Inquiry Received Successfully</h4>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Thank you for reaching out to <strong>RAPIDO INFRATEL LLP</strong>. Your inquiry has been logged via our master agency system (relayBuoy). Our solution architects will evaluate your project parameters and respond promptly.
          </p>
          <button
            onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
            className="mt-2 text-xs font-semibold text-fiber-400 hover:text-fiber-300 underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for spam prevention */}
          <div style={{ display: "none", opacity: 0, position: "absolute", left: "-9999px" }}>
            <label htmlFor="_gotcha">Do not fill this</label>
            <input
              type="text"
              name="_gotcha"
              id="_gotcha"
              tabIndex="-1"
              value={formData._gotcha}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name <span className="text-saffron-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Patel"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fiber-500 transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone Number <span className="text-saffron-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fiber-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Official Email */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Official Email <span className="text-saffron-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fiber-500 transition-colors"
              />
            </div>

            {/* Organization / Agency */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Organization / Enterprise / Agency <span className="text-saffron-400">*</span>
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Smart City SPV / Telecom ISP / Enterprise"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fiber-500 transition-colors"
              />
            </div>
          </div>

          {/* Solution Area Interest */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Primary Solution Focus <span className="text-saffron-400">*</span>
            </label>
            <select
              name="solution_interest"
              value={formData.solution_interest}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-fiber-500 transition-colors"
            >
              <option value="Solutions Architecture & Project Management (PMP Grade)">
                Solutions Architecture &amp; PMP-Grade Project Management
              </option>
              <option value="Optical Fiber (OFC) & FTTH GPON Engineering">
                Optical Fiber (OFC) &amp; FTTH GPON Transmission Network Design
              </option>
              <option value="Enterprise AI & Machine Learning Workflows">
                Enterprise AI &amp; Machine Learning Workflows (Bhashini-Ready)
              </option>
              <option value="Mobile Applications Development (iOS & Android)">
                Mobile Applications Development (Cloud-Native iOS &amp; Android)
              </option>
              <option value="Rapido Hosting - Cloud Infrastructure & VPS">
                Rapido Hosting: Cloud Infrastructure, Managed VPS &amp; Datacenter
              </option>
              <option value="Rapido Hosting - Domain Name Registration">
                Rapido Hosting: Domain Registration (“We are . in domain name”)
              </option>
              <option value="PM-WANI Public Wi-Fi & PDOA Grid Architecture">
                PM-WANI Public Wi-Fi &amp; PDOA Rural Broadband Mesh
              </option>
              <option value="Paperless e-Governance & Unified Municipal GIS">
                Paperless e-Governance Systems &amp; Municipal GIS (ICCC)
              </option>
              <option value="Comprehensive Turnkey Infrastructure RFP">
                Comprehensive Turnkey Infrastructure Solution Architecture RFP
              </option>
            </select>
          </div>

          {/* Message / Scope */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Project Scope, Technical Parameters or Inquiry Details <span className="text-saffron-400">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your route span, architectural requirements, mobile app scope, or cloud hosting specifications..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fiber-500 transition-colors resize-none"
            />
          </div>

          {status.error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{status.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.submitting}
            className="w-full py-3 px-6 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 shadow-lg shadow-saffron-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status.submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting via relayBuoy...</span>
              </>
            ) : (
              <>
                <span>Submit Technical RFP Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-500">
            Protected by relayBuoy enterprise webhook. Encrypted submission directly to Rapido InfraTel LLP solutions architecture committee.
          </p>
        </form>
      )}
    </div>
  );
}
