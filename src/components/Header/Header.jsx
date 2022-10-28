import React from 'react';
import toody from '../../images/toody.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div id="toody-logo">
        <img src={toody} />
        <p id="toody-logo-text">Toody</p>
      </div>

      <div id="my-profile">
        <a href="/profile" id="my-profile-link">My Profile</a>
      </div>
    </div>
  );
};

export default Header;
