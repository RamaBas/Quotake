import React from 'react';
import { Box } from '@mui/material';
import AppHead from '../AppHead/AppHead';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'Column',
      width: '100%',
      backgroundColor: (theme) => theme.palette.background.default
    }}>
      <AppHead />
      
      <Box component="main" sx={{
        flexGrow: 1,
        p: { xs: 2, md: 3 },
        width: '100%'
      }}>
        {children}
      </Box>
    </Box>
  );
};

export default AppWrapper;