import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/404/NotFound';
import About from '../../pages/About/About';
import Sponsors from '../../pages/Sponsors/Sponsors';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/sponsors",
    element: <Sponsors/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App;
