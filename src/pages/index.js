// importing React
import * as React from 'react'
import Layout from '../components/layout'

// component definition
const Index = () => {
    return (
        <Layout>
            <div className="home-container">
                <div className="background-section">
                    <h1>Steven Vu</h1>
                    <h2>Aspiring Software Engineer</h2>
                </div>
            </div>
        </Layout>
    )
}

// Head component
export const Head = () => <title>Home</title>

// export component
export default Index;
