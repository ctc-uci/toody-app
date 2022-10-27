import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      {/* TODO:
      Complete the profile page here.
      For the profile picture, use the avata placeholder image that has
      already been imported for you on line 3.
      For the name & stats to display, use the props (firstName, lastName, and stats)
      that have already been declared. */}
      <img src={person} className="pfp" />
      <div className="person_name">
        {firstName} {lastName}
      </div>
      <div className="stats_container">
        {stats.map(stat => (
          <div key="stat.description" className="stats_box">
            <p className="stats_numbers">{stat.number}</p>
            <p className="stats_description">{stat.description}</p>
          </div>
        ))}
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
