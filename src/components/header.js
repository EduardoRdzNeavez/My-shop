import { react, useRef, useState } from 'react';
import { boxIcon } from '../static'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
    const headerIcon = boxIcon;
    const button = 'search'
    const [name, setname] = useState('');

    const showName = () => {
        if (name !== '') {
            console.log("hi " + name + "!")
        } else { 
            window.alert('insert your name')
        }
    }

    const handleChange = (event) => {
        setname(event.target.value);
    }
    return (
        <>
            <header className="header">
            {headerIcon}
                <nav className="header__nav">
                    <h2>Resume</h2>
                    <input onChange={handleChange} value={name} type="text"></input>
                    <button onClick={showName} type="submmit">{button}</button>
                </nav>
            </header>
        </>
    );
}

export default Header;