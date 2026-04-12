import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { IndexPage } from '@/pages/index-page'

const router = createBrowserRouter([
  {
    path: '/',
    Component: IndexPage,
  },
  // Add more routes here, for example:
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  //   loader: aboutLoader,
  // },
  // {
  //   path: '/users/:id',
  //   element: <UserPage />,
  //   loader: userLoader,
  //   action: userAction,
  // },
]);

function RoutesProvider(): ReactElement {
  return <RouterProvider router={router} />;
}

export { RoutesProvider };
