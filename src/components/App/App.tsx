import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/404/NotFound';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Music from '../../pages/Music/Music';

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
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/music",
    element: <Music />
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
