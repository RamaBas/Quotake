import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhraseCard from '../../components/PhraseCard/PhraseCard';

//Agregar al types luego
interface Phrase {
  id: string;
  text: string;
}

const PhrasesGridPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - Luego lo reemplazare por el context state
  const mockPhrases = [
    { id: '1', text: 'Aquel que a buen árbol se arrima, buena sombra recibe' },
    { id: '2', text: 'La vida es lo que pasa mientras estás ocupado haciendo Challanges.' },
    { id: '3', text: 'La simplicidad es la máxima sofisticación.'},
    { id: '4', text: 'El único modo de hacer un gran trabajo es amar lo que haces.' },
  ];

  const filteredPhrases = mockPhrases.filter(phrase =>
    phrase.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    console.log('Eliminar frase con id:', id);
    // Agregar lógica para consultar si se desea eliminar ?? - Extra
    // Agregar lógica para eliminar desde el context state
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
      {filteredPhrases.map((phrase: Phrase) => (
        // @ts-ignore
        <Grid xs={12} sm={6} md={4} lg={3} component="div">
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