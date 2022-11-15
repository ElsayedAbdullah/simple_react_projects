import React, { useState } from 'react';
import styles from './ToursApp.module.css';

const Tour = ({ tour, deleteTour }) => {
  const { image, info, price, name } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={styles.singleTour}>
      <img src={image} alt={name} />
      <footer>
        <div className={styles.tourInfo}>
          <h4>{name}</h4>
          <h4 className={styles.tourPrice}>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        <button className={styles.deleteBtn} onClick={() => deleteTour(tour)}>
          Delete
        </button>
      </footer>
    </article>
  );
};

export default Tour;
