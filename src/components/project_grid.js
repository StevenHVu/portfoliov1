import React from 'react'
import Project from '../components/project.js'

const ProjectsData = [
    {
        title: "a",
        thumbnail:"a",
        description: "a",
        link:"a"
    }
]

const ProjectsGrid = () => {
    return (
        <div className="projects-grid-container">
            {ProjectsData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    thumbnail={project.thumbnail}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    )
}

export default ProjectsGrid;