# RAPIDO INFRATEL LLP — Official Web Platform (`rapidoinfratel.com`)

> **Domain:** [https://rapidoinfratel.com](https://rapidoinfratel.com)  
> **Entity Name:** RAPIDO INFRATEL LLP  
> **LLPIN:** `AAV-6363` (RoC Ahmedabad Registered, Gujarat)  
> **Corporate Email:** `contact@rapidoinfratel.com`  
> **Registered Office:** B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India  
> **Firebase Project Target:** `rapidoinfr` ([https://rapidoinfr.web.app](https://rapidoinfr.web.app))  
> **Repository:** `PragnaKiran/RapidoInfrTel`  
> **Sector:** Telecommunications & Digital Infrastructure Engineering, Technology Solutions Designing, and e-Governance Systems Architecture.

---

## 1. Strategic Positioning (Digital India Alignment)
Rapido InfraTel LLP is positioned as a premier **Technology Solutions Designing & Telecom Infrastructure Engineering Firm** committed to realizing the vision of the **Digital India Mission**: Making technology an enabler of social and economic empowerment for every citizen.

### The Three Vision Pillars
1. **Pillar 1: Digital Infrastructure as a Utility**
   - Optical Fiber Networks (OFC) & FTTH GPON rollouts (48F/96F/288F Armored Ribbon).
   - Telecom towers and urban small-cell planning for 5G densification.
   - Digital Identity & Trust Backbone (Aadhaar authentication stack, DigiLocker, e-Sign, and PKI).
   - Safe & secure cyberspace: Zero-Trust Network Architecture (ZTNA) and edge compute facilities.
2. **Pillar 2: Governance & Services on Demand**
   - Seamless cross-departmental service integration via open API standards.
   - Paperless, faceless, and cashless enterprise public service delivery.
   - Unified GIS municipal spatial mapping & Integrated Command and Control Center (ICCC) integrations.
   - Civic data pipelines for welfare analytics and automated grievance redressal.
3. **Pillar 3: Digital Empowerment of Citizens**
   - Universal digital access with Bhashini-ready Indian language localization across 22 scheduled languages.
   - Public Wi-Fi and Smart Village enablers under PM-WANI (Public Data Office Aggregator - PDOA).
   - Participatory digital governance platforms and community feedback ecosystems.

---

## 2. Directory Structure
```
RILLP/
├── .firebase/                           # Local Firebase CLI cache
├── .firebaserc                          # Target project: rapidoinfr
├── firebase.json                        # Firebase Hosting rules (public: website/out, headers, clean URLs)
├── .gitignore                           # Git ignore rules
├── README.md                            # Corporate & technical documentation
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml   # CI/CD: Live deploy on push to main/production
│       └── firebase-hosting-preview.yml # CI/CD: Preview deploy for pull requests
└── website/
    ├── jsconfig.json                    # @/* path aliases
    ├── next.config.mjs                  # Static export configuration (output: 'export')
    ├── package.json                     # Next.js 14, React 18, Tailwind CSS, Lucide React
    ├── tailwind.config.js               # Telecom Navy, Fiber Blue, and Saffron theme
    ├── public/
    │   ├── Rapido-Logo.png              # Official brand logo
    │   ├── favicon.ico                  # Multi-layer favicon
    │   ├── favicon-16x16.png            # 16x16 icon
    │   ├── favicon-32x32.png            # 32x32 icon
    │   ├── fav.png                      # 48x48 icon
    │   ├── apple-touch-icon.png         # 180x180 icon
    │   ├── icon-192.png                 # PWA 192x192 icon
    │   ├── icon-512.png                 # PWA 512x512 icon
    │   ├── site.webmanifest             # Web application manifest
    │   ├── robots.txt                   # Search engine crawling rules
    │   └── sitemap.xml                  # Canonical XML sitemap
    └── src/
        ├── app/
        │   ├── globals.css              # Custom styling & glassmorphism utilities
        │   ├── layout.js                # Root layout with SEO, JSON-LD, header & footer
        │   ├── page.js                  # Home page
        │   ├── about/page.js            # About Us page
        │   ├── solutions/page.js        # Solutions & 3 Pillars page
        │   ├── architecture/page.js     # Technology Architecture page
        │   ├── digital-india/page.js    # Digital India Initiatives page
        │   ├── projects/page.js         # Case Studies & Blueprints page
        │   └── contact/page.js          # Contact Us & RFP page
        └── components/
            ├── Header.jsx               # Proximity-aware sticky header with LLPIN topbar
            ├── Footer.jsx               # Insignia badge, registered entity data, compliance
            ├── RapidoLogo.jsx           # Circular emblem & modern brand typography
            ├── ContactForm.jsx          # relayBuoy webhook connected lead capture form
            └── FeasibilityTool.jsx      # Interactive telecom capacity & route modeler
```

---

## 3. Local Development & Build

### Installation
```bash
cd website
npm install
```

### Run Local Development Server
```bash
npm run dev -- -p 3002
```
Navigate to [http://localhost:3002](http://localhost:3002) in your browser.

### Build & Static Export
```bash
npm run build
```
Generates statically optimized HTML/CSS/JS in `website/out`.

---

## 4. Deployment to Firebase Hosting

Deploy directly using Firebase CLI:
```bash
npx firebase-tools deploy --only hosting --project rapidoinfr
```

---

## 5. Contact & Webhook Integration (`relayBuoy`)
All contact and RFP submissions are securely routed to the master agency webhook:
- **Endpoint:** `https://script.google.com/macros/s/AKfycbyV06eDsiCFPehDeroAUgFf-ttlR2TVbAP0n40paUw9_tnvdR4VtkbRwkRQwZ5Cqz91/exec`
- **Project Identifier:** `rapidoinfratel`
- **Client ID:** `rapidoinfratel`
- **Spam Defense:** Automated honeypot `_gotcha` filtering.
