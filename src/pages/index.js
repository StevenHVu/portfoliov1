// importing React
import * as React from 'react'
import Layout from '../components/layout'

// component definition
const Index = () => {
    return (
        <Layout>
            <div className="home-container">
                <div className="background-section">
                    <h1>Creating impactful software solutions through innovation and expertise.</h1>
                    <h2>View my portfolio. Learn more about me. Get in touch.</h2>
                </div>
            </div>
        </Layout>
    )
}

// Head component
export const Head = () => <title>Home</title>

// export component
export default Index;
