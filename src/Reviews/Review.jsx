import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './reviews-data';

import styles from './Review.module.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const nextPerson = () => {
    let newIndex = index + 1;
    setIndex(checkNumber(newIndex));
  };

  const prevPerson = () => {
    let newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = people.length - 1);
    }
    return number;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={styles.review}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.personImg} />
        <span className={styles.quoteIcon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <p className={styles.info}>{text}</p>
      <div>
        <button className={styles.prevBtn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles.nextBtn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles.randomBtn} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
