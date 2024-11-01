import React from 'react';
import Fade from './fade.js'
import '../components/technology_item.scss'

const Technology = ({src, alt, tooltip}) => {
    return (        
        <Fade>
            <div className="technology-item">
                <img className="tech-icon" src={src} alt={alt} />
                <div className="tech-tooltip">{tooltip}</div>
            </div>
        </Fade>
    )
}

export default Technology;