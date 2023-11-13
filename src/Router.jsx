import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import App from './App';
import Home from './components/Main/Home/Home';
import Shop from './components/Main/Shop/Shop';
import Login from './components/Main/Login/Login';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'shop/*',
          element: (
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          ),
        },
        {
          path: 'shop/:page',
          element: <Shop />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'login/:previousPage',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
