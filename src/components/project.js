import React from 'react';

const Project = ({ title, thumbnail, description, link }) => {
    return (
        <div className="project-card">
            <img src={thumbnail} alt={`${title} thumbnail`} className="project-thumbnail" />
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
};

export default Project;
