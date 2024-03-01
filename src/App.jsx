// App.jsx

import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectSection from './components/ProjectDisplay/ProjectSection';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <ProjectSection />
    </div>
  );
}

export default App;
