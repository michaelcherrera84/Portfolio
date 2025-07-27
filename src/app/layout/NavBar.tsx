import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

type Props = {
    to: string;
    className?: string;
}

function Link({ to, className }: Props) {
    return (
        <a href={'#' + to}>
            <div className={className}>{to[0].toUpperCase() + to.substring(1)}</div>
        </a>
    );
}

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

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
                                <li className="w-full"><Link to="home" className="small-screen-link" /></li>
                                <li className="w-full"><Link to="about" className="small-screen-link" /></li>
                                <li className="w-full"><Link to="projects" className="small-screen-link" /></li>
                                <li className="w-full"><Link to="contact" className="small-screen-link" /></li>
                                <li className="w-full"><Link to="services" className="small-screen-link" /></li>
                            </ul>
                        </div>
                    )
                    }
                </button>
            </div>

            <ul className="hidden md:flex md:gap-6 md:pr-6">
                <li><Link to="home" /></li>
                <li><Link to="about" /></li>
                <li><Link to="projects" /></li>
                <li><Link to="contact" /></li>
                <li><Link to="services" /></li>
            </ul>
        </nav>
    );
}

export default NavBar;
