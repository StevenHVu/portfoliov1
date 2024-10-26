import React from 'react'
import '../components/passion.scss'

const PassionEntry = ({title, url, description}) => {
    return (
        <>
            {/* Image */}
            <div>
                <img className="passion-image" src={`${url}`} alt="passion"></img>
            </div>
            
            {/* Title */}
            <div>
                <h2 className="passion-text">{title}</h2>
            </div>

            {/* Description */}
            <div>
                <p className="passion-description">{description}</p>
            </div>
        </>
    )
}

export default PassionEntry