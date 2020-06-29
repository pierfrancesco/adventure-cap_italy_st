import React from 'react';
import styles from './Modal.module.css';

import PropTypes from 'prop-types';

/* MODELS */
import Texts from '../../models/Texts';
import Button from '../Button';

/* CONTROLLERS */
import { allFirstCharsCapital } from '../../controllers/UtilsManager';

/**
 *
 * @param message
 * @param closeModal
 * @returns {*}
 * @constructor
 */
const Modal = ({message, closeModal}) => {
  return <div className={styles.modalContainer}>
    <div className={styles.modalContent}>
      <div>
        {allFirstCharsCapital(message)}
      </div>
      <div>
        <Button onClick={closeModal}>{allFirstCharsCapital(Texts.en.OK)}</Button>
      </div>
    </div>
  </div>
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;


