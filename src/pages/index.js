// importing React
import * as React from 'react'
import Layout from '../components/layout.js'
import Fade from '../components/fade.js';


// component definition
const Index = () => {
    return (
        <Layout>
            <div className="home-container">
                <div className="background-section">
                    <Fade delay={0}>
                        <h1>Creating impactful software solutions through innovation and expertise.</h1>
                    </Fade>

                    <Fade delay={0.6}>
                        <h2>Learn about what I do. </h2>
                    </Fade>

                    <Fade delay={1.2}>
                        <h3>Let's get in touch.</h3>
                    </Fade>

                </div>
            </div>
        </Layout>
    )
}

// Head component
export const Head = () => <title>Home</title>

// export component
export default Index;
