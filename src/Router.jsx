import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Main/Home/Home';
import Shop from './components/Main/Shop/Shop';

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
          path: 'shop',
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}