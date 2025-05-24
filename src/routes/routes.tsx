import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const PhrasesGridPage = lazy(() => import('../pages/PhraseGridPage/PhraseGridPage'));
const Wrapper = lazy(() => import('../components/Wrapper/Wrapper'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper children={<PhrasesGridPage />} />} />
    </Routes>
  );
};

export default AppRoutes;