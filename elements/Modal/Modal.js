import React from 'react';
import styles from './Modal.module.css';

import Button from '../Button';

const Modal = ({message, closeModal}) => {
  return <div className={styles.modalContainer}>
    <div className={styles.modalContent}>
      <div>
        {message}
      </div>
      <div>
        <Button onClick={closeModal}>Got it</Button>
      </div>

    </div>
  </div>

};

export default Modal;


