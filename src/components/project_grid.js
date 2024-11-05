import React from 'react'
import Project from '../components/project.js'

import minecraft_thumbnail from '../images/minecraft_server.png';
import portfolio_thumbnail from '../images/portfolio_website.png';
import climate from '../images/climate_data.png'

const ProjectsData = [
    {
        title: "Automated Minecraft Server",
        thumbnail: minecraft_thumbnail,
        description: `This project involves setting up a fully automated and scalable Minecraft server on AWS EC2, using Infrastructure as Code (IaC) and CI/CD principles to manage server deployment and configuration.

        The goal was to create a reliable, cost-effective Minecraft server hosted on AWS that could be easily deployed and maintained.

        The project utilizes Terraform for infrastructure provisioning, and GitHub Actions to automate the deployment pipeline. By leveraging these tools, the server can be set up, destroyed, and redeployed with minimal effort, making it ideal for on-demand hosting or temporary game sessions.`,

        link: "https://github.com/StevenHVu/AWS-EC2-Minecraft-Project"
    },
    {
        title: "Portfolio Website",
        thumbnail: portfolio_thumbnail,
        description: `This portfolio website highlights my expertise and projects with a polished, modern interface built using React, SCSS, and Bootstrap for responsive and adaptable design. 
        
        Bootstrap provides a structured, mobile-first layout with customized styles to fit the overall aesthetic. The site emphasizes security practices throughout its design and code structure to ensure privacy and data protection. 
        
        For continuous updates, I integrated GitHub Actions for automated deployment, maintaining efficient, reliable version control.`,
        link: "https://github.com/StevenHVu/portfoliov1"
    },
    {
        title: "Tableau Climate Data",
        thumbnail: climate,
        description: `The Tableau dashboard project aims to create a user-friendly platform for accessing, analyzing, visualizing, and extracting data from a large SQL database containing over ten years of climate change data from Oregon State University’s Dr. Jillian Gregg’s research.
        
        The dashboard allows users to explore different variables and perform arithmetic calculations on them, troubleshoots any missing data values, as well as compare and analyze data to be used in the annual climate change reports and other publications.`,
        link: "https://github.com/StevenHVu/Tableau-Climate-Data"    
    },

    // {
    //     title: "",
    //     thumbnail: "",
    //     description: "",
    //     link: ""
    // },
    // {
    //     title: "",
    //     thumbnail: "",
    //     description: "",
    //     link: ""
    // }
];


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