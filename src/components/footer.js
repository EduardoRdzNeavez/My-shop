import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import react from 'react';
import './index.css';

function Footer(){

    const FaIcon =  <FontAwesomeIcon icon={faBuilding} size="xl" inverse/>
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