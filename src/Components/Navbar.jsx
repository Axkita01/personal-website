import React, { useReducer } from 'react';
import '../Styles/nav.css';
import pic from './logo.jpg';
import linked from './linkedin.png';
import git from './git.png';
import {useState} from 'react';

function Burger () {
    const [burgerC, burgerClick] = useState(false);
    switch(burgerC) {
        
        case (true):
            return (
            <div>
                <label onClick = {() => burgerClick(false)} className = 'b' id = 'x'>   
                    &#xd7;
                </label>
                <nav className = 'bc'>
                    <ul id = 'clicked'>
                        <li id = 'first-bl'><a className = 'link' id = 'bl' href = '/'>Home</a></li>
                        <li id = 'bl2'><a className = 'link' id = 'bl' href = '/resume'>Resume</a></li>
                        <li id = 'bl3'><a href = '/projects' className = 'link' id = 'bl'>Projects</a></li>
                        <li id = 'last-bl'><a id = 'bl'className = 'link' href = '/about'>About</a></li>
                    </ul>
                 </nav>
            </div>
            );

            case (false):
                return ( 
                    <label 
                    onClick = {() => burgerClick(true)} 
                    className = 'b' id = 'burger-start'
                    > 
                        <ul id = 'default'>
                            <li className = 'line'></li>
                            <li className = 'line'></li>
                            <li className = 'line'></li>
                        </ul>
                    </label>
                );
    }           
}

function Navbar () {
    return (
        <div className = 'navbar'>
            <a href = '/'>
                <img 
                className = 'logo' 
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
                </ul>
            </nav>
            <a href = 'https://linkedin.com/in/alexander-f-kita'
            target="_blank" 
            rel="noopener noreferrer"
            >
                <img 
                className = 'logo' 
                id = 'linked' 
                src = {linked} 
                alt = 'logo'
                ></img>
            </a>
            <a href = 'https://github.com/Axkita01'
            target="_blank" 
            rel="noopener noreferrer"
            >
                <img 
                className = 'logo' 
                id = 'git' 
                src = {git} 
                alt = 'logo'
                ></img>
            </a>
            <Burger/>
        </div>
    );
}

export default Navbar; 