import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhraseCard from '../../components/PhraseCard/PhraseCard';
import { usePhrases } from '../../contexts/PhrasesContext';

const PhrasesGridPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const { deletePhrase, searchPhrases } = usePhrases();

  const filteredPhrases = searchPhrases(searchTerm);

  const handleDelete = (id: string) => {{
      deletePhrase(id);
      // Agregar lógica para consultar si se desea eliminar ?? - Extra
    }
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={phrase.id}>
            {/* Pendiente desarrollar cambio de fondo ?? */}
            <PhraseCard
              phrase={phrase}
              onDelete={handleDelete}
              backgroundColor="#EDF7FA"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PhrasesGridPage;