import React from 'react';
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

export default Button;
