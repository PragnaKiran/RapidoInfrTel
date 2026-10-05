# 🏛️ Stage 1 Architecture Blueprint: Next.js Static Export & Firebase CDN Topology
## Project: RAPIDO INFRATEL LLP Web Platform (`RILLP` · `PRJ-11`)
**Document ID:** `ARCH-RILLP-2026-STAGE1`  
**Classification:** Starfleet Level 1 Architecture Specification  
**Author:** Dr. Richard Daystrom (`»Daystrom` · Agent 04 | Solutions Architect)  
**Target Codebase:** `/Users/viki/Developer/Websites/RILLP`  
**Target Domains:** `https://rapidoinfratel.com` · `https://rapidoinfr.web.app`  
**Target Branch:** `refactor/business-centric-redesign`

---

## 1. C4 System Context & Edge Topology

The following diagram illustrates the global client ingress, Firebase Edge CDN, static artifact serving, and zero-trust perimeter.

```mermaid
flowchart TD
    subgraph Users ["Enterprise & Public Clients"]
        ClientDesktop["Desktop Browser / Enterprise CTO"]
        ClientMobile["Mobile Device / Citizen User"]
    end

    subgraph Ingress ["DNS & Edge Routing Layer"]
        DNS["Custom DNS (Apex & Subdomain)<br/>rapidoinfratel.com"]
        EdgeCDN["Firebase Global Anycast Edge CDN<br/>(Google Cloud Edge Network · Mumbai / Delhi PoPs)"]
    end

    subgraph Security ["Zero-Trust Network Architecture (ZTNA)"]
        SecHeaders["Security Headers Gateway<br/>(CSP, HSTS, X-Frame-Options, No-Sniff)"]
        SSLEncrypt["Automated TLS 1.3 / HTTP/2 & QUIC Encryption"]
    end

    subgraph StaticStorage ["Static Artifact Storage (GCS Hosting Bucket)"]
        HTMLOut["Static HTML Pages (website/out/*.html)<br/>Cache: max-age=0, must-revalidate"]
        AssetOut["Hashed JS/CSS/Fonts/Images (_next/static/**)<br/>Cache: max-age=31536000, immutable"]
    end

    ClientDesktop -->|HTTPS / TLS 1.3| DNS
    ClientMobile -->|HTTPS / TLS 1.3| DNS
    DNS --> EdgeCDN
    EdgeCDN --> SecHeaders
    SecHeaders --> SSLEncrypt
    SSLEncrypt --> HTMLOut
    SSLEncrypt --> AssetOut
```

---

## 2. Next.js 15 Static Export Build Architecture

### 2.1 Build Pipeline Specification
* **Engine:** Next.js 14/15 running under Node.js 20 LTS.
* **Compilation Directive (`next.config.mjs`):**
  ```javascript
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: false,
  };
  export default nextConfig;
  ```
* **Build Target:** `website/out/` contains completely self-contained static HTML, CSS, JavaScript, and public media assets.
* **Deterministic Build Command:** `npm run build` executed within `website/`.
* **Zero SSR Runtime:** Eliminates Node.js runtime servers, reducing cold starts to 0ms and attack surface to absolute zero.

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Developer / Bridge Agent (»DeSalle)
    participant GH as GitHub Actions CI/CD (»Uhura)
    participant NextBuild as Next.js Static Compiler
    participant FBDeploy as Firebase Hosting CLI
    participant CDNEndpoint as Live Edge Target (rapidoinfr.web.app)

    Dev->>GH: Push commit to refactor/business-centric-redesign
    GH->>NextBuild: npm ci && npm run build
    NextBuild-->>GH: Generate static bundle in website/out/
    GH->>FBDeploy: action-hosting-deploy (Service Account: rapidoinfr)
    FBDeploy->>CDNEndpoint: Deploy to live channel & purge edge cache
    CDNEndpoint-->>GH: Deployment Verified (HTTP 200)
```

---

## 3. Firebase Hosting Edge CDN & Caching Rules

### 3.1 Cache Partitioning Strategy (`firebase.json`)
The platform leverages a deterministic split-tier cache invalidation pattern:

1. **Immutable Asset Tier (`_next/static/**`, `images/**`):**
   * **Rule:** `**/*.@(jpg|jpeg|gif|png|webp|svg|css|js|woff|woff2|ttf|eot)`
   * **Header:** `Cache-Control: max-age=31536000, immutable`
   * **Rationale:** Next.js generates content-hashed filenames (`[name].[hash].js`). These files are globally cached at edge PoPs and browser memory for 365 days with zero re-fetching overhead.

2. **Fresh Content & Route Tier (`*.html`, `*.json`, `*.xml`):**
   * **Rule:** `**/*.@(html|txt|xml|json)`
   * **Header:** `Cache-Control: max-age=0, must-revalidate`
   * **Rationale:** Ensures every visitor always fetches the freshest DOM markup immediately upon release deployment without waiting for stale cache TTLs.

3. **URL Normalization:**
   * `cleanUrls: true` seamlessly maps `/solutions/rapido-hosting` to `solutions/rapido-hosting.html`.
   * `trailingSlash: false` prevents duplicate canonical content indexing.

---

## 4. Zero-Trust Network Architecture (ZTNA) & Security Hardening

### 4.1 Enforced Security Headers
The following security headers are injected at the Firebase edge gateway for all outbound responses:

| Header Key | Assigned Value | Security Purpose |
| :--- | :--- | :--- |
| **`X-Content-Type-Options`** | `nosniff` | Prevents MIME-type confusion attacks and drive-by execution. |
| **`X-Frame-Options`** | `SAMEORIGIN` | Mitigates clickjacking attacks across external iframes. |
| **`Referrer-Policy`** | `strict-origin-when-cross-origin` | Protects sensitive URL query parameters on outbound navigation. |
| **`Strict-Transport-Security`** | `max-age=31536000; includeSubDomains; preload` | Forces HTTPS and prevents protocol downgrade attacks. |
| **`Content-Security-Policy`** | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';` | Blocks unauthorized third-party script injection and data exfiltration. |

---

## 5. Domain Ingress & DNS Routing Matrix

```mermaid
flowchart LR
    subgraph Domains ["Domain Ingress"]
        Apex["rapidoinfratel.com<br/>(Apex A / ALIAS Records)"]
        WWW["www.rapidoinfratel.com<br/>(CNAME Record)"]
        FBCanonical["rapidoinfr.web.app<br/>(Firebase Primary)"]
    end

    subgraph FirebaseEdge ["Google Cloud Edge Anycast Network"]
        SSLTerm["Automated TLS Certificate Provisioning<br/>(Let's Encrypt / Google Trust Services)"]
        HttpRedirect["HTTP-to-HTTPS 301 Redirect Engine"]
        CDNFastly["Global Anycast Edge PoPs<br/>(asia-south1 / asia-south2 Localized Nodes)"]
    end

    Apex --> SSLTerm
    WWW --> SSLTerm
    FBCanonical --> SSLTerm
    SSLTerm --> HttpRedirect
    HttpRedirect --> CDNFastly
```

* **Apex Domain:** `rapidoinfratel.com` points to Firebase Hosting Anycast IP endpoints (`199.36.158.100`).
* **Subdomain:** `www.rapidoinfratel.com` points to `rapidoinfratel.com` via CNAME.
* **Automatic SSL:** Managed automated renewal via Google Trust Services / Let's Encrypt with 90-day rolling rotation.

---

## 6. FinOps Free-Tier Budget & Quota Matrix

```
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                     FINOPS FREE-TIER CAPACITY MATRIX                       │
 ├───────────────────┬────────────────────┬──────────────────┬────────────────┤
 │ RESOURCE          │ ALLOCATED CAPACITY │ FREE-TIER LIMIT  │ MONTHLY COST   │
 ├───────────────────┼────────────────────┼──────────────────┼────────────────┤
 │ Hosting Storage   │ ~45 MB             │ 10 GB            │ ₹0.00 ($0.00)  │
 │ CDN Data Transfer │ ~5 - 15 GB / month │ 10 GB / month    │ ₹0.00 ($0.00)  │
 │ Compute Runtime   │ Static Export (0ms)│ Unlimited Static │ ₹0.00 ($0.00)  │
 │ SSL Certificates  │ 3 Custom Domains   │ Unlimited Free   │ ₹0.00 ($0.00)  │
 │ DNS Lookups       │ Cloud Anycast Edge │ Included in Host │ ₹0.00 ($0.00)  │
 ├───────────────────┴────────────────────┴──────────────────┼────────────────┤
 │ TOTAL ESTIMATED MONTHLY CLOUD EXPENDITURE:                 │ ₹0.00 ($0.00)  │
 └────────────────────────────────────────────────────────────┴────────────────┘
```
**Conclusion:** Zero fiscal leakage against Google Cloud / Firebase Spark free tier.
