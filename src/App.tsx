import { CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import i18n from './i18n/i18n';
import AppRoutes from './routes/routes';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;