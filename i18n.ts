import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import the translations for all supported languages
import en from './locales/en.json';
import de from './locales/de.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import ml from './locales/ml.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
  ar: { translation: ar },
  es: { translation: es },
  ml: { translation: ml },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'ml', // Set the default language
  fallbackLng: 'en', // If a translation is missing, use English as a fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
