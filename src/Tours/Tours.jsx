import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
