// Footer.js

import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p>&copy; {currentYear} Chris's Portfolio. All Rights Reserved.</p>
          <div className={styles.socialMedia}>
            {/* Social media links */}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
