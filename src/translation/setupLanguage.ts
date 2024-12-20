import language from '@/browser/localStorage/language';
import { EAcceptLanguage } from '@/constants/language';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: language.get() || EAcceptLanguage['vi-VN'],
    fallbackLng: language.get() || EAcceptLanguage['vi-VN'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
    cache: {
      enabled: true,
    },
  });
console.log('i18n initialized');
export default i18n;
