import React from 'react';
import styles from './OuterContainer.module.css';

/* COMPONENTS */
import InnerContainer from '../InnerContainer';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const OuterContainer = ({children}) => {
  return <div className={styles.outerContainer}>
    <InnerContainer>
      {children}
    </InnerContainer>
  </div>
};

export default OuterContainer;
