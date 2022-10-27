import React from 'react';
import toody from '../../images/toody.svg';
import { Link } from 'react-router-dom';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={toody} alt="Toody Logo" className="toody_logo" />
      <p className="toody_text">Toody</p>
      <Link to="/profile" className="my_profile">
        My Profile
      </Link>
    </div>
  );
};

export default Header;
