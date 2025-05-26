import React from 'react';
import { Box, Typography } from '@mui/material';
import 'animate.css/animate.min.css';

const LoadingScreen: React.FC = () => {
  return (
    <Box
      data-testid="loading-screen"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        zIndex: 9999
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          fontSize: '10rem',
          fontWeight: 'bold'
        }}
        className="animate__animated animate__flip"
      >
        Q!
      </Typography>
    </Box>
  );
};

export default LoadingScreen;