import React, { useState } from 'react';
import data from './accordion-data';
import styles from './Accordion.module.css';
import Question from './Question';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div className={styles.main}>
        <div className='title'>
          <h2 className={styles.textWhite}>Accordion</h2>
          <div className={`${styles.bgWhite} underline`}></div>
        </div>
        <div className={styles.container}>
          <h3>questions and answers about login</h3>
          <section className={styles.info}>
            {questions.map((question) => (
              <Question key={question.id} question={question} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Accordion;
