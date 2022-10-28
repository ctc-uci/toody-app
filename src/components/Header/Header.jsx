import React from 'react';
import { NavLink } from "react-router-dom";

import toody from '../../images/toody.svg';
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        {/*  TODO:
          You will need to complete this component. The header is the
          "navbar" that spans the top of the page and contains the 'Toody" logo
          at the top left and the "Profile" link at the top right. The logo
          has already been imported for you (see line 2). The completed header
          should route the user to the Profile page correctly. */}
          <div className="leftheader">
            <img src={toody} alt="logo"/>
            <p>Toody</p>
          </div>
          <div className="rightheader">
            <NavLink to="/profile" className="navlink">
              My Profile
            </NavLink> 
          </div>
      </div>
    </div>

  );
};

export default Header;
