# 📄 Product Requirements Document (PRD)
## Project: RAPIDO INFRATEL LLP Web Platform (`RILLP` · `PRJ-11`)
**Document ID:** `PRD-RILLP-2026-V1`  
**Classification:** Starfleet Level 1 Product Specification  
**Author:** Commander Spock (`»Spock` · Agent 02 | AIPMM Product Manager)  
**Target Codebase:** `/Users/viki/Developer/Websites/RILLP`  
**Target Domains:** `https://rapidoinfratel.com` · `https://rapidoinfr.web.app`  
**Target Repository:** `PragnaKiran/RapidoInfrTel` (`refactor/business-centric-redesign`)

---

## 1. Executive Summary & Problem Statement

### 1.1 Strategic Vision
RAPIDO INFRATEL LLP (`ENT-01`, LLPIN: `AAV-6363`, brand origin Rapido® est. 2009) requires an authoritative, high-performance, and mathematically verifiable web platform. The platform serves as the premier digital gateway communicating two core business capabilities:
1. **Solutions Architecture & PMP-Grade Project Management:** Resilient engineering of proprietary IT and mobile products, civic digital public infrastructure (DPI), and enterprise governance platforms.
2. **Rapido Hosting Sovereign Cloud:** High-availability sovereign cloud environments, managed VPS, and localized data residency adhering strictly to Indian statutory standards.

### 1.2 Problem Statement
Legacy implementations suffered from generic telecommunications filler, deprecated GIS spatial references, imprecise historical dates, and fragmented navigation. The objective of this Next.js 15 web platform is to establish an unassailable standard of technical precision, statutory transparency, and sub-second performance.

---

## 2. User Personas & Target Audiences

| Persona ID | Role / Title | Primary Need / Goal | Primary Touchpoint |
| :--- | :--- | :--- | :--- |
| **PER-01** | **Enterprise CTO / VP Engineering** | Evaluate architecture robustness, zero-trust security, and microservices scalability. | `/architecture`, `/solutions/mobile-products` |
| **PER-02** | **Public Sector / Municipal Director** | Assess Civic DPI, PM-WANI integration, and Bhashini 22-language NLP readiness. | `/digital-india`, `/solutions/civic-inclusion` |
| **PER-03** | **Corporate IT Procurement Head** | Review Rapido Hosting sovereign cloud SLAs (99.999%), data residency, and managed hosting. | `/solutions/rapido-hosting` |
| **PER-04** | **Statutory & Legal Auditor** | Verify LLPIN (`AAV-6363`), CIN lineage (`2017`), Trademark (`2009`), and registered address. | `/about`, Global Footer, Static Metadata |

---

## 3. Functional Scope & Feature Specifications

### 3.1 Feature Group 1: Dynamic 5-Slide Rotating Hero Engine (`HeroSlider.jsx`)
* **Slide 1 — Proprietary IT & Mobile Products (Flagship):** Focuses on bespoke mobile applications, distributed transaction pipelines, and offline-first mobile architecture.
* **Slide 2 — Sovereign Cloud Platforms & Hosting:** Focuses on domestic data residency, 99.999% cloud availability SLA, and high-performance CDN routing.
* **Slide 3 — Civic Digital Public Infrastructure:** Focuses on Digital Bharat scale, open API standards, and integrated municipal dashboards.
* **Slide 4 — Enterprise Governance & Milestone Project Management:** Focuses on PMP-grade oversight, transparent deliverables, and zero-defect execution.
* **Slide 5 — Applied AI & Multilingual NLP (Bhashini):** Focuses on voice-first accessibility across 22 scheduled Indian languages.
* **Controls & Telemetry:** Automated 7-second rotation cycle, pause on mouse hover / touch interaction, direct slide pagination pills, and keyboard arrow accessibility.

### 3.2 Feature Group 2: The 5 Core Engineering Practices (`/solutions/`)
* **Practice 01 (`/solutions/mobile-products`):** Microservices, iOS/Android mobile clients, edge transaction queuing.
* **Practice 02 (`/solutions/rapido-hosting`):** Sovereign VPS, Anycast DNS, SSL automation, domestic data sovereignty.
* **Practice 03 (`/solutions/enterprise-platforms`):** ERP/Workflow integration, RBAC architectures, audit logs.
* **Practice 04 (`/solutions/ai-intelligence`):** Predictive models, automated document extraction, Bhashini speech-to-text.
* **Practice 05 (`/solutions/civic-inclusion`):** Universal access, PM-WANI PDOA frameworks, public service delivery portals.

### 3.3 Feature Group 3: Architecture & Security Blueprint Explorer (`/architecture`)
* Tabular and card-based deep-dives into Zero-Trust Network Architecture (ZTNA), Tier-3/Tier-4 domestic datacenter standards, end-to-end data encryption (AES-256 / TLS 1.3), and high-throughput static delivery.

### 3.4 Feature Group 4: Commercial Intake & Engagement Terminal (`ContactForm.jsx`)
* Deterministic input validation for Enterprise Inquiries, dynamic RFQ scope selectors, sanitization of inputs, anti-spam honeypot parameters, and instant user confirmation state.

### 3.5 Feature Group 5: Statutory Footer & Global Brand Mark
* Universal inclusion of Rapido® (Est. 2009), LLPIN `AAV-6363`, Ahmedabad registered office, and sanitized navigation without deprecated GIS links.

---

## 4. Non-Functional Requirements & Performance Boundaries

1. **Build & Deployment Model:** Static Export (`output: 'export'`) in Next.js 15 deployed to Firebase Hosting CDN (`rapidoinfr`).
2. **Performance SLA:**
   * Largest Contentful Paint (LCP): $\le 1.2\text{s}$
   * Cumulative Layout Shift (CLS): $\le 0.05$
   * First Input Delay / INP: $\le 100\text{ms}$
3. **Responsive Breakpoints:** Strict fluid scaling across Mobile ($320\text{px} - 640\text{px}$), Tablet ($641\text{px} - 1024\text{px}$), and Desktop ($1025\text{px} - 1920\text{px}+$ ).
4. **Security & Headers:** `Content-Security-Policy`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and 1-year immutable caching on static assets (`max-age=31536000`).

---

## 5. Feature Prioritization Matrix (3-Tier Matrix `P-S-T`)

| Priority (`P-S-T`) | Feature / Deliverable | Target Component / Path | Status |
| :---: | :--- | :--- | :---: |
| **`11-1-1`** | **5-Slide Hero Slider Implementation** | `src/components/HeroSlider.jsx` | Completed / Active |
| **`11-1-2`** | **Navigation & Footer Link Hygiene (Prune GIS)** | `Header.jsx`, `Footer.jsx`, `solutions/` | In Progress |
| **`11-1-3`** | **Brand Date Standardization ("Est. 2009")** | Global components | In Progress |
| **`11-1-4`** | **Editorial Imagery Replacement** | `public/images/` assets | To Do |
| **`11-2-1`** | **Firebase Hosting Custom Domain SSL Routing** | `firebase.json`, `rapidoinfr` target | To Do |
