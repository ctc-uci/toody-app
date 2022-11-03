import React from 'react';
import toody from '../../images/toody.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['toody-logo']}>
        <img src={toody} />
        <p className={styles['toody-logo-text']}>Toody</p>
      </div>

      <div className={styles['my-profile']}>
        <a href="/profile" className={styles['my-profile-link']}>
          My Profile
        </a>
      </div>
    </div>
  );
};

export default Header;
