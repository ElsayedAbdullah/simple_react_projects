import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import styles from './ToursApp.module.css';

// url for api
const url = 'https://course-api.com/react-tours-project';

function ToursApp() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (tour) => {
    const filteredTours = tours.filter((t) => t.id !== tour.id);
    setTours(filteredTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className={styles.btn} onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default ToursApp;
