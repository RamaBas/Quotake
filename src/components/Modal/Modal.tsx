import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string | number;
}

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, children, width = 400 }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="modal-content"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          outline: 'none'
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default BaseModal;