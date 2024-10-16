import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({pageTitle, children }) => {
    return (
        <div className="layout">
            {/* Homepage Menu */}
            <div className="icon-container">
                <img src="/icon.png" alt="logo"/>
                <Link to='/' className="home-link">STEVEN VU</Link>
            </div>

            {/* Navigation Menu */}
            <nav className="layout-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
            {/* Main Content */}
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;