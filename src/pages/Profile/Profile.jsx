import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
import './Profile.css';
import ProfileStat from './ProfileStat';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      <div className="main-profile">
        <div className="avatar">
          <img src={person}></img>
        </div>
        <div className="profile-info">
          <h2>
            {firstName} {lastName}
          </h2>
          <div className="profile-stats">
            {stats.map(elem => (
              <ProfileStat desc={elem.description} num={elem.number} key={elem.description} />
            ))}
          </div>
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
