import { createBrowserRouter } from 'react-router';
import App from '../layout/App';
import HomePage from '../pages/HomePage';
import ServicesHome from '../pages/services/ServicesHome';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/services', element: <ServicesHome /> },
        ],
    },
]);

export default router;