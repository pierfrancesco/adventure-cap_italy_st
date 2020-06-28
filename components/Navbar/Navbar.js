import React from 'react';
import styles from './Navbar.module.css';

/* ELEMENTS */
import Profile from '../../elements/Profile';
import Money from '../../elements/Money';

const Navbar = ({name, profilePic, money}) => {
  return <div className={styles.navbar}>
    <Profile name={name} profilePic={profilePic}/>
    <Money money={money}/>
  </div>

}

export default Navbar;
