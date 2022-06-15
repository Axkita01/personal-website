import Navbar from '../Components/Navbar.jsx';
import '../Styles/projects.css'

function Projects() {
    return (
        <div className = 'page'>
            <Navbar/>
            <h1 className = 'header'>
                Projects
            </h1>
            <ul className = 'Project-list'>
                <li><a>Personal Website (Currently Viewing)</a></li>
                <li><a>Longhorn Smash Website (WIP)</a></li>
                <li><a>UT Help Hours Website (WIP)</a></li>
            </ul>
        </div>
    );
}

export default Projects;