import React from 'react';
import styles from './BusinessList.module.css';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const BusinessesList = ({children}) => {
  return <div className={styles.BusinessList}>
    {children}
  </div>
};

export default BusinessesList;
