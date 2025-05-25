import React from 'react';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange,
}) => {
  const { t } = useTranslation();

  return (
    <Box 
      sx={{ 
        mb: 3, 
        display: 'flex', 
        gap: 2,
        alignItems: 'center'
      }}
    >
      <TextField
        label={t('searchPlaceholder')}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
        variant="outlined"
        size="small"
        sx={{ 
          backgroundColor: '#fff', 
          borderRadius: 1, 
          boxShadow: 1,
          flexGrow: 1
        }}
      />
    </Box>
  );
};

export default SearchBar;