import { Outlet, useLocation } from 'react-router';
import HomePage from '../pages/HomePage';
import NavBar from '../components/NavBar';
import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' ? <HomePage /> : (
                <>
                    <Toaster position="bottom-right" />
                    <NavBar />
                    <Outlet />
                </>
            )}
        </>
    );
}

export default App;
