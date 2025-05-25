import React from 'react';
import { Card, CardContent, IconButton, Typography, Box } from '@mui/material';
import { Close, FormatQuote, Undo } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface PhraseCardProps {
  phrase: {
    id: string;
    text: string;
  };
  onDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  variant?: 'default' | 'deleted';
}

const PhraseCard: React.FC<PhraseCardProps> = ({ 
  phrase, 
  onDelete,
  onRestore,
  variant = 'default',
}) => {
  const { t } = useTranslation(); // Agregar AriaLabels

  return (
    <Card sx={{ 
      position: 'relative',
      border: variant === 'deleted' ? '1px dashed #ccc' : 'none',
      opacity: variant === 'deleted' ? 0.6 : 1,
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
      {/* Eliminar frase */}
      {variant === 'default' && onDelete && (
      <IconButton
        aria-label="Eliminar frase"
        onClick={() => onDelete(phrase.id)}
        sx={{
          position: 'absolute',
          top: 2,
          right: 2,
          zIndex: 2,
          '&:hover': {
            color: 'error.main',
            backgroundColor: 'rgba(220, 0, 78, 0.1)',
          },
        }}
      >
        <Close fontSize="small" />
      </IconButton>
      )}
      {/* Restaurar frase */}
      {variant === 'deleted' && onRestore && (
            <IconButton
            aria-label="Restaurar frase"
            onClick={() => onRestore(phrase.id)}
            size="small"
            color="primary"
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              zIndex: 2,
            }}
          >
            <Undo fontSize="small" />
          </IconButton>
        )}
    </Card>
  );
};

export default PhraseCard;