# RAPIDO INFRATEL LLP — Official Web Platform (`rapidoinfratel.com`)

> **Tagline:** Architecting Bharat  
> **Official Domain:** [https://rapidoinfratel.com](https://rapidoinfratel.com)  
> **Entity Name:** RAPIDO INFRATEL LLP  
> **LLPIN:** `AAV-6363` (RoC Ahmedabad Registered, Gujarat)  
> **Corporate Inception CIN:** `U64200GJ2017PTC096551` (Incorporated 2017 as RAPIDO INFRATEL PRIVATE LIMITED)  
> **Brand Origin:** Rapido® established 2009 (Registered Trademark in Telecom/Tech renewed for 10 years)  
> **Corporate Email:** `contact@rapidoinfratel.com`  
> **Registered Office:** B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India  
> **Firebase Project Target:** `rapidoinfr` ([https://rapidoinfr.web.app](https://rapidoinfr.web.app))  
> **Repository:** `PragnaKiran/RapidoInfrTel`  
> **Specialization:** Solutions Architecture & PMP-Grade Project Management for Next-Generation Digital Pipelines, Enterprise AI, Mobile Applications, and Rapido Hosting (*“We are . in domain name”*).

---

## 1. Strategic Positioning
Rapido InfraTel LLP operates as premier **Solution Architects delivering resilient solutions architecture designs & Project Management (PMP-grade) of ultra-high-speed digital pipelines as fundamental civic utilities for every citizen, enterprise, and public institution.**

### Core Capabilities
1. **Pillar 1: Digital Infrastructure as a Utility**
   - Carrier-grade Optical Fiber Networks (OFC 48F–288F Armored Ribbon) & FTTH GPON backhauls.
   - Telecom towers and urban small-cell planning for 5G densification.
   - Digital Identity & Trust Backbone (Aadhaar AUA/KUA stack, DigiLocker, e-Sign, and PKI).
   - Zero-Trust Network Architecture (ZTNA) and resilient edge compute facilities.
2. **Pillar 2: Governance & Services on Demand**
   - Seamless cross-departmental integration via open API standards.
   - End-to-end paperless, faceless, and cashless enterprise public service portals.
   - Unified GIS municipal spatial mapping & Integrated Command and Control Center (ICCC) integrations.
   - Civic data pipelines for welfare analytics and automated grievance redressal.
3. **Pillar 3: Digital Empowerment of Citizens**
   - Universal digital access with Bhashini-ready multilingual localization across 22 scheduled languages.
   - Public Wi-Fi and Smart Village enablers under PM-WANI (Public Data Office Aggregator - PDOA).
   - Participatory digital governance platforms and community feedback ecosystems.
4. **Enterprise AI & Mobile Applications**
   - Cloud-native iOS & Android mobile applications for citizen services and utility field-force tracking.
   - Intelligent predictive civic models and NLP pipelines integrated with Bhashini.
5. **Rapido Hosting & Domain Solutions**
   - Premier domain registration and sovereign cloud infrastructure embodying *“We are . in domain name”*.
   - High-availability cloud servers, managed VPS, and Anycast global DNS.

---

## 2. Directory Structure
```
RILLP/
├── .firebaserc                          # Target project: rapidoinfr
├── firebase.json                        # Firebase Hosting rules
├── .gitignore                           # Git ignore rules
├── README.md                            # Documentation
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml   # CI/CD: Live deploy on main
│       └── firebase-hosting-preview.yml # CI/CD: Preview deploy for PRs
└── website/
    ├── jsconfig.json                    # @/* path aliases
    ├── next.config.mjs                  # Static export configuration
    ├── package.json                     # Dependencies
    ├── tailwind.config.js               # Design tokens & glassmorphism
    ├── public/
    │   ├── Rapido-Logo.png              # Official brand logo
    │   ├── images/                      # Realistic human-centric imagery
    │   │   ├── hero_architects.jpg      # Solutions architects reviewing network topology
    │   │   ├── hero_fiber.jpg           # Telecom engineer testing optical distribution panel
    │   │   ├── hero_ai_mobile.jpg       # Software engineers developing AI & mobile apps
    │   │   ├── hero_hosting.jpg         # Sovereign datacenter & cloud infrastructure
    │   │   ├── hero_citizen.jpg         # Citizens using high-speed public Wi-Fi
    │   │   ├── about_boardroom.jpg      # Architecture committee in Ahmedabad boardroom
    │   │   ├── solutions_smart_city.jpg # Smart city connectivity at dusk
    │   │   └── projects_survey.jpg      # Field engineers conducting GPS route survey
    │   ├── favicon.ico                  # Multi-layer favicon
    │   ├── site.webmanifest             # Web application manifest
    │   └── sitemap.xml & robots.txt     # SEO crawlability
    └── src/
        ├── app/
        │   ├── layout.js                # Root layout & JSON-LD
        │   ├── page.js                  # Home page with 5-slide animated HeroSlider
        │   ├── about/page.js            # Corporate heritage & milestones
        │   ├── solutions/page.js        # 3 Pillars, AI, Mobile & Hosting
        │   ├── architecture/page.js     # 5-Tier blueprints & PM-WANI PDOA
        │   ├── digital-india/page.js    # Independent engineering excellence
        │   ├── projects/page.js         # Case studies & reference blueprints
        │   └── contact/page.js          # Direct relayBuoy inquiry form
        └── components/
            ├── Header.jsx               # Proximity-aware sticky header
            ├── Footer.jsx               # Insignia badge, registered entity data
            ├── HeroSlider.jsx           # 5-slide animated hero carousel
            ├── RapidoLogo.jsx           # Circular emblem & modern brand typography
            └── ContactForm.jsx          # relayBuoy webhook connected lead capture
```

---

## 3. Build & Deployment

### Build Static Site
```bash
cd website
npm run build
```

### Deploy to Firebase Hosting
```bash
npx firebase-tools deploy --only hosting --project rapidoinfr
```
