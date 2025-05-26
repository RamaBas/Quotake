// hooks/useLanguage.ts
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageCode = 'es' | 'en';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(i18n.language as LanguageCode);

  const changeLanguage = (lng: LanguageCode) => {
    i18n.changeLanguage(lng).then(() => {
      setCurrentLanguage(lng);
      localStorage.setItem('userLanguage', lng);
    });
  };

  return { currentLanguage, changeLanguage };
};