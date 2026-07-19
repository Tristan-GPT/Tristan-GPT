import './App.scss';
import { Home } from '../../pages/Home/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound.tsx';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';
import { Contact } from '../../pages/Contact/Contact.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/projects',
        element: '',
    },
    {
        path: '/sponsors',
        element: '',
    },
    {
        path: '/partners',
        element: '',
    },
    {
        path: '/about',
        element: '',
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]);

function App() {
    return (
        <>
            <Header />
            <main className="app-content">
                <RouterProvider router={router}></RouterProvider>
            </main>
            <Footer />
        </>
    );
}

export default App;
