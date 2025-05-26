import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePhrases } from '../../contexts/PhrasesContext';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import SearchBar from '../../components/SearchBar/SearchBar';
import PhrasesGridWrapper from '../../components/PhrasesGridWrapper/PhrasesGridWrapper';

const PhrasesGridPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const { phrases, deletePhrase, searchPhrases } = usePhrases();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [phraseToDelete, setPhraseToDelete] = useState<string | null>(null);

  const filteredPhrases = searchPhrases(searchTerm);

  const handleDeleteClick = (id: string) => {
    setPhraseToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (phraseToDelete) {
      deletePhrase(phraseToDelete);
    }
    setDeleteModalOpen(false);
    setPhraseToDelete(null);
  };

  return (
    <>
    {phrases.length > 0 && (
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    )}
      <PhrasesGridWrapper
        phrases={filteredPhrases}
        onDelete={handleDeleteClick}
        emptyMessage={searchTerm ? t('noPhrasesFound') : t('phrasesIsEmpty')}
      />

      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default PhrasesGridPage;