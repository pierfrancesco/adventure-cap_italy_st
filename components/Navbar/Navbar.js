import React from 'react';
import styles from './Navbar.module.css';
import PropTypes from 'prop-types'

/* ELEMENTS */
import Profile from '../../elements/Profile';
import Money from '../../elements/Money';

/**
 *
 * @param name
 * @param profilePic
 * @param money
 * @returns {*}
 * @constructor
 */
const Navbar = ({name, profilePic, money}) => {
  return <div className={styles.navbar}>
    <Profile name={name} profilePic={profilePic}/>
    <Money money={money}/>
  </div>
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
};

export default Navbar;
