import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';

const PhrasesGridPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box p={4}>
      <Box mb={4}>
        {t('addPhrase')}
      </Box>
      
      <Box mb={4}>
        Buscar Frase
      </Box>

        <Grid container spacing={3}>
          {/* {filteredPhrases.map((phrase) => ( */}
            <Grid item xs={12} sm={6} md={4}>
              {/* <PhraseCard phrase={phrase} onDelete={deletePhrase} /> */}
            </Grid>
        </Grid>
    </Box>
  );
};

export default PhrasesGridPage;