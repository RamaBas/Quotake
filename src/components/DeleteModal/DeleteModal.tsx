import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ 
  open, 
  onClose, 
  onConfirm 
}) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={onClose} width={350} data-testid="delete-modal">
      <Stack spacing={3}>
        <Typography variant="h6" textAlign="center">
          {t('deleteConfirmation')}
        </Typography>
        
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button 
            variant="outlined" 
            onClick={onClose}
            sx={{ flex: 1 }}
          >
            {t('denyButton')}
          </Button>
          <Button 
            variant="contained" 
            color="error"
            onClick={onConfirm}
            sx={{ flex: 1 }}
          >
            {t('confirmButton')}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default DeleteModal;