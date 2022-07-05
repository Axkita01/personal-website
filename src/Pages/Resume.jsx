import '../Styles/resume.css';
import Navbar from '../Components/Navbar';
import PDF from '../ResumeFall2022.pdf';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'

function Resume() {
    return (
        <div>
            <Navbar/>
            <div className = 'page'>
                <h1 className = 'header'>
                    Alexander Kita
                </h1>
            
            <div className = 'res-row'>
                <img src = {require('../assets/ECEResume-1.jpg')} className= 'resume'></img>
                
                <div className='text-container'>
                    <p>
                        This is my resume. It means a lot to me I hope
                        People like it so i can feel good pls :)
                    </p>
                </div>
            </div>
            </div>
               
                {/*
                <div className = 'block' id = 'education'>
                    <h2>
                        Education
                    </h2>
                    <div className = 'item'>
                        <h4>
                            High School | Clear Lake Highschool
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2016 - Spring 2020
                        </p>
                        <p className = 'description'>
                        Top 3% of Class
                        </p>
                    </div>

                    <div className = 'item'>
                        <h4>
                            University of Texas at Austin | Computer Engineeering
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2020 - Spring 2024
                        </p>
                        <p className = 'description'>
                        Current GPA: 4.0<br/>
                        </p>
                    </div>

                </div>

                <div className = 'block' id = 'experience'>
                    <h2>
                        Experience
                    </h2>
                    <div className = 'item'>
                        <h4>
                            Advancing Campus Technology (ACT)
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2022 - Present
                        </p>
                        <p className = 'description'>
                        ACT is an organization that 
                        facilitates projects that aim to 
                        improve and create new tools for education
                        </p>
                    </div>

                    <div className = 'item'>
                        <h4>
                            IEEE CS
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2022 - Present
                        </p>
                        <p className = 'description'>
                        IEEE CS is a IEE organization that creates a 
                        variety of coding projects.
                        </p>
                    </div>


                    <div className = 'item'>
                        <h4>
                            Independent Study Mentorship (ISM)
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2019 - Spring 2020
                        </p>
                        <p className = 'description'>
                        Independent Study Mentorship (ISM) is a high school 
                        program that provides students with an opportunity to<br/> 
                        do a semester-long research project while collaborating with a mentor. 
                        The project is presented in front of an audience.
                        </p>
                    </div>

                    <div className = 'item'>
                        <h4>
                            Retail Associate | Famous Footwear
                        </h4>
                        <p className = 'timeframe'>
                            Summer 2021
                        </p>
                        <p className = 'description'>
                        Assisted with day-to-day functions such as 
                        working the register, unpacking shipments, 
                        and <br/> providing customer service. 
                        Worked 15-35 hours per week.
                        </p>
                    </div>
                </div>

                <div className = 'block' id = 'volunteering'>
                    <h2>
                        Volunteering and Honors
                    </h2>
                    <ul>
                        <li>UT Distinguised Honors (Spring 2022)</li>
                        <li>TMEA 6a All-State Band (Spring 2020)</li>
                        <li>National Hispanic Scholar (Spring 2019)</li>
                    </ul>
                </div>
            <div className = 'block' id = 'skills'>
                <h2>
                    Skills
                </h2>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>React.js</li>
                    <li>Orange</li>
                    <li>Excel</li>
                </ul>
            </div>
            <a href = {PDF} className = 'resdown' download = '../ResumeFall2022.pdf'>
                Resume Download
            </a>
    */}</div>
    
    );
}

export default Resume;