import Banner from '../components/Banner';
import About from '../components/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function HomePage() {
    return (
        <>
            <Toaster position="bottom-right" />
            <NavBar />
            <Banner />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;