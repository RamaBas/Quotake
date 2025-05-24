import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'en', // Esperemos que no sea necesario jeje
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: {
        appTitle: 'Quotake!',
        searchPlaceholder: 'Buscar frases...',
        noPhrases: 'No hay frases aún. ¡Agrega una!',
      },
    },
    en: {
      translation: {
        appTitle: 'Quotake!',
        searchPlaceholder: 'Search phrase...',
        noPhrases: 'Its empty... Add a Phrase!',
      },
    },
  },
});

export default i18n;