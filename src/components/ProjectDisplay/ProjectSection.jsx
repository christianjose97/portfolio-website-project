// ProjectSection.jsx

import React from 'react';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    githubLink: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    githubLink: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
