import * as React from 'react';
import Layout from '../components/layout.js';
import '../components/about.scss';
import Fade from '../components/fade.js';
import scrollTo from 'gatsby-plugin-smoothscroll';

const About = () => {
    // React.useEffect(() => {
    //     // check to ensure the code is only running in browser
    //     if (typeof window !== 'undefined') {
    //         // search for all elements with .fade-in-up class 
    //         const fadeInElements = document.querySelectorAll('.fade-in-up');
    //         const observer = new IntersectionObserver(
    //             (entries) => {
    //                 entries.forEach((entry) => {
    //                     // if an element enters viewport 
    //                     if (entry.isIntersecting) {
    //                         // add .show to trigger .show CSS animations
    //                         entry.target.classList.add('show');
    //                         // stop observing once it's visible
    //                         observer.unobserve(entry.target);
    //                     }
    //                 });
    //             },
    //         );

    //     // run callback function when element exits/enters viewport
    //     fadeInElements.forEach((el) => {
    //         observer.observe(el);

    //         if (el.getBoundingClientRect().top < window.innerHeight) {
    //             el.classList.add('show');
    //         }
    //     });

    //     // cleanup on unmount + prevent memory leaks
    //     return () => observer.disconnect();
    //     }
    // }, []);

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

                <a href="#profile-section" className="arrow-container fade-in-up" onClick={() => {
                    scrollTo('#profile-section');
                }} aria-label="Scroll down">
                    <img className="arrow-down bobble" src="/arrow_down.png" alt="scroll-down"/>
                </a>    
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
                    <p>Hi, I’m Steven Vu, a passionate software developer with a knack for building secure, scalable, and efficient solutions. I thrive at the intersection of development and security, specializing in DevSecOps—integrating security into every step of the development lifecycle to ensure robust and reliable software.</p>
                </Fade>
                <Fade>
                    <p>From planning and writing code to automating deployments and monitoring systems, I enjoy the entire journey of bringing ideas to life. I believe that security should empower innovation, not hinder it, and I aim to bridge the gap between fast development and strong security practices. Whether I’m developing APIs, setting up CI/CD pipelines, or automating security checks, my focus is always on delivering high-quality, secure products.</p>
                </Fade>
                <Fade>
                    <p>When I’m not coding or configuring tools, I enjoy learning new technologies, solving challenges, and staying up-to-date with trends in cloud infrastructure, automation, and software security.</p>
                </Fade>
                <Fade>
                    <p>Let’s build something great—secure by design and ready to scale!</p>
                </Fade>
            </div>
        </Layout>
    );
}

export const Head = () => <title>About Me</title>;
export default About;
