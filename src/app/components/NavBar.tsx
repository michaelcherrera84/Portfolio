import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollNav = (id: string) => {
        if (location.pathname === '/') {
            scrollToSection(id);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(id), 100);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} flex md:justify-end
        items-center sticky top-0 z-50 min-h-[50px] text-[#ce4233] font-black transition-colors duration-300`}
        >
            <div className={`${menuOpen ? 'bg-[#ce4233]' : 'bg-transparent'} md:hidden fixed top-0 flex justify-center 
            min-h-[50px] w-full rounded-b-sm`}
            >
                <button onClick={toggleMenu}>
                    <Menu size={24} className={`fixed top-2.5 left-2.5 ${menuOpen && 'text-white'}`} />
                    {menuOpen && (
                        <div className="mt-10">
                            <ul className="flex items-center justify-center flex-col w-screen p-1">
                                <button onClick={() => handleScrollNav('home')} className="small-screen-link">
                                    <li>Home</li>
                                </button>
                                <button onClick={() => handleScrollNav('about')} className="small-screen-link">
                                    <li>About</li>
                                </button>
                                <button onClick={() => handleScrollNav('projects')} className="small-screen-link">
                                    <li>Projects</li>
                                </button>
                                <button onClick={() => handleScrollNav('contact')} className="small-screen-link">
                                    <li>Contact</li>
                                </button>
                                <Link to="/services" className="small-screen-link">
                                    <li>Services</li>
                                </Link>
                            </ul>
                        </div>
                    )
                    }
                </button>
            </div>

            <ul className="hidden md:flex md:gap-6 md:pr-6">
                <button onClick={() => handleScrollNav('home')} className="cursor-pointer">
                    <li>Home</li>
                </button>
                <button onClick={() => handleScrollNav('about')} className="cursor-pointer">
                    <li>About</li>
                </button>
                <button onClick={() => handleScrollNav('projects')} className="cursor-pointer">
                    <li>Projects</li>
                </button>
                <button onClick={() => handleScrollNav('contact')} className="cursor-pointer">
                    <li>Contact</li>
                </button>
                <Link to="/services">
                    <li>Services</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
