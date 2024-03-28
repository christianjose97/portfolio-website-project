import React, { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { FaEnvelope } from 'react-icons/fa'; // Import social media icons

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const words = ["Developer", "Musician", "Investor"]; // Define words to cycle through
  const typingSpeed = 150; // Speed of typing animation (in milliseconds)
  const deletionSpeed = 100; // Speed of deletion animation (in milliseconds)

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Delay before starting deletion
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, isDeleting ? deletionSpeed : typingSpeed);
      }
    };

    type();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Hi, I'm Chris</h1>
        <p>I'm a <span className={styles.typingText}>{typedText}</span></p>
        <a href="mailto:myemail@email.com" className={styles.contactButton}>
          <FaEnvelope className={styles.icon} /> Contact me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.jpg')}
        alt="Hero image of me"
        className={styles.heroImage}
      />
    </section>
  );
};

export default Hero;
