import { Outlet, useLocation } from 'react-router';
import HomePage from '../pages/HomePage';
import NavBar from '../components/NavBar';
import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
    const location = useLocation();

    return (
        <>
            <Toaster position="bottom-right" />
            {location.pathname === '/' ? <HomePage /> : (
                <>
                    <NavBar />
                    <Outlet />
                </>
            )}
        </>
    );
}

export default App;
