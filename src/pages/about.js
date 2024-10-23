import * as React from 'react';
import Layout from '../components/layout.js';
import '../components/about.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const About = () => {
    return (
        <Layout>
            {/* Background Section */}
            <div className="background-section">
                <h1 className="h1-about fade-in-up">STEVEN VU</h1>
                <h2 className="fade-in-up">Aspiring Software Engineer</h2>
                <a href="#profile-section" className="arrow-container fade-in-up" onClick={() => {
                    console.log("Arrow clicked!");
                    scrollTo('#profile-section');
                }} aria-label="Scroll down">
                    <img className="arrow-down" src="/arrow_down.png" alt="scroll-down"/>
                </a>
            </div>

            {/* Profile Section */}
            <div className="profile-section" id="profile-section">
                <h2 className="profile-section-title">A LITTLE BIT ABOUT ME</h2>
                <img className="profile-picture" src="/profile.jpg" alt="profile"/>
                <p>Hi, I’m Steven Vu, a passionate software developer with a knack for building secure, scalable, and efficient solutions. I thrive at the intersection of development and security, specializing in DevSecOps—integrating security into every step of the development lifecycle to ensure robust and reliable software.</p>
                <p>From planning and writing code to automating deployments and monitoring systems, I enjoy the entire journey of bringing ideas to life. I believe that security should empower innovation, not hinder it, and I aim to bridge the gap between fast development and strong security practices. Whether I’m developing APIs, setting up CI/CD pipelines, or automating security checks, my focus is always on delivering high-quality, secure products.</p>
                <p>When I’m not coding or configuring tools, I enjoy learning new technologies, solving challenges, and staying up-to-date with trends in cloud infrastructure, automation, and software security.</p>
                <p>Let’s build something great—secure by design and ready to scale!</p>
            </div>
        </Layout>
    );
}

export const Head = () => <title>About Me</title>;

export default About;
