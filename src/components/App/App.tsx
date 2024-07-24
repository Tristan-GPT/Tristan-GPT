import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Unique from '../../pages/Unique/Unique';
import NotFound from '../../pages/404/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Unique/>
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
