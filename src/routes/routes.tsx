import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from '../components/Wrapper/Wrapper';

const PhrasesGridPage = lazy(() => import('../pages/PhraseGridPage/PhraseGridPage'));

const AppRoutes = () => {
  return (
  <Suspense fallback={<div><h1>Q!.</h1></div>}>
      <Routes>
        <Route path="/" element={<Wrapper><PhrasesGridPage /></Wrapper>} />
      </Routes>
 </Suspense>
  );
};

export default AppRoutes;