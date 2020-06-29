import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types'

/**
 *
 * @param name
 * @param profilePic
 * @returns {*}
 * @constructor
 */
const Profile = ({name, profilePic}) => {
  return <div className={styles.profile}>
    <img src={profilePic} alt={"Profile Pic"}/>
    <p>{name}</p>
  </div>
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
};

export default Profile;
