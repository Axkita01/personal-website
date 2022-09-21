import React from 'react';
import '../Styles/resume.css';
import PDF from '../assets/Fall 2022 Resume Alex Kita.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import BottomSquares from '../Components/BottomDesign';

function Resume() {
    return (
        <div style = {{paddingTop: 60}} className = 'res-page'>
            
        <div style = {{backgroundColor: 'white'}}>
            <div className = 'res-row'>
                <h1 className = 'header'>
                    Alexander Kita
                </h1>
            </div>
            
            <div className = 'res-row'>
                <Document file = {PDF} className = 'resume'>
                    <Page pageIndex={0} className = 'resume-page'/>
                </Document>
            </div>
            <div className='res-row' style = {{marginBottom: 0}}>
                <a href = {PDF} className = 'resdown' download = {PDF}>
                    Resume Download
                </a>
            </div>
            </div>
            <BottomSquares/>
            <div className = 'plain-text'>
                <h1>Plain Text Resume</h1>
                <div className = 'block'>
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
                            University of Texas at Austin | Electrical and Computer Engineeering
                        </h4>
                        <p className = 'timeframe'>
                            Fall 2020 - Spring 2024
                        </p>
                        <p className = 'description'>
                        Current GPA: 4.0<br/>
                        </p>
                    </div>

                </div>

                <div className = 'block'>
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
                            Co-op Engineer | Ineos
                        </h4>
                        <p className = 'timeframe'>
                            Summer 2021
                        </p>
                        <p className = 'description'>
                        Did projects involving changes on-site and 
                        programming the DCS (distributed control systems) 
                        for the operation of a chemical plant.
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
                    <li>Flask</li> 
                </ul>
            </div>
        </div>
    </div>
    
    );
}

export default Resume;