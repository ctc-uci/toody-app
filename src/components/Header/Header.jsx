import React from 'react';
import toody from '../../images/toody.svg';
import {Link} from "react-router-dom";
// ^^ this is the Toody logo; uncomment he above line to use it
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      {/*  TODO:
        You will need to complete this component. The header is the
        "navbar" that spans the top of the page and contains the 'Toody" logo
        at the top left and the "Profile" link at the top right. The logo
        has already been imported for you (see line 2). The completed header
        should route the user to the Profile page correctly. */
        <><img src={toody} alt="Toody Logo"></img>
        <div className="myProfileLink">
          <Link to={"/profile"}> My Profile </Link>
        </div>
        <div className="logoText">
          <p>Toody</p>
        </div>
        </>
        }
    </div>
  );
};

export default Header;
