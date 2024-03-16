// Hero.jsx

import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Hi, I'm Chris</h1>
        <p>I'm a creative backend developer.
          Feel free to look around!
           </p>
        <a href="mailto:myemail@email.com">Contact me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" className={styles.heroImage} />
    </section>
  );
};

export default Hero;
