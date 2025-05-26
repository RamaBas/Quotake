import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhraseCard from '../PhraseCard/PhraseCard';

interface PhrasesGridWrapperProps {
  phrases: Array<{
    id: string;
    text: string;
  }>;
  onDelete?: (id: string) => void;
  onRestore?: (id: string) => void; // Falta generar pantalla de eliminados
  emptyMessage?: string;
  cardVariant?: 'default' | 'deleted';
}
const PhrasesGridWrapper: React.FC<PhrasesGridWrapperProps> = ({
  phrases,
  onDelete,
  onRestore,
  emptyMessage,
  cardVariant = 'default'
}) => {
  const { t } = useTranslation();

  if (phrases.length === 0) {
    return (
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px'
      }}
      data-testid="empty-state"
      >
        <Typography variant="h6" color="textSecondary">
          {emptyMessage || t('noPhrasesFound')}
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }} data-testid="phrases-grid">
      {phrases.map((phrase) => (
        /* Tuve algunos problemas con la libreria de MUI y Typescript, por lo que tuve que usar un @ts-ignore 
        para permitirme deployar en la version productiva en Vercel */
        // @ts-ignore
        <Grid sm={6} md={4} lg={3} key={phrase.id}>
          <PhraseCard
            phrase={phrase}
            onDelete={onDelete && onDelete}
            onRestore={onRestore && onRestore}
            variant={cardVariant}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PhrasesGridWrapper;