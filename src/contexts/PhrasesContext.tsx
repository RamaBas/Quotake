import React, { createContext, useState, useCallback, useContext } from 'react';
import type { Phrase, PhrasesContextType } from '../types/phrases';

const PhrasesContext = createContext<PhrasesContextType | undefined>(undefined);

export const PhrasesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const addPhrase = useCallback((text: string) => {
    setPhrases(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
      }
    ]);
  }, []);

  const deletePhrase = useCallback((id: string) => {
    setPhrases(prev => prev.filter(phrase => phrase.id !== id));
  }, []);

  const searchPhrases = useCallback((text: string) => {
    return text 
      ? phrases.filter(phrase => 
          phrase.text.toLowerCase().includes(text.toLowerCase())
        )
      : phrases;
  }, [phrases]);

  return (
    <PhrasesContext.Provider 
      value={{ phrases, addPhrase, deletePhrase, searchPhrases }}
    >
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrases = (): PhrasesContextType => {
  const context = useContext(PhrasesContext);
  if (!context) {
    throw new Error('error en usePhrases');
  }
  return context;
};