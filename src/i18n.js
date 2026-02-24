import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // Always start with EN to match server-rendered HTML
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Persist language choice whenever it changes
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('psai-lang', lng);
  }
});

export default i18n;

