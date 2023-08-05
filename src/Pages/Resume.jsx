import React from 'react';
import '../Styles/resume.css';
import PDF from '../assets/CurrentResume.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'

function Resume() {
    return (
        <div style = {{paddingTop: 60}} className = 'res-page'>
            
        <div>
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
        </div>
    );
}

export default Resume;