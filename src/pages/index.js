// importing React
import * as React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/layout.js'
import Fade from '../components/fade.js';


// component definition
const Index = () => {
    return (
        // <Layout>
        <div className="home-container">
            <div className="background-section">
                <div className="Background-content">

                </div>
                <Fade delay={0}>
                    <h1>Creating impactful software solutions through innovation and expertise.</h1>
                </Fade>

                <Fade delay={1}>
                    <Link className="bobble" to="/about">Continue</Link>
                </Fade>
            </div>
        </div>
        // </Layout>
    )
}

// Head component
export const Head = () => <title>Steven Vu</title>

// export component
export default Index;
