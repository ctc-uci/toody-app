import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
import styles from './Profile.module.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className={styles['profile-page']}>
      <div className={styles.avatar}>
        <img src={person} />
      </div>
      <div className={styles['profile-info']}>
        <div className={styles.name}>
          {firstName} {lastName}
        </div>
        <div className={styles.stats}>
          {stats.map((s, index) => (
            <div className={styles.stat} key={index}>
              <div className={styles['stat-number']}>{s.number}</div>
              <div className={styles['stat-description']}>{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Profile;
