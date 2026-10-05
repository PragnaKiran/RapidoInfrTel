# 📐 Flat 2D Layout Wireframes & UI State Rulebook
## Project: RAPIDO INFRATEL LLP Web Platform (`RILLP` · `PRJ-11`)
**Document ID:** `DESIGN-RILLP-2026-V1`  
**Classification:** Starfleet Level 1 Visual Design Blueprint  
**Author:** Lieutenant Hikaru Sulu (`»Sulu` · Agent 11 | UI/UX Designer)  
**Target Codebase:** `/Users/viki/Developer/Websites/RILLP`

---

## 1. Global Viewport Wireframe (Desktop 1440px / Mobile 390px)

```text
+-----------------------------------------------------------------------------------------+
| [RAPIDO® Logo | Est. 2009]     Solutions (v)   Architecture   Digital Bharat   About   [Contact Us] |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [ BADGE: Proprietary Product Architecture · Est. 2009 ]                                |
|                                                                                         |
|  Engineering Proprietary IT & Mobile Products                                           |
|  with High-Precision Architecture                                                       |
|                                                                                         |
|  We design and architect bespoke, mission-critical mobile applications and enterprise   |
|  software systems engineered for long-term scalability.                                 |
|                                                                                         |
|  [ Explore Products -> ]    [ Initiate Architecture Review ]                            |
|                                                                                         |
|  ==================== STATS & HIGHLIGHTS RIBBON ====================================   |
|  [ 15+ Years Heritage ]   [ Proprietary IP ]   [ Sovereign Cloud ]   [ Milestone Governance ] |
|                                                                                         |
|  (o) Slide 1      ( ) Slide 2      ( ) Slide 3      ( ) Slide 4      ( ) Slide 5        |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  -- 02. CORE ENGINEERING PRACTICES (5-PILLAR GRID) -----------------------------------  |
|                                                                                         |
|  +------------------------+ +------------------------+ +------------------------+        |
|  | 01. MOBILE PRODUCTS    | | 02. RAPIDO HOSTING     | | 03. ENTERPRISE PLATFORMS |       |
|  | Microservices, Flutter | | Sovereign Cloud, VPS,  | | Digital Governance,      |       |
|  | & Offline-First Apps   | | Domestic Data Residency| | ERP/Workflow Integration |       |
|  | [Explore Practice ->]  | | [Explore Hosting ->]   | | [Explore Platform ->]    |       |
|  +------------------------+ +------------------------+ +------------------------+        |
|                                                                                         |
|  +------------------------------------+ +------------------------------------+        |
|  | 04. APPLIED AI & MULTILINGUAL NLP  | | 05. CIVIC DIGITAL INFRASTRUCTURE   |        |
|  | Predictive Models & Bhashini Stack | | PM-WANI PDOA & Public Services     |        |
|  | [Explore AI Intelligence ->]       | | [Explore Civic Inclusion ->]       |        |
|  +------------------------------------+ +------------------------------------+        |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  -- 03. ARCHITECTURE & ZERO-TRUST BLUEPRINT ------------------------------------------  |
|  [ Zero-Trust ZTNA ]  [ Sovereign Data Residency ]  [ Anycast CDN ]  [ Static Microservices ] |
|  +-----------------------------------------------------------------------------------+  |
|  | Full Tier-3/Tier-4 Datacenter Specs, AES-256 Encryption, TLS 1.3 Sub-Second TTFB  |  |
|  +-----------------------------------------------------------------------------------+  |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  -- 04. COMMERCIAL INTAKE & ENGAGEMENT TERMINAL --------------------------------------  |
|  [ Full Name: ____________ ]   [ Corporate Email: ________________ ]                    |
|  [ Phone: ________________ ]   [ Practice Focus: [ Select Practice v ] ]                |
|  [ Project Scope / Architecture Objectives: _______________________ ]                   |
|  [ Submit Architecture Request (->) ]                                                   |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  -- 05. STATUTORY FOOTER -------------------------------------------------------------  |
|  RAPIDO INFRATEL LLP | LLPIN: AAV-6363 | Origin: Rapido® Est. 2009                       |
|  Registered Office: B2, Rangkrupa Complex, Parimal Garden, Ahmedabad, Gujarat - 380006  |
|  (C) 2009-2026 RAPIDO INFRATEL LLP. All Rights Reserved.                               |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Component State Rules & Interactions

| Component | State | Visual Treatment / CSS Token |
| :--- | :--- | :--- |
| **Hero Slider** | **Auto-Cycle** | 7-second smooth crossfade (`duration-700`); active pill widens to `w-8 bg-cloud-400`. |
| **Hero Slider** | **Hover** | Cursor over container halts timer; slide remains static. |
| **Navigation** | **Scroll ($Y > 50\text{px}$)** | `backdrop-blur-md bg-slate-900/80 border-b border-slate-800`. |
| **Contact Form** | **Submitting** | Submit button disabled; spinner active; input opacity reduced to 0.7. |
| **Contact Form** | **Success** | Form replaced with green alert banner: *"Thank you. Our solutions architecture team has received your inquiry."* |
