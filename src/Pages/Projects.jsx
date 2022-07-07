import Navbar from '../Components/Navbar.jsx';
import '../Styles/projects.css'
import {Row, Col} from 'react-bootstrap'

function Projects() {
    return (
        <div className = 'page' style = {{paddingTop: 60}}>
            <h1 className = 'header'>
                Projects
            </h1>
            <Row>
            <ul className = 'Project-list'>
                <li>
                    <img src = {require('../assets/header.jpg')}/>
                    <a>Personal Website (Currently Viewing)</a>
                </li>

                <li>
                    <img src = {require('../assets/favicon.ico')}/>
                    <a>Longhorn Smash Website (WIP)</a>
                </li>

                <li>
                    <img src = {require('../assets/header.jpg')}/>
                    <a>UT Help Hours Website (WIP)</a>
                </li>
            </ul>
            </Row>
        </div>
    );
}

export default Projects;