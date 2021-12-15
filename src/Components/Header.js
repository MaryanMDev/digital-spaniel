import Navigation from './Navigation'
import Content from './Content';
import Spaniel from '../spaniel.png'
import React, { useState, useEffect} from 'react';

const Header = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    let heading = {
        dark: 'We Unleash',
        light: 'business potential',
        short_intro: 'We create brand experiences which are memorable and distinct. Our experienced team create and develop brand with personality and resonance'
    }

    return(
        <div className="header-container">
            <nav className={scroll ? ('scrolling') : ('')}>
                <Navigation />
            </nav>
            <div className="main-container header-intro">
                <p className="tagline"> brand, dev, ecom, marketing</p>
                <Content heading={heading} />
            </div>
            <div className="header-image" style={{backgroundImage:`url(${Spaniel})`}}>
            </div>
        {/* <Navigation />
        <Textblock />  */}
        </div>
    );
}

export default Header