import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://rapidoinfratel.com"),
  title: {
    default: "RAPIDO INFRATEL LLP | Architecting Digital Bharat · Solutions Architecture & IT/Mobile Products",
    template: "%s | RAPIDO INFRATEL LLP",
  },
  description: "RAPIDO INFRATEL LLP (LLPIN: AAV-6363, RoC Ahmedabad). Designers of proprietary IT & Mobile Products used on telecommunications infrastructure under the foundational inspiration of Architecting Digital Bharat and universal human inclusion & equity.",
  keywords: [
    "rapido infratel llp",
    "architecting digital bharat",
    "universal human inclusion and equity",
    "solutions architecture telecom ahmedabad",
    "pmp grade project management telecom",
    "optical fiber network design OFC gujarat",
    "it mobile products telecom infrastructure",
    "ai mobile applications development",
    "rapido hosting domain name",
    "we are . in domain name",
    "open access community wifi mesh",
    "sovereign digital identity pki architecture",
    "municipal GIS spatial intelligence",
    "paperless cloud platforms",
  ],
  authors: [{ name: "RAPIDO INFRATEL LLP", url: "https://rapidoinfratel.com" }],
  creator: "RAPIDO INFRATEL LLP",
  publisher: "RAPIDO INFRATEL LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rapidoinfratel.com/",
  },
  openGraph: {
    title: "RAPIDO INFRATEL LLP | Architecting Digital Bharat · Solutions Architecture",
    description: "Delivering resilient solutions architecture & PMP-grade project management of IT & Mobile products on telecom infrastructure, enterprise AI, and sovereign cloud.",
    url: "https://rapidoinfratel.com/",
    siteName: "RAPIDO INFRATEL LLP",
    images: [
      {
        url: "/Rapido-Logo.png",
        width: 1024,
        height: 420,
        alt: "RAPIDO INFRATEL LLP Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAPIDO INFRATEL LLP | Architecting Digital Bharat · Solutions Architecture",
    description: "Architecting Digital Bharat: Proprietary IT & Mobile products deployed on telecom infrastructure under universal human inclusion and equity.",
    images: ["/Rapido-Logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fav.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://rapidoinfratel.com/#organization",
      "name": "RAPIDO INFRATEL LLP",
      "alternateName": ["Rapido Infratel", "RILLP", "Rapido Hosting"],
      "url": "https://rapidoinfratel.com",
      "logo": "https://rapidoinfratel.com/Rapido-Logo.png",
      "image": "https://rapidoinfratel.com/Rapido-Logo.png",
      "description": "Proprietary IT & Mobile Products engineered to ride upon telecommunications infrastructure under the foundational inspiration of Architecting Digital Bharat and universal human inclusion & equity. RoC Ahmedabad Registered (LLPIN: AAV-6363).",
      "email": "contact@rapidoinfratel.com",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "LLPIN",
        "value": "AAV-6363",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380006",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0189,
        "longitude": 72.5574,
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "State",
          "name": "Gujarat",
        },
      ],
      "knowsAbout": [
        "Architecting Digital Bharat",
        "Universal Human Inclusion & Equity",
        "Solutions Architecture",
        "PMP Project Management",
        "Telecommunications Engineering",
        "Optical Fiber Cable (OFC) Network Design",
        "Enterprise AI & Mobile Applications",
        "Rapido Hosting & Domain Services",
        "Open-Access Community Wi-Fi Mesh Products",
        "Sovereign Cryptographic Trust Architecture",
        "Smart City Spatial GIS Intelligence",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "corporate inquiries",
        "email": "contact@rapidoinfratel.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Gujarati"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://rapidoinfratel.com/#website",
      "url": "https://rapidoinfratel.com",
      "name": "RAPIDO INFRATEL LLP",
      "publisher": {
        "@id": "https://rapidoinfratel.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-telecom-950 text-slate-200 antialiased selection:bg-fiber-500 selection:text-telecom-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
