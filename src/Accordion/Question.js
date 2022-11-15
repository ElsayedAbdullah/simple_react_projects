import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from './Accordion.module.css';
const Question = ({ question }) => {
  const [show, setShow] = useState(false);
  return (
    <article className={styles.question}>
      <header>
        <h4>{question.title}</h4>
        <button
          className={styles.btn}
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {show && <p>{question.info}</p>}
    </article>
  );
};

export default Question;
