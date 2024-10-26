import * as React from 'react'
import Layout from '../components/layout.js'
import Fade from '../components/fade.js';

const Portfolio = () => {
    return (
        <Layout pageTitle="Portfolio">
            <div className="background-section">
                <Fade>
                    <h1>Greetings!</h1>
                </Fade>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Portfolio</title>

export default Portfolio;