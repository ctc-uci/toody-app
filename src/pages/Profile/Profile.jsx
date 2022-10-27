import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  
  const listOfStats = stats.map(aStat =>
    <div key={aStat.description} className='statgroup'>
      <p className='number'>{aStat.number}</p>
      <p className='description'>{aStat.description}</p>
    </div>
  );

  return (
    <div className="profile-page">
      {/* TODO:
      Complete the profile page here.
      For the profile picture, use the avatar placeholder image that has
      already been imported for you on line 3.
      For the name & stats to display, use the props (firstName, lastName, and stats)
      that have already been declared. */
      }
      <div id='circle'>
        <img src={person} alt="profile picture"></img>
      </div>
      <div className="text">
        <h1 className='name'>
          {firstName} {lastName}
        </h1>
        <div className='stats'>{listOfStats}</div>
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
