
import '../Styles/nav.css';
import pic from './header.jpg';
import linked from './linkedin.png';
import git from './git.png';
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
    console.log(burger)
    /*implement on unmount*/
    function unmount () {
        window.onscroll = null;
    }
    
    useEffect(() => {
        mount ()
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
                    <li><a className = 'link' href = '/about'>About</a></li>
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
                        <div className = 'line'/>
                        <div className = 'line'/>
                        <div className = 'line'/>  
                    </ul>  
                </button>
                <button 
                className = {burger ? 'burger-toggle': 'hidden'}
                onClick = {() => setBurger(!burger)}>
                </button>
            </div>
            <div className={burger ? 'uncollapse': 'hidden'}>
                <ul className='drop-links'>
                    <li><a  className = 'link' href = '#'>Home</a></li>
                    <li><a  className = 'link' href = '#'>Resume</a></li>
                    <li><a  className = 'link' href = '#'>Projects</a></li>
                    <li><a  className = 'link' href = '#'>About</a></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar; 