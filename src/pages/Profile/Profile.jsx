import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../../components/Stat/Stat.jsx';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      {/* TODO:
      Complete the profile page here.
      For the profile picture, use the avatar placeholder image that has
      already been imported for you on line 3.
      For the name & stats to display, use the props (firstName, lastName, and stats)
      that have already been declared. */}
      <img className="circle" src={person} alt="p" />
      <div className="body">
        <p>
          {firstName} {lastName}
        </p>
        <div className="stats">
          {stats.map(o => (
            <Stat key={o.toString()} name={o.description} statistics={o.number} />
          ))}
        </div>
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
