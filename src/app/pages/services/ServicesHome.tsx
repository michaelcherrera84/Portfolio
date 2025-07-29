import Banner from '../../components/services/Banner';
import Description from '../../components/services/tutoring/Description';
import Contact from '../../components/services/tutoring/Contact';
import { useEffect } from 'react';

function ServicesHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Banner />
            <Description />
            <Contact />
        </div>
    );
}

export default ServicesHome;