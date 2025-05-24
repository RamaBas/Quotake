import React, { useState } from 'react';
import { Fab, TextField, Button, Stack, Alert, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { usePhrases } from '../../contexts/PhrasesContext';
import Modal from '../Modal/Modal';

const AddPhraseButton: React.FC = () => {
  const { t } = useTranslation();
  const { addPhrase } = usePhrases();
  const [open, setOpen] = useState(false);
  const [newPhrase, setNewPhrase] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!newPhrase.trim()) {
      setError(t('emptyPhraseError'));
      return;
    }
    
    addPhrase(newPhrase);
    setNewPhrase('');
    setError('');
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
      >
        <Add />
      </Fab>

      <Modal open={open} onClose={() => {
        setOpen(false);
        setError('');
      }}>
        <Stack spacing={3}>
          <Typography variant="h6" id="modal-title">
            {t('addPhrase')}
          </Typography>
          
          <TextField
            autoFocus
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder={t('phrasePlaceholder')}
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
          />
          
          {error && <Alert severity="error">{error}</Alert>}
          
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button 
              variant="outlined" 
              onClick={() => setOpen(false)}
            >
              {t('cancelButton')}
            </Button>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
            >
              {t('saveButton')}
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default AddPhraseButton;