import { LayoutWrapper } from '@components';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { State, Items, Usage, ItemDetail } from 'views';

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: '/',
        element: <Navigate to="/state" replace />,
      },
      {
        path: '/usage',
        element: <Usage />,
      },
      {
        path: '/state',
        element: <State />,
      },
      {
        path: '/items',
        element: <Items />,
      },
      {
        path: '/items/:id',
        element: <ItemDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
