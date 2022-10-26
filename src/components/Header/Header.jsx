import React from 'react';
import toody from '../../images/toody.svg';
import { Link } from 'react-router-dom';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img style={{ position: 'relative', top: '40%', left: '4%' }} src={toody} />
      <div className="logoName">
        <p style={{ fontSize: '25px' }}>Toody</p>
      </div>
      <Link
        style={{
          position: 'absolute',
          marginLeft: '87%',
          top: '48%',
          textDecoration: 'none',
          color: 'white',
        }}
        to="/profile"
      >
        My Profile
      </Link>
    </div>
  );
};

export default Header;
