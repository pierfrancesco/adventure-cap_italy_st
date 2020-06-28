import React from 'react';
import styles from './Profile.module.css';

const Profile = ({name, profilePic}) => {
  return <div className={styles.profile}>
    <img src={profilePic} alt={"Profile Pic"}/>
    <p>{name}</p>
  </div>
}

export default Profile;
