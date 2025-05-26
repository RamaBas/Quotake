import { Menu, IconButton, MenuItem } from '@mui/material';
import { useLanguage } from '../../hooks/useLanguage';
import { useState } from 'react';
import { Language } from '@mui/icons-material';

export const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} color="inherit">
        {currentLanguage && <Language data-testid="LanguageIcon" />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => { changeLanguage('es'); handleCloseMenu(); }} data-testid="option-es">
          Español
        </MenuItem>
        <MenuItem onClick={() => { changeLanguage('en'); handleCloseMenu(); }} data-testid="option-en">
          English
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;