// importing React
import * as React from 'react'
import Layout from '../components/layout'

// component definition
const Index = () => {
    return (
        <div className="background-section">
            <div className="center-content">
                <Layout pageTitle="STEVEN VU"/>
                <h2>Aspiring Software Engineer</h2>
            </div>
        </div>
    )
}

// Head component
export const Head = () => <title>Home</title>

// export component
export default Index;
