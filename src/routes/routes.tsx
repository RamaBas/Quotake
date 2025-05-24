import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from '../components/Wrapper/Wrapper';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

const PhrasesGridPage = lazy(() => import('../pages/PhraseGridPage/PhraseGridPage'));

const AppRoutes = () => {
  return (
  <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Wrapper><PhrasesGridPage /></Wrapper>} />
      </Routes>
 </Suspense>
  );
};

export default AppRoutes;