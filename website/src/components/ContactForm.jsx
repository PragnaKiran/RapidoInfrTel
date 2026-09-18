"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm({ initialSolution = "" }) {
  const [formData, setFormData] = useState({
    name_designation: "",
    organization: "",
    email: "",
    org_type: "Enterprise",
    scope: initialSolution || "Proprietary Mobile/IT Product",
    timeline: "Immediate (0-30 days)",
    message: "",
    request_nda: false,
    _gotcha: "", // Honeypot field
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
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
      name_designation: formData.name_designation,
      email: formData.email,
      organization: formData.organization,
      org_type: formData.org_type,
      scope: formData.scope,
      timeline: formData.timeline,
      message: formData.message,
      request_nda: formData.request_nda,
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
        name_designation: "",
        organization: "",
        email: "",
        org_type: "Enterprise",
        scope: "Proprietary Mobile/IT Product",
        timeline: "Immediate (0-30 days)",
        message: "",
        request_nda: false,
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
    <div className="w-full glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden" id="architecture-review">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Initiate Architecture Review
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Direct qualification intake to RAPIDO INFRATEL LLP solutions architecture team.
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
            className="mt-2 text-xs font-semibold text-cloud-400 hover:text-cloud-300 underline"
          >
            Submit another brief
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
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name &amp; Official Designation <span className="text-saffron-400">*</span>
              </label>
              <input
                type="text"
                name="name_designation"
                required
                value={formData.name_designation}
                onChange={handleChange}
                placeholder="e.g. Rajesh Patel, CTO"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cloud-500 transition-colors"
              />
            </div>

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
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cloud-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Official Organization Name <span className="text-saffron-400">*</span>
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization or Enterprise Name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cloud-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Organization Type <span className="text-saffron-400">*</span>
              </label>
              <select
                name="org_type"
                value={formData.org_type}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-cloud-500 transition-colors"
              >
                <option value="Enterprise">Enterprise</option>
                <option value="PSU or Government">PSU or Government</option>
                <option value="Growth Tech">Growth Tech</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Engagement Scope <span className="text-saffron-400">*</span>
              </label>
              <select
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-cloud-500 transition-colors"
              >
                <option value="Proprietary Mobile/IT Product">Proprietary Mobile/IT Product</option>
                <option value="Sovereign Cloud Platform">Sovereign Cloud Platform</option>
                <option value="Civic Digital System">Civic Digital System</option>
                <option value="Architecture Audit">Architecture Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Estimated Deployment Timeline <span className="text-saffron-400">*</span>
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-cloud-500 transition-colors"
              >
                <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="3-6 Months">3-6 Months</option>
                <option value="RFP Evaluation">RFP Evaluation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Brief Architecture Requirements <span className="text-saffron-400">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your project scope, architectural requirements..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cloud-500 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <input 
              type="checkbox" 
              name="request_nda" 
              checked={formData.request_nda} 
              onChange={handleChange} 
              id="request_nda"
              className="rounded bg-slate-900 border-slate-700 text-saffron-500 focus:ring-saffron-500"
            />
            <label htmlFor="request_nda">
              Request Mutual NDA prior to technical disclosure
            </label>
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
            className="w-full py-3 px-6 rounded-lg text-sm font-semibold text-white bg-saffron-500 hover:bg-saffron-400 shadow-lg shadow-saffron-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status.submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting via relayBuoy...</span>
              </>
            ) : (
              <>
                <span>Submit Architecture Brief</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-500">
            Protected by relayBuoy enterprise webhook. Encrypted submission directly to RAPIDO INFRATEL LLP solutions architecture committee.
          </p>
        </form>
      )}
    </div>
  );
}
