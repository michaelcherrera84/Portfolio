import Banner from './Banner';
import NavBar from './NavBar';
import About from './About';
import Projects from './projects/Projects';
import Contact from './Contact';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster position="top-right" />
            <NavBar />
            <Banner />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
