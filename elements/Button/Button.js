/* REACT */
import React from 'react';
import PropTypes from 'prop-types';

/* STYLES */
import styles from './Button.module.css';

/**
 *
 * @param children
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Button = ({children, onClick}) => {
  return <div onClick={onClick} className={styles.button}>
    {children}
  </div>
};

Button.propTypes = {
  onClick : PropTypes.func.isRequired
}

export default Button;
