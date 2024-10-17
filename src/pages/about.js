import * as React from 'react'
import Layout from '../components/layout.js'
import '../components/about.scss'

const About = () => {
    return (
        <Layout>
                {/* Background Section */}
                <div className="background-section">
                    <h1>About Me</h1>
                </div>

                {/* Profile Section */}
                <div className="profile-section">
                    <img src="/profile.png" alt="profile" className="profile-image"/>
                    <div className="profile-text">
                        <h2> Hello, I'm Steven Vu</h2>
                        <p>I like One Piece.</p>
                    </div>
                </div>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default About;