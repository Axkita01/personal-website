import Navbar from '../Components/Navbar';
import '../Styles/Home.css'
import ImageGallery from 'react-image-gallery'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

function Home() {

    const images = [
        {
            original: pic2,
            originalClass: 'home-pic',
            thumbnailWidth: '20vw',
            thumbnailHeight: 'auto'     
        },

        {
            original: pic1,
            originalClass: 'home-pic'
        },
        
        {
            original: pic3,
            originalClass: 'home-pic'
        }
      ];

    return (
        <div className = 'page'>
            <Navbar sticky = 'top'/>
            <div className='row'>
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
            </div>
            <div className = 'row'>
                <div className = 'pic-contain'>
                    <ImageGallery 
                    additionalClass='home-pic'
                    items = {images} 
                    autoPlay = 'true'
                    />
                </div>
            </div>
            <div className='row'>
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
        </div>
    );
}

export default Home;