import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://rapidoinfratel.com"),
  title: {
    default: "RAPIDO INFRATEL LLP | Telecommunications & Digital Infrastructure Engineering",
    template: "%s | RAPIDO INFRATEL LLP",
  },
  description: "RAPIDO INFRATEL LLP (LLPIN: AAV-6363) is a premier Technology Solutions Designing & Telecom Infrastructure Engineering Firm in Ahmedabad, Gujarat. Aligned with the Digital India Mission, we architect optical fiber backbones, digital identity trust stacks, paperless e-governance platforms, and PM-WANI public Wi-Fi grids.",
  keywords: [
    "rapido infratel llp",
    "telecommunications infrastructure engineering ahmedabad",
    "optical fiber network design OFC gujarat",
    "FTTH rollout telecom towers",
    "digital india mission technology partner",
    "pm-wani public wifi pdoa aggregator",
    "aadhaar stack digilocker pki architecture",
    "municipal GIS smart city ICCC ahmedabad",
    "paperless egovernance cloud platforms",
    "roC ahmedabad registered telecom firm",
    "bharatnet phase 3 implementation partner",
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
    title: "RAPIDO INFRATEL LLP | Telecommunications & Digital Infrastructure Engineering",
    description: "Architecting the Digital India Mission: Optical fiber backbones, sovereign digital identity, paperless e-governance portals, and PM-WANI public Wi-Fi networks.",
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
    title: "RAPIDO INFRATEL LLP | Digital Infrastructure & Telecom Engineering",
    description: "Realizing Digital India: Optical fiber engineering, secure e-gov portals, and PM-WANI Wi-Fi aggregation across urban & rural India.",
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
      "alternateName": ["Rapido Infratel", "RILLP"],
      "url": "https://rapidoinfratel.com",
      "logo": "https://rapidoinfratel.com/Rapido-Logo.png",
      "image": "https://rapidoinfratel.com/Rapido-Logo.png",
      "description": "Premier Telecommunications & Digital Infrastructure Engineering Firm based in Ahmedabad, Gujarat. Aligned with the Digital India Mission, designing optical fiber backbones, digital identity trust stacks, paperless e-governance systems, and PM-WANI public Wi-Fi networks.",
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
        "Telecommunications Engineering",
        "Optical Fiber Cable (OFC) Network Design",
        "FTTH Infrastructure",
        "PM-WANI Public Data Office Aggregator (PDOA)",
        "Digital India Stack",
        "Aadhaar & DigiLocker Architecture",
        "Smart City Municipal GIS and ICCC",
        "Zero-Trust Network Architecture",
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
