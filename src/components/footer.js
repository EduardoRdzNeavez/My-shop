import { render } from '@testing-library/react';
import react from 'react';
import './index.css';
import { buildingIcon } from '../static';

function Footer(){

    const FaIcon = buildingIcon;    
    return(
        <>
        <footer className="footer">
            {FaIcon}
            
            <nav className="footer__nav">
                <a href="/#">Home</a>
                <a href="/#">Contact Us</a>
                <a href="/#">FAQS</a>
            </nav>
            <label className='footer__label'>Copyright © 2022</label>
        </footer>
        </>
    );   
}

export default Footer;