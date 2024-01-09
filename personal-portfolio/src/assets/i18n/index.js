import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInEng from '../locals/en/translation.json';
import translationsInArabic from '../locals/ar/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'



// the translations
const resources = {
  en: {
    translation: translationsInEng,
    dir:'ltr',
  },
  ar: {
    translation: translationsInArabic,
    dir:'rtl',
  },
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources, 
    lng: "ar",   
    debug: true,
    fallbackLng: "en", 
    fallbackLng:"ar",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation",
    detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
      backend: {
        loadPath: '../locales/{{lng}}/translation.json',
      },
    //   react: { useSuspense: false },
    supportedLngs:['ar','en']
  });

export default i18n;