import React from 'react';
import toody from '../../images/toody.svg';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/*  TODO:
        You will need to complete this component. The header is the
        "navbar" that spans the top of the page and contains the 'Toody" logo
        at the top left and the "Profile" link at the top right. The logo
        has already been imported for you (see line 2). The completed header
        should route the user to the Profile page correctly. */
        
      }
      <img id="toodyPic" src={toody}></img>
      <p id="text">Toody</p>
      <p id="profile">
        <Link to="/profile" id="link">My Profile</Link>
      </p>
    </div>
  );
};

export default Header;
