
import '../Styles/nav.css';
import pic from '../assets/header.jpg';
import linked from '../assets/linkedin.png';
import git from '../assets/git.png';
import {useState, useEffect} from 'react';


function Navbar () {
    const [navClass, setClass] = useState('')
    const [burger, setBurger] = useState(false)
    function mount () {
        window.onscroll = () => {
            if (window.scrollY !== 0) {
                setClass('scrolled')
            }

            else {
                setClass('')
            }
        }
    }
    
    useEffect(() => {
        mount ()
<<<<<<< HEAD
        return function unMount () {
            window.onscroll = null
        }
=======
       
>>>>>>> 59182516c412146f773d8d94479d3506086bac9a
    }, [])
    return (
        <div className = 'navbar' id = {navClass}>
            <a href = '/' className = 'logo'>
                <img  
                src = {pic} 
                alt = 'logo' 
                ></img>
            </a>
            <nav>
                <ul className = 'navLinks'>
                    <li><a className = 'link' href = '/'>Home</a></li>
                    <li><a className = 'link' href = '/resume'>Resume</a></li>
                    <li><a href = '/projects' className = 'link'>Projects</a></li>
                    <li><a 
                        href = 'https://linkedin.com/in/alexander-f-kita'
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <img 
                        className = 'icon' 
                        id = 'linked' 
                        src = {linked} 
                        alt = 'logo'
                        ></img>
                        </a>
                    </li>
                    <li>
                        <a 
                        href = 'https://github.com/Axkita01'
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <img  
                            className='icon'
                            id = 'git' 
                            src = {git} 
                            alt = 'logo'
                            ></img>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className = 'mobile-menu'>
                <button 
                className = {!burger ? 'burger-toggle': 'hidden'}
                onClick = {() => setBurger(!burger)}>
                    <ul className='lines'>
                        <div className = 'line' style = {{marginTop:0}} id= 'line1'/>
                        <div className = 'line' id = 'line2'/>
                        <div className = 'line' id = 'line3'/>  
                    </ul>  
                </button>
                <button 
                className = {burger ? 'burger-toggle': 'hidden'}
                onClick = {() => {setBurger(!burger)}}>
                <b style = {{color: 'white'}}>&#10005;</b>
                </button>
            </div>
            <div className={burger ? 'uncollapse': 'hidden'}>
                <ul className='drop-links'>
                    <li id = 'b1'><a  className = 'link' href = '/'>Home</a></li>
                    <li id = 'b2'><a  className = 'link' href = '/resume'>Resume</a></li>
                    <li id = 'b3'><a  className = 'link' href = '/projects'>Projects</a></li>
                </ul>
            </div>

        </div>

    );
}

export default Navbar; 