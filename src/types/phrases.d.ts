export interface Phrase {
    id: string;
    text: string;
  }
  
  export interface PhrasesContextType {
    phrases: Phrase[];
    addPhrase: (text: string) => void;
    deletePhrase: (id: string) => void;
    searchPhrases: (text: string) => Phrase[];
  }