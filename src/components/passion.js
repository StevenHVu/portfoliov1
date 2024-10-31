import React from 'react'
import '../components/passion.scss'
import Fade from '../components/fade.js'

const PassionEntry = ({title, url, description}) => {
    return (
        <>
            {/* Image */}
            <div>
                <img className="passion-image" src={`${url}`} alt="passion"></img>
            </div>
            
            {/* Title */}
            <Fade>
                <div>
                    <h2 className="passion-text">{title}</h2>
                </div>
            </Fade>

            {/* Description */}
            <Fade>
                <div>
                    <p className="passion-description">{description}</p>
                </div>
            </Fade>
        </>
    )
}

export default PassionEntry