import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhraseCard from '../../components/PhraseCard/PhraseCard';
import { usePhrases } from '../../contexts/PhrasesContext';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

const PhrasesGridPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const { deletePhrase, searchPhrases } = usePhrases();
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
      <Box sx={{ mb: 3 }}>
        <TextField
          label={t('searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          sx={{ backgroundColor: '#fff', borderRadius: 1, boxShadow: 1 }}
        />
      </Box>
      
      <Grid container spacing={2}>
        {filteredPhrases.map((phrase) => (
          // @ts-ignore
          <Grid item xs={12} sm={6} md={4} lg={3} key={phrase.id}>
            <PhraseCard
              phrase={phrase}
              onDelete={handleDeleteClick}
            />
          </Grid>
        ))}
      </Grid>

      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default PhrasesGridPage;