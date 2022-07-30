import Images from '../Components/Carosel.js'
import '../Styles/Home.css'
import {useEffect} from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import BottomSquares from '../Components/BottomDesign';

function Home() {
    /*useEffect(() => {setInterval(autoScroll(), 3000)}, [])*/
    return (
        <div className = 'page' style = {{paddingTop: 60}}>
            <div className = 'home-container'>
            <div className = 'partition' style = {{marginTop: '2%'}}>
                <h1>
                    Objective and Information
                </h1>
                <p className = 'paragraph'>
                    My name is Alexander Kita. I am a second year Computer Engineering
                    major at The University of Texas at Austin. I am currently seeking
                    software engineering internship opportunities in order to sharpen my current skills
                    and gain experience essential to my future career. I have knowledge of Python, Javascript, 
                    React.js, html, and CSS from coursework and personal projects.
                </p>
                    {/*Accounting for Mobile*/}
                    {!(/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 
                    <div style = {{height: '40vh', width: '40vh'}}>
                    <Images 
                    className = 'gallery'
                    img1 = {pic1}
                    img2 = {pic2}
                    img3 = {pic3}
                    />
                    </div>: 
                    <div 
                    style = {{
                        width: '40vh', 
                        borderStyle: 'solid', 
                        height: '40vh',
                        }}>
                        <img src = {pic4} style = {{height: '100%', width: 'auto'}} alt = 'home picture'/>
                    </div>}
                
            </div>
            </div>
            <BottomSquares/>
            <div className = 'partition' id = 'second-part'>
                <h1>
                    Languages/Frameworks
                </h1>
                    <ul id = 'experience'>
                        <li style = {{marginTop: "10%"}}>
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