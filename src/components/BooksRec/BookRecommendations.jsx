import React, { useState, useEffect } from 'react';
import styles from './BookRecommendations.module.css';

const BookRecommendations = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const books = [
    {
      title: 'Book 1',
      description: 'Description of Book 1',
      amazonLink: 'https://www.amazon.com/book1',
      image: 'book1.jpg'
    },
    {
      title: 'Book 2',
      description: 'Description of Book 2',
      amazonLink: 'https://www.amazon.com/book2',
      image: 'book2.jpg'
    },
    // Add more books as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex((currentBookIndex + 1) % books.length);
    }, 10000); // Auto-rotate every 10 seconds

    return () => clearInterval(interval);
  }, [currentBookIndex, books.length]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Book Recommendations</h2>
      <div className={styles.bookContainer}>
        {books.map((book, index) => (
          <div
            key={index}
            className={`${styles.book} ${index === currentBookIndex ? styles.active : ''}`}
            style={{ transition: 'opacity 0.5s ease-out' }}
          >
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRecommendations;
