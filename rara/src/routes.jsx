import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from './components/errorpage/errorpage';
import Homepage from './components/homepage/homepage';
import FavoritesPage from './components/favorites_page/favorites_page';
import CreatePage from './components/createpage/createpage';
import ViewPage from './components/viewpage/viewpage';
import TrashPage from './components/trashpage/trashpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      }, {
        path: "/create",
        element: <CreatePage />,
      }, {
        path: "/favorites",
        element: <FavoritesPage />,
      }, {
        path: "/view",
        element: <ViewPage />,
        children: [
          {
            path: "/view/:id",
            element: <ViewPage />,
          }
        ]
      }, {
        path: "/trash",
        element: <TrashPage />,
      }
    ]
  }
]);

export default router;