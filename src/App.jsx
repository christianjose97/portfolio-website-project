// App.jsx

import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectSection from './components/ProjectDisplay/ProjectSection';
import BookRecommendations from './components/BooksRec/BookRecommendations';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <ProjectSection />
      <BookRecommendations />
    </div>
  );
}

export default App;
