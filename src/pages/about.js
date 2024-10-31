import * as React from 'react';
import Layout from '../components/layout.js';
import '../components/about.scss';
import Fade from '../components/fade.js';
import PassionEntry from '../components/passion.js';
import Footer from '../components/footer.js'
// import scrollTo from 'gatsby-plugin-smoothscroll';

// importing passion sections icons
import adaptability_icon from '../images/adaptability_icon.png'
import efficiency_icon from '../images/efficiency_icon.png'
import scalability_icon from '../images/scalability_icon.png'

const About = () => {
    return (
        <>
        <Layout>
            {/* Background Section */}
            <div className="background-section">
                <Fade delay={0}>
                    <h1 className="h1-about">STEVEN VU</h1>
                </Fade>
                <Fade delay ={0.6}>
                    <h2 className="h2-about">Aspiring Software Engineer</h2>
                </Fade>
                <Fade delay={1.2}>
                    <h2 className="h2-about">Security Enthusiast</h2>
                </Fade>
                {/* <Fade delay={1.8}>
                    <a href="#profile-section" className="arrow-container" onClick={() => {
                        scrollTo('#profile-section');
                    }} aria-label="Scroll down">
                        <img className="arrow-down bobble" src="/arrow_down.png" alt="scroll-down"/>
                    </a>   
                </Fade> */}
            </div>

            {/* Profile Section */}
            <div className="profile-section" id="profile-section">
                <Fade>
                    <h2 className="profile-section-title">A LITTLE BIT ABOUT ME</h2>
                </Fade>
                <Fade>
                    <img className="profile-picture" src="/profile.jpg" alt="profile"/>
                </Fade>
                <Fade>
                    <p>Hi, I’m Steven Vu, a software developer that has a passion for building secure, scalable, and efficient solutions. I graduated with a B.S. in Computer Science and a Certificate of Cybersecurity from Oregon State University. I specialize in DevSecOps, integrating security at every step of development to ensure robust and reliable software.</p>
                </Fade>
                <Fade>
                    <p>From planning and writing code to automating deployments and monitoring systems, I enjoy the process of converting theoretical ideas into reality. I believe that security should empower innovation, not hinder it, and I aim to bridge the gap between fast development and strong security practices. Whether I’m developing APIs, setting up CI/CD pipelines, or automating security checks, my focus is always on delivering high-quality, secure products.</p>
                </Fade>
                <Fade>
                    <p>When I’m not coding, I enjoy watching educational videos, working out, and practicing piano.</p>
                </Fade>
            </div>

            {/* Passion Section*/}
            <div className="passion-section">
                <Fade>
                    <PassionEntry title="Adaptability" url={adaptability_icon} description={"In a fast-evolving tech landscape, I embrace change as a constant, staying ahead of trends and responding quickly to new challenges. Whether it’s adapting to a new programming language, troubleshooting unexpected issues, or rethinking solutions based on feedback, I thrive in environments that require flexibility and creativity."}/>
                </Fade>
                <Fade>
                    <PassionEntry title="Efficiency" url={efficiency_icon} description="I prioritize efficiency in every aspect of my work, from clean code practices to streamlined processes that reduce redundancy. By focusing on optimization and continuous improvement, I aim to build solutions that minimize resource use while maximizing output."/>
                </Fade>
                <Fade>
                    <PassionEntry title="Scalabilty" url={scalability_icon} description={"I design solutions with scalability in mind, anticipating the growth and changes that a successful project requires. By planning for growth from the outset, I ensure that my projects can evolve alongside the needs of the business or user base, delivering consistent performance and flexibility as they scale."}/>
                </Fade>
            </div>
        </Layout>
        <Footer />
        </>
    );
}

export const Head = () => <title>Steven Vu</title>;
export default About;
