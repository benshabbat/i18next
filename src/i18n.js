import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "hello,welcome",
          description: {
            line1: "this is line 1 language of english {{example}}",
            line2: "this is line 2 language of english",
          },
        },
      },
      he: {
        translation: {
          greeting: "שלום,ברוכים הבאים",
          description: {
            line1: "זה שורה 1 של השפה העברית",
            line2: "{{example}} זה שורה 2 של השפה העברית",
          },
        },
      },
    },
  });
