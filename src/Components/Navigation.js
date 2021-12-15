import Logo from '../logo.png';
import React, {useState} from 'react';

const Navigation = () => {
    // Set hover state on hover to allow animation class to be added
    const[navHover , setNavHover] = useState(null);
    // const[mobileDropDown , setMobileDropDown] = useState(false);
    const[hamburgerIcon , setHamburgerIcon] = useState(true);
    
    // const hamburgerIcon = (e) => {setMobileDropDown(!mobileDropDown)}

    // list of nav items
    let navArray = ['Services' , 'Work' , 'About' , 'Blog' , 'Contact'];

    return(
        <div className="navigation-container">
            <div className="logo-container">
                <img src={Logo} /> 
            </div> 
            <ul className="nav-items">
                {
                    navArray.map((item,index) => (<li onMouseOver={(e) => {setNavHover(index)}} onMouseLeave={(e) => {setNavHover(null)}}> <a href="#" > {item} <span className={index === navHover ? ('nav-hover') : ('')}></span> </a> </li>))
                }
            </ul>
            <div className="hamburger-icon" onClick={(e) => { setHamburgerIcon(false)}}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={hamburgerIcon ? ('display-none') : ('close-icon')} onClick={(e) => {setHamburgerIcon(true)}}>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={hamburgerIcon === false ? ('nav-items-mobile') : ('display-none')}>
                {
                    navArray.map((item,index) => (<li onMouseOver={(e) => {setNavHover(index)}} onMouseLeave={(e) => {setNavHover(null)}}> <a href="#" > {item} <span className={index === navHover ? ('nav-hover') : ('')}></span> </a> </li>))
                }
            </ul>
        </div> 
    );
}

export default Navigation