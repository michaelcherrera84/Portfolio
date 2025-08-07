import { createHashRouter } from 'react-router';
import App from '../layout/App';
import HomePage from '../pages/HomePage';
import ServicesHome from '../pages/services/ServicesHome';


const router = createHashRouter([
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