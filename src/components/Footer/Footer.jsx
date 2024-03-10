// Footer.js

import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {currentYear} Chris's Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
