import React from 'react';
import { Card, CardContent, IconButton, Typography, Box } from '@mui/material';
import { Close, FormatQuote } from '@mui/icons-material';

interface PhraseCardProps {
  phrase: {
    id: string;
    text: string;
  };
  onDelete: (id: string) => void;
  backgroundColor: string;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, onDelete, backgroundColor }) => {
  return (
    <Card sx={{ 
      backgroundColor,
      position: 'relative',
      minHeight: 100,
      maxHeight: "auto",
      '&:hover': {
        boxShadow: 3,
      },
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 2,
          left: 2,
          zIndex: 0,
          opacity: 0.2,
        }}
      >
        <FormatQuote 
          sx={{ 
            fontSize: '3rem',
            color: backgroundColor === '#EDF7FA' ? 'text.primary' : '#EDF7FA',
          }} 
        />
      </Box>
      <CardContent sx={{ 
        position: 'relative', 
        zIndex: 1,
        flexGrow: 1,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            padding: 2,
            wordBreak: 'break-word',
            flexGrow: 1,
          }}
        >
          {phrase.text}
        </Typography>
      </CardContent>

      <IconButton
        aria-label="Eliminar frase"
        onClick={() => onDelete(phrase.id)}
        sx={{
          position: 'absolute',
          top: 2,
          right: 2,
          zIndex: 2, // Encima de todo
          '&:hover': {
            color: 'error.main',
            backgroundColor: 'rgba(220, 0, 78, 0.1)',
          },
        }}
      >
        <Close fontSize="small" />
      </IconButton>
    </Card>
  );
};

export default PhraseCard;