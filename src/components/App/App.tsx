import './App.scss';
import { Home } from '../../pages/Home/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound.tsx';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';

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
            <Header />
            <main className="app-content">
                <RouterProvider router={router}></RouterProvider>
            </main>
            <Footer />
        </>
    );
}

export default App;
