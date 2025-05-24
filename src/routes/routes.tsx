import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const PhrasesGridPage = lazy(() => import('../pages/PhraseGridPage/PhraseGridPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PhrasesGridPage />} />
    </Routes>
  );
};

export default AppRoutes;