import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';

//Imports pages dyna
const Detail = lazy(() => import('./pages/Detail'));
const Form = lazy(() => import('./pages/Form'));
const Legal = lazy(() => import('./pages/Legal'));
const Err404 = lazy(() => import('./pages/Err404'));

//Loader
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

//Scroll vers le top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="guide/:id" element={
            <Suspense fallback={<PageLoader />}>
              <Detail />
            </Suspense>
          } />
          
          <Route path="postuler" element={
            <Suspense fallback={<PageLoader />}>
              <Form />
            </Suspense>
          } />

          <Route path="mentions-legales" element={
            <Suspense fallback={<PageLoader />}>
              <Legal />
            </Suspense>
          } />
          
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <Err404 />
            </Suspense>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;