import Navbar from '../Components/Navbar';
import '../Styles/Home.css'

function Home() {
    return (
        <div className = 'page'>
            <Navbar sticky = 'top'/>
            <div className = 'partition' id = 'first-part'>
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
            </div>
            <div className = 'pic-contain'>
                <img className = 'home-pic'/>
                <img className = 'home-pic'/>
                <img className = 'home-pic'/>
            </div>
            <div className = 'partition' id = 'second-part'>
                <h1>
                    Relevant Coursework and Experience
                </h1>
                    <ul>
                        <li>Elements of software design (Python)</li>
                        <li>Introductory Javascript Courses (JavaScript)</li>
                        <li>Projects involving web development</li>
                    </ul>
                

            </div>
        </div>
    );
}

export default Home;