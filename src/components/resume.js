import React from 'react'
import './resume.scss'
import resume from '../images/Steven Vu - Cybersecurity Resume.pdf'


const ResumeButton = () => {
    return (
        <a href={resume} download="Steven_Vu_Resume" className="resume-button">
            Download
        </a>
    )
}

export default ResumeButton;