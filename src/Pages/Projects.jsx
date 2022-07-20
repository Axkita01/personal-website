import Navbar from '../Components/Navbar.jsx';
import '../Styles/projects.css'
import {Row, Col, Container} from 'react-bootstrap'
import BottomSquares from '../Components/BottomDesign.js';

function Projects() {
    return (
        <div className = 'page' style = {{paddingTop: 60}}>
            <Container className='first-half'>
            <h1 className = 'header'>
                Projects
            </h1>
            <Row>
            <ul className = 'Project-list'>
                <li style = {{marginRight: '5%'}}>
                    <h5>Longhorn Smash Website (WIP)</h5>
                    <a target = '_blank' href = 'https://google.com'>
                        http://www.longhornsmash.com
                    </a>
                    <p>
                        Website for the super smash brothers organization at UT Austin
                    </p>
                </li>

                <li style = {{marginRight: '5%'}}>
                    <h5>Personal Website (Currently Viewing)</h5>
                    <a href = 'https://afkcoding.com'>
                        https://afkcoding.com
                    </a>
                    <p>
                        Portfolio website
                    </p>
                </li>

                <li>
                    <h5>UT Help Hours Website (WIP)</h5>
                </li>
            </ul>
            </Row>
            </Container>

            <BottomSquares/>

            <Container>
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
        </div>
    );
}

export default Projects;