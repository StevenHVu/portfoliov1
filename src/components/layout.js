import * as React from 'react'
import { Link } from 'gatsby'
import '../components/layout.scss'

const Layout = ({ children }) => {
    return (
        <>
        <div className="layout">
            {/* Homepage Menu */}
            <div className="icon-container">
                <img src="/icon.png" alt="logo"/>
                <Link to='/' className="home-link">STEVEN VU</Link>
            </div>

            {/* Navigation Menu */}
            <nav className="layout-links">
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

        {/* Page content */}
        <div className="page-content">
            {children}
        </div>
        </>
    )
}

export default Layout;