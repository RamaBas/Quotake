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
        searchPlaceholder: 'Buscar frases',
        noPhrases: 'No hay frases aún. ¡Agrega una!',
        addPhrase: 'Agregar frase',
        phrasePlaceholder: 'Escribe tu frase aquí...',
        saveButton: 'Guardar',
        cancelButton: 'Cancelar',
        deleteConfirmation: '¿Estás seguro de que deseas eliminar esta frase?',
        confirmButton: 'Sí',
        denyButton: 'No',
        emptyPhraseError: 'Por favor ingresa una frase antes de guardar',
        noPhrasesFound: 'Parece que no hay frases. ¡Agrega una nueva!',
      },
    },
    en: {
      translation: {
        appTitle: 'Quotake!',
        searchPlaceholder: 'Search quotes',
        noPhrases: 'Its empty... Add a quote!',
        addPhrase: 'Add quote',
        phrasePlaceholder: 'Write your quote here...',
        saveButton: 'Save',
        cancelButton: 'Cancel',
        deleteConfirmation: 'Are you sure you want to delete this quote?',
        confirmButton: 'Yes',
        denyButton: 'No',
        emptyPhraseError: 'Please enter a quote before saving',
        noPhrasesFound: 'It seems there are no quotes. Add a new one!',
      },
    },
  },
});

export default i18n;