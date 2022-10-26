import React from 'react';
import toody from '../../images/toody.svg';
import { Link } from 'react-router-dom';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img style={{ position: 'absolute', top: '40%', left: '4%' }} src={toody} />
      </div>
      <p style={{ position: 'absolute', top: '18%', left: '7.5%', fontSize: '25px' }}>Toody</p>
      <Link
        style={{
          position: 'absolute',
          marginLeft: '90%',
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
