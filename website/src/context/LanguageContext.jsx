"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    code: "EN",
    name: "English",
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
    bhashiniNotice: "Bhashini Multilingual Enabled (National Language Translation Mission)"
  },
  hi: {
    code: "HI",
    name: "हिन्दी",
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
    bhashiniNotice: "भाषिणी बहुभाषी सक्षम (राष्ट्रीय भाषा अनुवाद मिशन)"
  },
  gu: {
    code: "GU",
    name: "ગુજરાતી",
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
    bhashiniNotice: "ભાષિણી બહુભાષી સક્ષમ (રાષ્ટ્રીય ભાષા અનુવાદ મિશન)"
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
    const saved = localStorage.getItem("rillp_lang");
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("rillp_lang", lang);
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
