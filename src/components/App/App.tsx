import './App.scss';
import { Home } from '../../pages/Home/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
