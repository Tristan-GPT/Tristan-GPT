import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Unique from '../../pages/Unique/Unique';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Unique/>
  }
]);

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App;
