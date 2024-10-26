import * as React from 'react';
import Layout from '../components/layout.js';
import '../components/about.scss';
import Fade from '../components/fade.js';
import PassionEntry from '../components/passion.js';
// import scrollTo from 'gatsby-plugin-smoothscroll';

const About = () => {
    return (
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
                    <p>Hi, I’m Steven Vu, a software developer that has a passion for building secure, scalable, and efficient solutions. I graduated with a B.S. in Computer Science and a Certificate of Cybersecurity from Oregon State University. I thrive at the intersection of development and security, specializing in DevSecOps—integrating security into every step of the development lifecycle to ensure robust and reliable software.</p>
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
                    <PassionEntry title="Efficiency" url="/icon.png" description="Hi"/>
                </Fade>
                <Fade>
                    <PassionEntry title="Scalabilty" url="/icon.png" description={"hi"}/>
                </Fade>
                <Fade>
                    <PassionEntry title="Adaptability" url="/icon.png" description={"hi"}/>
                </Fade>
            </div>
        </Layout>
    );
}

export const Head = () => <title>Steven Vu</title>;
export default About;
