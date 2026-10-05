# 🧪 Mathematical Gherkin User Stories & Acceptance Criteria
## Project: RAPIDO INFRATEL LLP Web Platform (`RILLP` · `PRJ-11`)
**Document ID:** `US-RILLP-2026-V1`  
**Classification:** Starfleet Level 1 Verification Matrix  
**Author:** Commander Spock (`»Spock` · Agent 02 | AIPMM Product Manager)  
**Target Codebase:** `/Users/viki/Developer/Websites/RILLP`  
**Target Target Branch:** `refactor/business-centric-redesign`

---

## 1. Feature: Hero Section & Dynamic 5-Slide Carousel (`HeroSlider.jsx`)

### Scenario 1.1: Automated slide transition and cycle timing
```gherkin
Feature: Dynamic Hero Slider Engine
  As a prospective enterprise client visiting the homepage
  I want to experience an automated, content-rich rotating slider
  So that I can quickly understand Rapido InfraTel's 5 core pillars of engineering excellence.

  Scenario: Automated 7-second slide progression
    Given the user has loaded the homepage "/"
    When the user remains idle on the hero viewport for 7000 milliseconds
    Then the hero slider must transition seamlessly from Slide 1 ("Proprietary IT & Mobile Products") to Slide 2 ("Sovereign Cloud Platforms & Hosting")
    And the active pagination indicator must update its visual state to index 1
    And the transition animation duration must not exceed 700 milliseconds.
```

### Scenario 1.2: Hover pause interaction
```gherkin
  Scenario: Slider interaction freezes on user cursor hover
    Given the hero slider is actively cycling automatically
    When the user positions the mouse cursor over the HeroSlider container
    Then the automated 7-second progression timer must pause
    And the currently displayed slide must remain fixed and readable until the cursor leaves the hero container.
```

### Scenario 1.3: Direct slide navigation via pagination pills
```gherkin
  Scenario: Direct selection of specific practice slide
    Given the hero slider is currently displaying Slide 1
    When the user clicks on pagination indicator pill 4 ("Applied AI & Multilingual NLP")
    Then the slider must immediately transition directly to Slide 5
    And the headline "Applied AI & Multilingual NLP for Real-World Systems" must be rendered
    And the primary CTA must link directly to "/solutions/ai-intelligence".
```

---

## 2. Feature: Enterprise Navigation & Global Header (`Header.jsx`)

### Scenario 2.1: Solutions dropdown contains only active practices (Zero GIS references)
```gherkin
Feature: Glassmorphism Header & Navigation Ecosystem
  As any site visitor navigating the platform
  I want an intuitive, responsive navigation bar with zero dead links
  So that I can explore all solutions without encountering deprecated spatial GIS pages.

  Scenario: Solutions dropdown links validation
    Given the user is on any page of the website
    When the user opens the "Solutions" navigation dropdown menu
    Then the dropdown must display exactly the 5 active engineering practices:
      | Practice Name                              | URL Route                          |
      | Proprietary IT & Mobile Products           | /solutions/mobile-products         |
      | Sovereign Cloud & Rapido Hosting           | /solutions/rapido-hosting          |
      | Enterprise Platforms & Digital Governance  | /solutions/enterprise-platforms    |
      | Applied AI & Multilingual Intelligence     | /solutions/ai-intelligence         |
      | Civic Inclusion & Digital Public Infra     | /solutions/civic-inclusion         |
    And no link with route "/solutions/spatial-gis" must exist in the DOM.
```

### Scenario 2.2: Sticky header backdrop blur on scroll
```gherkin
  Scenario: Header transitions to sticky glassmorphic styling upon scroll
    Given the user is at scroll position Y = 0
    When the user scrolls down the page beyond 50 pixels (Y > 50)
    Then the Header component must apply the CSS backdrop-blur-md and semi-transparent background class
    And the header must remain pinned to the top of the viewport (`top-0 z-50`).
```

---

## 3. Feature: Commercial Inquiry & Intake Engine (`ContactForm.jsx`)

### Scenario 3.1: Deterministic validation of mandatory contact fields
```gherkin
Feature: Client Intake & RFQ Engagement Engine
  As an enterprise technical leader seeking solutions architecture
  I want to submit a detailed project inquiry with input validation
  So that my request is accurately routed to the solutions architecture team.

  Scenario: Submitting with missing required fields displays error feedback
    Given the user is on the "/contact" page or the homepage contact section
    When the user submits the form with empty "Full Name" or empty "Corporate Email"
    Then the form must intercept the submission
    And highlight the invalid input fields with high-contrast red error styling
    And display a clear descriptive validation message
    And prevent any network dispatch.
```

### Scenario 3.2: Successful inquiry submission state
```gherkin
  Scenario: Submitting a valid enterprise inquiry
    Given the user has entered valid details:
      | Field Name       | Input Value                          |
      | Full Name        | Rajesh Sharma                        |
      | Corporate Email  | rajesh.sharma@enterprise-infra.in    |
      | Phone            | +91 98765 43210                      |
      | Practice Focus   | Sovereign Cloud & Rapido Hosting     |
      | Message          | Architecture review for 100+ VPS     |
    When the user clicks "Submit Architecture Request"
    Then the form must enter a disabled submitting state with an active spinner
    And upon completion display a confirmation banner: "Thank you. Our solutions architecture team has received your inquiry."
    And reset the form inputs to their default pristine state.
```

---

## 4. Feature: Statutory Compliance & Footer Metadata (`Footer.jsx`)

### Scenario 4.1: Brand date standardization ("Est. 2009")
```gherkin
Feature: Statutory Governance & Brand Lineage
  As a statutory auditor or corporate partner
  I want to verify the exact corporate registration, LLPIN, and brand origin
  So that I have verified legal proof of entity credentials.

  Scenario: Verification of corporate metadata in the global footer
    Given the user navigates to the footer of any page
    Then the footer must display the corporate entity name "RAPIDO INFRATEL LLP"
    And the LLPIN must display exactly "AAV-6363"
    And the registered brand badge must display "Est. 2009" (or "Since 2009")
    And no instance of "September 2, 2009" must appear in the rendered document.
```

---

## 5. Feature: Next.js 15 Static Export & Hosting SLA

### Scenario 5.1: Zero-server dependency static build verification
```gherkin
Feature: Static Web Optimization & CDN Delivery
  As the DevOps Engineer and Site Reliability Team
  I want the Next.js application to compile to a pure static export
  So that the application runs with maximum security and sub-second CDN response times.

  Scenario: Next.js build produces static HTML in website/out
    Given the repository is checked out at branch "refactor/business-centric-redesign"
    When the build command "npm run build" is executed inside "website/"
    Then the compilation must exit with return code 0
    And the directory "website/out" must contain pre-rendered static HTML files for:
      | Target Route                       | Static File Output                     |
      | /                                  | website/out/index.html                 |
      | /about                             | website/out/about.html                 |
      | /architecture                      | website/out/architecture.html          |
      | /digital-india                     | website/out/digital-india.html         |
      | /solutions                         | website/out/solutions.html             |
      | /solutions/mobile-products         | website/out/solutions/mobile-products.html |
      | /solutions/rapido-hosting          | website/out/solutions/rapido-hosting.html  |
      | /solutions/enterprise-platforms    | website/out/solutions/enterprise-platforms.html |
      | /solutions/ai-intelligence         | website/out/solutions/ai-intelligence.html |
      | /solutions/civic-inclusion         | website/out/solutions/civic-inclusion.html |
      | /contact                           | website/out/contact.html               |
    And no dynamic SSR runtime dependencies must be required.
```
