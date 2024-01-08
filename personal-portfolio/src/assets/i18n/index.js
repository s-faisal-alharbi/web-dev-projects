import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locals/en/translation.json';
import translationsInArabic from '../locals/ar/translation.json';


// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  ar: {
    translation: translationsInArabic
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: "ar",   
    debug: true,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;