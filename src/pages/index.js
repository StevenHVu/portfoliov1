// importing React
import * as React from 'react'
import Layout from '../components/layout.js'

// component definition
const Index = () => {
    return (
        <Layout>
            <div className="home-container">
                <div className="background-section">
                    <h1 className="fade-in-up">Creating impactful software solutions through innovation and expertise.</h1>
                    <h2 className="fade-in-up">Learn about what I do. </h2>
                    <h3 className="fade-in-up">Let's get in touch.</h3>
                </div>
            </div>
        </Layout>
    )
}

// Head component
export const Head = () => <title>Home</title>

// export component
export default Index;
