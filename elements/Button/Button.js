/* REACT */
import React from 'react';
import PropTypes from 'prop-types';

/* STYLES */
import styles from './Button.module.css';

/**
 *
 * @param children
 * @param onClick
 * @param disabled
 * @returns {*}
 * @constructor
 */
const Button = ({children, onClick, disabled}) => {
  return <div onClick={onClick} className={disabled ? styles.buttonDisabled : styles.button}>
    {children}
  </div>
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button;
