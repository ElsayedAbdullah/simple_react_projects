import React from 'react';
import Review from './Review';

import styles from './Review.module.css';

const Reviews = () => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;
