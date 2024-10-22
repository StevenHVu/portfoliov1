import * as React from 'react'
import Layout from '../components/layout.js'
import '../components/about.scss'

const About = () => {
    return (
        <Layout>
                {/* Background Section */}
                <div className="background-section">
                <h1>STEVEN VU</h1>
                <h2>Aspiring Software Engineer</h2>
                </div>

                {/* Profile Section */}
                <div className="profile-section">
                    <img src="/profile.png" alt="profile" className="profile-image"/>
                    <div className="profile-text">
                        <h2>A LITTLE BIT ABOUT ME</h2>
                        <p>Hi, I’m Steven Vu, a passionate software developer with a knack for building secure, scalable, and efficient solutions. I thrive at the intersection of development and security, specializing in DevSecOps—integrating security into every step of the development lifecycle to ensure robust and reliable software.</p>
                        <p>From planning and writing code to automating deployments and monitoring systems, I enjoy the entire journey of bringing ideas to life. I believe that security should empower innovation, not hinder it, and I aim to bridge the gap between fast development and strong security practices. Whether I’m developing APIs, setting up CI/CD pipelines, or automating security checks, my focus is always on delivering high-quality, secure products.</p>
                        <p>When I’m not coding or configuring tools, I enjoy learning new technologies, solving challenges, and staying up-to-date with trends in cloud infrastructure, automation, and software security. </p>
                        <p>Let’s build something great—secure by design and ready to scale!</p>
                    </div>
                </div>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default About;