import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/404/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: "About Me"
  },
  {
    path: "/sponsors",
    element: "Sponsors"
  },
  {
    path: "/projects",
    element: "Projects"
  },
  {
    path: "/contact",
    element: "Contact"
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App;
