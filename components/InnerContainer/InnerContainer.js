import React from 'react';
import styles from './InnerContainer.module.css';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const InnerContainer = ({children}) => {
  return <div className={styles.innerContainer}>
    {children}
  </div>
}

export default InnerContainer;
