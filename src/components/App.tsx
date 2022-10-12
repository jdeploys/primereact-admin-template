import '@/styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import '@/shared/installer';
import SpinnerLoader from '@/components/loader/SpinnerLoader';
import { Suspense } from 'react';

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <RouterProvider router={router} fallbackElement={<SpinnerLoader />} />
    </Suspense>
  );
};

export default App;
