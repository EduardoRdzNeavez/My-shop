import { faHelicopterSymbol, faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import react, { useRef, useState } from 'react';
import './index.css';

function Header(){
    const [name, setname] = useState('');
   
    const showName = () => {
        if (name !== ''){
        console.log("hi " + name + "!")
        } else {
            window.alert('insert your name')
        }
    }

    const handleChange = (event) =>{
        setname(event.target.value);
    }
    return(
        <>
        <section>
        <div className="header">
            <input onChange={handleChange} value={name} type="text"></input>
            <button onClick={showName} type="submmit">Hola</button>
        </div>
        </section>
        </>
    );   
}

export default Header;