import React, { createContext, useState, useCallback, useContext } from 'react';
import type { Phrase, PhrasesContextType } from '../types/phrases';

const PhrasesContext = createContext<PhrasesContextType | undefined>(undefined);

export const PhrasesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  // Falta desarrollar addPhrase para dejr de mockear esto
  const [phrases, setPhrases] = useState<Phrase[]>([
    { id: '1', text: 'Aquel que a buen árbol se arrima, buena sombra recibe' },
    { id: '2', text: 'La vida es lo que pasa mientras estás ocupado haciendo Challanges.' },
    { id: '3', text: 'La simplicidad es la máxima sofisticación.' },
    { id: '4', text: 'El único modo de hacer un gran trabajo es amar lo que haces.' },
  ]);

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