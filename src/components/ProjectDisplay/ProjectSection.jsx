// ProjectSection.jsx

import React from 'react';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'Minesweeper Game',
    description: 'Recreated classic game in C++ and SMFL Graphics library',
    githubLink: 'https://github.com/christianjose97/minesweeper-project/tree/main',
  },
  {
    title: 'Book Collector',
    description: 'API that stores read books in a database. Soon to be made a complete app',
    githubLink: 'https://github.com/christianjose97/Book_collection_project',
  },
  {
    title: 'Themed Password Generator',
    description: 'This project aims to make your password creation simpler and more fun',
    githubLink: 'https://github.com/christianjose97/Book_collection_project',
  }
  // Add more projects here following the same format
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
