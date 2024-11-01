import React from 'react';

// import tech item component
import Technology from './technology_item.js';

// import all icon .svg files
import aws_icon from '../images/aws_icon.svg';
import canva_icon from '../images/canva_icon.svg';
import css_icon from '../images/css_icon.svg';
import docker_icon from '../images/docker_icon.svg';
import express_icon from '../images/express_icon.svg';
import figma_icon from '../images/figma_icon.svg';
import git_icon from '../images/git_icon.svg';
import github_icon from '../images/github_icon.svg';
import github_actions_icon from '../images/github_actions_icon.svg';
import html_icon from '../images/html_icon.svg';
import javascript_icon from '../images/javascript_icon.svg';
import kali_linux_icon from '../images/kali_linux_icon.svg';
import linux_icon from '../images/linux_icon.svg';
import mongodb_icon from '../images/mongodb_icon.svg';
import mysql_icon from '../images/mysql_icon.svg';
import nodejs_icon from '../images/nodejs_icon.svg';
import python_icon from '../images/python_icon.svg';
import r_icon from '../images/r_icon.svg';
import react_icon from '../images/react_icon.svg';
import sass_icon from '../images/sass_icon.svg';
import scrum_icon from '../images/scrum_icon.svg';
import sql_icon from '../images/sql_icon.svg';
import terraform_icon from '../images/terraform_icon.svg';
import wireshark_icon from '../images/wireshark_icon.svg';
import Fade from './fade.js';

const technologiesData = [
    {
        category: 'Programming Languages',
        items: [
            { src: javascript_icon, alt: "JavaScript Icon", tooltip: "JavaScript" },
            { src: python_icon, alt: "Python Icon", tooltip: "Python" },
            { src: r_icon, alt: "R Icon", tooltip: "R" },
            { src: sql_icon, alt: "SQL Icon", tooltip: "SQL" }
        ]
    },
    {
        category: 'Web Development',
        items: [
            { src: css_icon, alt: "CSS Icon", tooltip: "CSS" },
            { src: express_icon, alt: "Express Icon", tooltip: "Express" },
            { src: html_icon, alt: "HTML Icon", tooltip: "HTML" },
            { src: javascript_icon, alt: "JavaScript Icon", tooltip: "JavaScript" },
            { src: nodejs_icon, alt: "Node.js Icon", tooltip: "Node.js" },
            { src: react_icon, alt: "React Icon", tooltip: "React" },
            { src: sass_icon, alt: "Sass/SCSS Icon", tooltip: "Sass/SCSS" }
        ]
    },
    {
        category: 'Databases',
        items: [
            { src: mongodb_icon, alt: "MongoDB Icon", tooltip: "MongoDB" },
            { src: mysql_icon, alt: "mySQL Icon", tooltip: "mySQL" },
        ]
    },
    {
        category: 'Cloud Services and Infrastructure',
        items: [
            { src: aws_icon, alt: "AWS Icon", tooltip: "AWS" },
            { src: docker_icon, alt: "Docker Icon", tooltip: "Docker" },
        ]
    },
    {
        category: 'DevOps and CI-CD Tools',
        items: [
            { src: github_actions_icon, alt: "GitHub Actions Icon", tooltip: "GitHub Actions" },
            { src: terraform_icon, alt: "Terraform Icon", tooltip: "Terraform" },
        ]
    },
    {
        category: 'Prototyping and Collaboration Tools',
        items: [
            { src: canva_icon, alt: "Canva Icon", tooltip: "Canva" },
            { src: figma_icon, alt: "Figma Icon", tooltip: "Figma" }
        ]
    }
];

const TechnologiesGrid = () => {
    return (
            <div className="technologies-grid-container">
            {technologiesData.map((section, index) => (
                <>
                <Fade>
                    <h1 className="technologies-category-title">{section.category}</h1>
                </Fade>
                <div key={index} className={`${section.category.toLowerCase().replace(" ", "-")}-container`}>
                    {section.items.map((tech, idx) => (
                        <Technology key={idx} src={tech.src} alt={tech.alt} tooltip={tech.tooltip} />
                    ))}
                </div>
                </>
            ))}
            </div>
        
    );
};

export default TechnologiesGrid;
