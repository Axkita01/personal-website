import Navbar from '../Components/Navbar';
import '../Styles/Home.css'
import ImageGallery from 'react-image-gallery'
import git from '../Components/git.png'
import linked from '../Components/linkedin.png'
import header from '../Components/header.jpg'

function Home() {

    const images = [
        {
            original: linked,
            originalClass: 'home-pic'
        },
        {
            original: git,
            originalClass: 'home-pic'
        },
        {
        original: header,
        originalClass: 'home-pic'
        }
      ];

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
                <ImageGallery 
                className = 'gallery' 
                items = {images} 
                autoPlay = 'true'
                />
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