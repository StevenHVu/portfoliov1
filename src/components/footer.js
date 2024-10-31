// ┻┳|･ω･)ﾉ caught you looking at the source code!
// let me know if there are further optimizations I could be making
// or if you have any questions! I'll be happy to go over things with you
// have a nice day!!

import React from 'react'
import './footer.scss'

// import icon images
import github_icon from '../images/github_icon.svg'
import instagram_icon from '../images/instagram_icon.svg'
import spotify_icon from '../images/spotify_icon.svg'
import linkedin_icon from '../images/linkedin_icon.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <a href="https://github.com/StevenHVu" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon" src={github_icon} alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/StevenHVu" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon" src={linkedin_icon} alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com/big2nafishy" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon" src={instagram_icon} alt="Instagram" />
                    </a>
                    <a href="https://spotify.com/big2nafish" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon" src={spotify_icon} alt="Spotify" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Steven Vu. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;