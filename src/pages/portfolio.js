import * as React from 'react'
import Layout from '../components/layout.js'
import Fade from '../components/fade.js';
import '../components/portfolio.scss';
import Resume from '../components/resume.js'

const Portfolio = () => {
    return (
        // <Layout pageTitle="Portfolio">
            <div className="portfolio-section">
                <div className="experience-container">
        
                    <div className="experience-title-container">
                        <Fade delay={0}>
                            <h1 className="experience-title">WHAT I'VE DONE SO FAR</h1>
                        </Fade>
                    </div>
                    
                    <div className="technologies-grid-container">

                    </div>
                    
                </div>
                
                <div className="resume-container">
                    <Resume />
                </div>

                <div className="project-container">

                </div>
            </div>
        // </Layout>
    )
}

export const Head = () => <title>Portfolio</title>

export default Portfolio;