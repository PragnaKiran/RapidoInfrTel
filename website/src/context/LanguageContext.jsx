"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    code: "en",
    name: "English",
    native: "English",
    tagline: "Architecting Digital Bharat · Sovereign Cloud & IT/Mobile Products",
    hq: "Ahmedabad Headquartered · Est. 2009",
    initiateReview: "Initiate Architecture Review",
    contactUs: "contact@rapidoinfratel.com",
    address: "Parimal Garden Cross Rd, C.G. Road, Ahmedabad",
    nav: {
      home: "Home",
      about: "About Firm",
      solutions: "Solutions",
      architecture: "Architecture Framework",
      contact: "Contact & RFP"
    },
    solutionsSub: [
      {
        title: "Proprietary IT & Mobile Products",
        desc: "Native iOS/Android, Field Operations & Offline-First Sync",
        href: "/solutions/mobile-products"
      },
      {
        title: "Sovereign Cloud Platforms & Hosting",
        desc: "Enterprise Cloud Native & Mission-Critical Hosting",
        href: "/solutions/rapido-hosting"
      },
      {
        title: "Civic Digital Systems & Portals",
        desc: "Paperless Civic Delivery & Public Infrastructure",
        href: "/solutions/civic-inclusion"
      }
    ],
    bhashiniNotice: "Bhashini Multilingual Enabled (National Language Translation Mission)",
    hero: {
      badge: "Brand Heritage Est. 2009 · Solutions Architecture",
      titlePrefix: "Architecting",
      titleHighlight: "Digital Bharat",
      titleSuffix: "with Resilient Platform Engineering",
      exploreBtn: "Explore Solutions",
      consultBtn: "Consult Solutions Architects"
    },
    footer: {
      aboutTitle: "RAPIDO® INFRATEL LLP",
      aboutDesc: "Ahmedabad-headquartered Technology Solutions Designing Firm. Proprietary IT & Mobile Products on enterprise digital infrastructure under universal human inclusion and equity.",
      registeredOffice: "Registered Office",
      addressFull: "B2, Rangkrupa Complex, B/s Gujarat Gas Bldg., Parimal Garden Cross Road, C.G. Road, Ahmedabad, Gujarat - 380006, India",
      brandHeritage: "Brand Heritage: Rapido® brand established 2009 (Registered Trademark ®). Incorporated in 2017 as RAPIDO INFRATEL PRIVATE LIMITED (CIN: U64200GJ2017PTC096551), currently structured as RAPIDO INFRATEL LLP.",
      rightsReserved: "All Rights Reserved."
    }
  },
  hi: {
    code: "hi",
    name: "Hindi",
    native: "हिन्दी",
    tagline: "डिजिटल भारत का निर्माण · संप्रभु क्लाउड एवं आईटी/मोबाइल उत्पाद",
    hq: "अहमदाबाद मुख्यालय · स्थापित 2009",
    initiateReview: "आर्किटेक्चर समीक्षा शुरू करें",
    contactUs: "contact@rapidoinfratel.com",
    address: "परिमल गार्डन क्रॉस रोड, सी.जी. रोड, अहमदाबाद",
    nav: {
      home: "होम",
      about: "फर्म के बारे में",
      solutions: "समाधान",
      architecture: "आर्किटेक्चर फ्रेमवर्क",
      contact: "संपर्क एवं प्रस्ताव"
    },
    solutionsSub: [
      {
        title: "स्वामित्व वाले आईटी एवं मोबाइल उत्पाद",
        desc: "मूल आईओएस/एंड्रॉइड, फील्ड संचालन एवं ऑफलाइन-फर्स्ट सिंक",
        href: "/solutions/mobile-products"
      },
      {
        title: "संप्रभु क्लाउड प्लेटफॉर्म एवं होस्टिंग",
        desc: "एंटरप्राइज क्लाउड नेटिव एवं मिशन-क्रिटिकल होस्टिंग",
        href: "/solutions/rapido-hosting"
      },
      {
        title: "नागरिक डिजिटल प्रणालियाँ एवं पोर्टल",
        desc: "कागज रहित नागरिक सेवाएं एवं सार्वजनिक अवसंरचना",
        href: "/solutions/civic-inclusion"
      }
    ],
    bhashiniNotice: "भाषिणी बहुभाषी सक्षम (राष्ट्रीय भाषा अनुवाद मिशन)",
    hero: {
      badge: "ब्रांड विरासत स्थापित 2009 · सॉल्यूशंस आर्किटेक्चर",
      titlePrefix: "मजबूत प्लेटफॉर्म इंजीनियरिंग से",
      titleHighlight: "डिजिटल भारत",
      titleSuffix: "का निर्माण",
      exploreBtn: "समाधान देखें",
      consultBtn: "आर्किटेक्ट्स से परामर्श लें"
    },
    footer: {
      aboutTitle: "रैपिडो® इन्फ्राटेल एलएलपी",
      aboutDesc: "अहमदाबाद मुख्यालय वाली प्रौद्योगिकी समाधान डिजाइनिंग फर्म। सार्वभौमिक मानवीय समावेशन और निष्पक्षता के अंतर्गत एंटरप्राइज डिजिटल बुनियादी ढांचे पर मालिकाना आईटी और मोबाइल उत्पाद।",
      registeredOffice: "पंजीकृत कार्यालय",
      addressFull: "बी२, रंगकृपा कॉम्प्लेक्स, गुजरात गैस बिल्डिंग के पीछे, परिमल गार्डन क्रॉस रोड, सी.जी. रोड, अहमदाबाद, गुजरात - ३८०००६, भारत",
      brandHeritage: "ब्रांड विरासत: रैपिडो® ब्रांड २००९ में स्थापित (पंजीकृत ट्रेडमार्क ®)। २०१७ में रैपिडो इन्फ्राटेल प्राइवेट लिमिटेड के रूप में निगमित, वर्तमान में रैपिडो इन्फ्राटेल एलएलपी के रूप में संरचित।",
      rightsReserved: "सर्वाधिकार सुरक्षित।"
    }
  },
  gu: {
    code: "gu",
    name: "Gujarati",
    native: "ગુજરાતી",
    tagline: "ડિજિટલ ભારતનું નિર્માણ · સાર્વભૌમ ક્લાઉડ અને આઇટી/મોબાઇલ પ્રોડક્ટ્સ",
    hq: "અમદાવાદ મુખ્ય મથક · સ્થાપના ૨૦૦૯",
    initiateReview: "આર્કિટેક્ચર સમીક્ષા શરૂ કરો",
    contactUs: "contact@rapidoinfratel.com",
    address: "પરિમલ ગાર્ડન ક્રોસ રોડ, સી.જી. રોડ, અમદાવાદ",
    nav: {
      home: "મુખ્ય પૃષ્ઠ",
      about: "સંસ્થા વિશે",
      solutions: "ઉકેલો",
      architecture: "આર્કિટેક્ચર ફ્રેમવર્ક",
      contact: "સંપર્ક અને દરખાસ્ત"
    },
    solutionsSub: [
      {
        title: "માલિકીની આઇટી અને મોબાઇલ પ્રોડક્ટ્સ",
        desc: "મૂળ આઇઓએસ/એન્ડ્રોઇડ, ફિલ્ડ ઓપરેશન્સ અને ઓફલાઇન-પ્રથમ સિંક",
        href: "/solutions/mobile-products"
      },
      {
        title: "સાર્વભૌમ ક્લાઉડ પ્લેટફોર્મ્સ અને હોસ્ટિંગ",
        desc: "એન્ટરપ્રાઇઝ ક્લાઉડ નેટિવ અને મિશન-ક્રિટિકલ હોસ્ટિંગ",
        href: "/solutions/rapido-hosting"
      },
      {
        title: "નાગરિક ડિજિટલ પ્રણાલીઓ અને પોર્ટલ્સ",
        desc: "કાગળ રહિત નાગરિક સેવાઓ અને જાહેર માળખાકીય સુવિધાઓ",
        href: "/solutions/civic-inclusion"
      }
    ],
    bhashiniNotice: "ભાષિણી બહુભાષી સક્ષમ (રાષ્ટ્રીય ભાષા અનુવાદ મિશન)",
    hero: {
      badge: "બ્રાન્ડ વારસો સ્થાપના ૨૦૦૯ · સોલ્યુશન્સ આર્કિટેક્ચર",
      titlePrefix: "સ્થિતિસ્થાપક પ્લેટફોર્મ એન્જિનિયરિંગ સાથે",
      titleHighlight: "ડિજિટલ ભારત",
      titleSuffix: "નું નિર્માણ",
      exploreBtn: "ઉકેલો જુઓ",
      consultBtn: "આર્કિટેક્ટ્સ સાથે ચર્ચા કરો"
    },
    footer: {
      aboutTitle: "રેપિડો® ઇન્ફ્રાટેલ એલએલપી",
      aboutDesc: "અમદાવાદ સ્થિત ટેકનોલોજી સોલ્યુશન્સ ડિઝાઇનિંગ ફર્મ. સાર્વત્રિક માનવીય સમાવેશ અને સમાનતા હેઠળ એન્ટરપ્રાઇઝ ડિજિટલ માળખા પર માલિકીની આઇટી અને મોબાઇલ પ્રોડક્ટ્સ.",
      registeredOffice: "નોંધાયેલ કાર્યાલય",
      addressFull: "બી૨, રંગકૃપા કોમ્પ્લેક્સ, ગુજરાત ગેસ બિલ્ડીંગ પાછળ, પરિમલ ગાર્ડન ક્રોસ રોડ, સી.જી. રોડ, અમદાવાદ, ગુજરાત - ૩૮૦૦૦૬, ભારત",
      brandHeritage: "બ્રાન્ડ વારસો: રેપિડો® બ્રાન્ડ ૨૦૦૯ માં સ્થપાયેલ (નોંધાયેલ ટ્રેડમાર્ક ®). ૨૦૧૭ માં રેપિડો ઇન્ફ્રાટેલ પ્રાઇવેટ લિમિટેડ તરીકે નિગમિત, હાલમાં રેપિડો ઇન્ફ્રાટેલ એલએલપી તરીકે કાર્યરત.",
      rightsReserved: "સર્વાધિકાર સુરક્ષિત."
    }
  }
};

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  availableLanguages: ["en", "hi", "gu"]
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rillp_lang");
      if (saved && translations[saved]) {
        setLanguage(saved);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      try {
        localStorage.setItem("rillp_lang", lang);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translations[language] || translations.en,
        translations
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
