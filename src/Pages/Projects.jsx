import Navbar from '../Components/Navbar.jsx';
import '../Styles/projects.css'
import {Row, Container} from 'react-bootstrap'
import BottomSquares from '../Components/BottomDesign.js';
import ProjectCard from '../Components/ProjectCard.js';


function Projects() {
    let lswebsite_desc = "Reworked and added features to the official website of the super smash brothers organization's website at UT Austin."
    let speed_project_desc = "Created an app to play the card game called speed using React Native."
    let personal_website_desc = "Personal portfolio website to display my resume and projects."
    return (
        <div className = 'page' style = {{paddingTop: 60}}>
            <Container className='first-half'>
            <Row className = 'second-header'>
                <h1 style = {{marginBottom: '1%'}}>Projects Overview</h1>
            </Row>
            <Row id = 'project-second'>
                <p style = {{marginTop:0, width:'60%'}}>
                    The above projects are current and past projects I have participated
                    in. Throughout these projects, I have had the opportunity to improve
                    and gain new skills. I hope to continue doing projects and build my
                    programming skills.
                </p>
            </Row>
            </Container>

            <BottomSquares/>

            <h1 className = 'header'>
                Projects
            </h1>
            <Row 
            style = {{
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column'
                }}>
                <ProjectCard 
                desc = {lswebsite_desc} 
                title = 'Longhorn Smash Website' 
                windowWidth = {window.innerWidth}
                link = 'https://Longhornsmash.com'
                git = 'https://github.com/JackByers2/tempLSWebsite'/>

                <ProjectCard 
                desc = {speed_project_desc} 
                title = 'Speed Card Game App' 
                windowWidth = {window.innerWidth}
                link = 'Work in progress.'
                git = 'https://github.com/Axkita01/speed-project'/>

                <ProjectCard 
                desc = {personal_website_desc} 
                title = 'Personal Website' 
                windowWidth = {window.innerWidth}
                link = 'Currently Viewing.'
                git = 'https://github.com/Axkita01/personal-website'/>
            </Row>
        </div>
    );
}

export default Projects;