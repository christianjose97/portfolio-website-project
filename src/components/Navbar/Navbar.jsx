import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`${styles.navbar} ${isDarkMode ? styles.darkMode : ''}`}> {/* Apply dark mode class */}
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={getImageUrl("nav/square.png")}
                    alt="menu-button"
                    onClick={toggleMenu}
                />
            </div>
            <div className={styles.title}>
                <span>Chris's Portfolio</span>
            </div>
            <ul className={`${styles.menuItems} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className={styles.darkModeToggle}> {/* Dark mode toggle button */}
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <label htmlFor="darkModeToggle"></label>
            </div>
        </nav>
    );
};
