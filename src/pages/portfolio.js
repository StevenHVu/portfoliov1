import * as React from 'react'
import Layout from '../components/layout.js'
import Fade from '../components/fade.js';
import Footer from '../components/footer.js'

import '../components/portfolio.scss';
import Resume from '../components/resume.js'

import TechnologiesGrid from '../components/technology_grid.js';
import ProjectsGrid from '../components/project_grid.js';
const Portfolio = () => {
    return (
        <>
        <Layout pageTitle="Portfolio">
            <div className="portfolio-background"/>
            <div className="portfolio-section">
                <div className="experience-container">
                    <div className="experience-title-container">
                        <Fade delay={0}>
                            <h1 className="experience-title">WHAT I'VE DONE SO FAR</h1>
                        </Fade>
                    </div>
                    
                    <div className="technologies-grid-container">
                        <TechnologiesGrid />
                    </div>
                </div>
                
                <div className="resume-container">
                    <Fade>
                        <h2 className="resume-text">View My Résumé!</h2>
                    </Fade>
                    <Fade delay={0.8}>
                      <Resume />
                    </Fade>
                </div>

                <div className="project-container">
                    <ProjectsGrid />
                </div>
            </div>
        </Layout>
        <Footer />
        </>
    )
}

export const Head = () => <title>Portfolio</title>

export default Portfolio;