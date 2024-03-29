import React from 'react'
import BottomSquares from '../Components/BottomDesign';
import Carosel from '../Components/Carosel'
import '../Styles/Home.css'

function Home() {
    return (
        <div className = 'page' style = {{paddingTop: 60}}>
            <div className = 'home-container'>
            <div className = 'partition' style = {{marginTop: '2%'}}>
                <h1>
                    Objective and Information
                </h1>
                <p className = 'paragraph'>
                    My name is Alexander Kita. I am a third year Computer Engineering
                    major at The University of Texas at Austin. I am currently seeking
                    software engineering internship opportunities in order to sharpen my current skills
                    and gain experience essential to my future career. I have knowledge of Python, Javascript, 
                    React.js, html, and CSS from coursework and personal projects.
                </p>
                <div className = 'gallery'>
                    <Carosel/>
                </div>
            </div>

            </div>
            <BottomSquares/>
            <div className = 'partition' id = 'second-part'>
                <h1>
                    Languages/Frameworks
                </h1>
                    <ul id = 'experience'>
                        <li>
                            <img  
                            alt = 'python logo'
                            src = {require('../assets/python-logo.png')}
                            />
                            <h2>Python</h2>
                        </li>

                        <li>
                            <img 
                            alt = 'JS logo'
                            src = {require('../assets/JavaScript-Logo.png')}
                            />
                            <h2>JavaScript</h2>
                        </li>

                        <li>
                            <img 
                            src = {require('../assets/html-logo.png')}
                            alt = 'HTML logo'
                            />
                            <h2>HTML/CSS</h2>
                        </li>
                    </ul>
                    <ul id = 'experience' className = 'secondExp'>
                    <li>
                        <img 
                            src = {require('../assets/flask-logo.png')}
                            alt = 'flask logo'
                            />
                            <h2>Flask</h2>
                        </li>

                        <li>
                            <img 
                            src = {require('../assets/logo-react-icon.png')}
                            alt = 'reactjs logo'
                            />
                            <h2>ReactJS</h2></li>
                    </ul>
            </div>
        </div>
    );
}

export default Home;
