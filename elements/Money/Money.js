import React from 'react';
import styles from './Money.module.css';

/**
 *
 * @param number
 * @returns {string}
 */
const addCommasHelper = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 *
 * @param money
 * @param currency
 * @returns {*}
 * @constructor
 */
const Money = ({money = 0, currency = '$'}) => {
  return <div className={styles.money}>
    <p>{addCommasHelper(money)} {currency}</p>
  </div>
}

export default Money;
