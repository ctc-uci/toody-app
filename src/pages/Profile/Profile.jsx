import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      <div className="avatar">
        <img src={person} />
      </div>
      <div>
        <div id="name">{firstName} {lastName}</div>
      </div>
      <div className="stats">
        <div id="numbers">{stats.map((s, index) => <div key={index}>{s.number}</div>)}</div>
        <div id="descriptions">{stats.map((s, index) => <div key={index}>{s.description}</div>)}</div>
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
