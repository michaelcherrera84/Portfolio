import { Outlet, useLocation } from 'react-router';
import HomePage from '../pages/HomePage';
import NavBar from '../components/NavBar';
import './App.css'

function App() {
    const location = useLocation();

    return (
        <>
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
