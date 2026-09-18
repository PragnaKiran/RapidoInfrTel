import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Activity, 
  Layers, 
  Lock, 
  Share2 
} from "lucide-react";

export const metadata = {
  title: "Sovereign AI & Multilingual Bhashini Intelligence | RAPIDO INFRATEL LLP",
  description: "Enterprise predictive AI systems, automated civic workflow intelligence, and multilingual Bhashini natural language models audited for zero bias and universal equity.",
};

export default function AiIntelligencePage() {
  const modules = [
    {
      title: "Bhashini 22-Language Speech & Text Intelligence",
      desc: "Integrating state-of-the-art sovereign language models to deliver natural speech synthesis, automated voice recognition, and real-time machine translation across all 22 official Indian languages.",
      icon: Sparkles,
      points: [
        "Conversational AI for citizen service delivery in local mother tongues",
        "Acoustic models tuned for regional accents, dialects, and rural speech patterns",
        "Sub-120ms speech-to-text inference latency on edge-local nodes",
        "Paperless document translation and automated cross-language summarization"
      ]
    },
    {
      title: "Predictive Civic Intelligence & Resource Optimization",
      desc: "Applying machine learning algorithms to municipal utility telemetry, traffic density, and municipal resources to forecast demands and optimize infrastructure allocation.",
      icon: Cpu,
      points: [
        "Time-series predictive models for utility demand forecasting",
        "Automated pattern recognition for predictive infrastructure maintenance",
        "Dynamic routing and dispatch optimization for emergency civic response",
        "Real-time anomaly detection across municipal sensor data streams"
      ]
    },
    {
      title: "Zero-Bias Algorithmic Governance & Equity Audits",
      desc: "Engineering fair, transparent artificial intelligence models with continuous algorithmic audits that actively eliminate racial, gender, and socio-economic biases from decision logic.",
      icon: Users,
      points: [
        "Explainable AI (XAI) frameworks with transparent audit trails for all decisions",
        "Rigorous statistical parity testing across gender and demographic categories",
        "Elimination of systemic historical bias from training datasets and weights",
        "Human-in-the-loop oversight workflows for high-stakes civic adjudications"
      ]
    },
    {
      title: "Edge AI Inference at Enterprise Network Points",
      desc: "Deploying quantized neural networks directly to enterprise edge datacenters and distributed compute units, minimizing backhaul bandwidth and ensuring localized privacy.",
      icon: Activity,
      points: [
        "INT8 / FP16 quantized model deployment on edge server clusters",
        "Localized data processing ensuring sensitive biometrics never leave regional borders",
        "Fault-tolerant inference fallback during network interruptions",
        "Real-time video and telemetry stream analysis at under 15ms latency"
      ]
    }
  ];

  const highlights = [
    { label: "Language Coverage", val: "22 Languages", sub: "Scheduled Indian Tongues" },
    { label: "Algorithmic Equity", val: "0.00% Bias", sub: "Audited Fairness Metrics" },
    { label: "Inference Latency", val: "< 120ms Edge", sub: "Sub-Second Conversational" },
    { label: "Data Governance", val: "Sovereign Data", sub: "Zero External Leakage" },
  ];

  return (
    <div className="bg-rapido-950 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cloud-400 bg-cloud-500/10 border border-cloud-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-cloud-400 animate-pulse" />
              <span>Architecting Digital Bharat · Sovereign AI</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Sovereign AI &amp; <span className="gradient-text-cloud">Multilingual Intelligence</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We architect sovereign predictive AI systems, automated workflow intelligence, and 22-language Bhashini NLP models engineered under universal human equity to empower every citizen in their native tongue with zero bias.
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
            <img
              src="/images/banner_ai_intelligence.jpg"
              alt="Neural Network Architecture and Multidimensional Tensor Embeddings"
              className="w-full h-[260px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rapido-950 via-rapido-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Sovereign Deep Learning &amp; Tensor Vector Spaces</span>
                <span className="hidden sm:inline text-slate-400"> · Audited Bias-Free Model Architecture</span>
              </div>
              <span className="text-cloud-400 font-mono text-[11px] font-semibold">Sub-120ms Edge Inference</span>
            </div>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass-card p-5 rounded-xl border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-white font-mono">{h.val}</div>
              <div className="text-xs font-semibold text-cloud-400 mt-1">{h.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{h.sub}</div>
            </div>
          ))}
        </div>

        {/* Explanatory Content Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">Civic Analytics &amp; Machine Learning</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Predictive Analytics &amp; Natural Language Governance
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our AI intelligence practice bridges deep learning research with production-grade civic delivery. By continuously evaluating model fairness across demographic cross-sections, our NLP models transcribe and summarize citizen inquiries across 22 scheduled languages with transparent auditability and zero training bias.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                <span>Quantized neural networks running at regional edge compute nodes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                <span>Real-time municipal ticket sentiment analysis and automated routing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400" />
                <span>Explainable AI (XAI) transparent decisions for public auditability</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl relative group">
              <img
                src="/images/content_ai_intelligence.jpg"
                alt="AI data science team reviewing civic classification and NLP dashboards"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-400">AI Framework</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Intelligent Workflow Engines &amp; Sovereign NLP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className="glass-card p-7 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cloud-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{mod.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{mod.desc}</p>
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                    {mod.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cloud-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 rounded-2xl border border-cloud-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white">
              Integrate Inclusive AI Systems into Your Enterprise Workflows
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consult with our machine learning architects to deploy fair, audited, sovereign intelligence tailored for the linguistic diversity of Bharat.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/architecture"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Explore Tech Stack
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-xs font-bold text-rapido-950 bg-cloud-400 hover:bg-cloud-300 shadow-lg shadow-cloud-500/20 transition-all flex items-center gap-2"
            >
              <span>Consult AI Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
