import * as React from 'react'
import Layout from '../components/layout'


const About = () => {
    return (
        <>
        {/* Background Section */}
        <div className="background-section">
            <div className="center-content">
                <Layout pageTitle="About Me"/>
                <h2>A little bit about me...</h2>
            </div>
        </div>
        
        {/* Content Section */}
        <div className="background-section">
            <div className="center-content">
                <Layout pageTitle="About Me"/>
                <h2>A little bit about me...</h2>
            </div>
        </div>
        </>
    )
}

export const Head = () => <title>About Me</title>

export default About;