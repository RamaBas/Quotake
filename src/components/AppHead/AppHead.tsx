import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AppHead: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box 
      component="header"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: 3,
        px: { xs: 2, md: 4 },
        boxShadow: 1,
      }}
    >
      <Typography 
        variant="h4" 
        component="h1"
        sx={{ 
          fontWeight: 500,
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        {t('appTitle')}
      </Typography>
    </Box>
  );
};

export default AppHead;