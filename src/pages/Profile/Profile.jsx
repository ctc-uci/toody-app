import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';
import Header from '../../components/Header/Header.jsx'

<Header/>
const Profile = ({ firstName, lastName, stats }) => {
  return (  
    <div className="profile-page">
      {/* TODO:
      Complete the profile page here.
      For the profile picture, use the avatar placeholder image that has
      already been imported for you on line 3.
      For the name & stats to display, use the props (firstName, lastName, and stats)
      that have already been declared. */}
      
      <img className="pic" src={person} alt="profile pic"></img>
        <div className="info">
        
          {firstName} {lastName}
        </div>
            <div className="nums">
              {stats.map(s => (
                  <div key={s.number}>{s.number}</div>
                  )
                )
              }
            </div>
              <div className="desc">
                {stats.map(s => (
                    <div key={s.description}>{s.description}</div>
                    )
                  )
                }
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
