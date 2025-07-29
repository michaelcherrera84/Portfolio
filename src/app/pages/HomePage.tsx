import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Projects from '../components/home/projects/Projects';
import Contact from '../components/home/contact/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/home/Footer';
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