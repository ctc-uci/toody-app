import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {

  return (
    <div className="profile-page">
      <div className="pfp-container">
        <img src={person} className="pfp" />
      </div>

      <div>
        <p className="name">
          {firstName} {lastName}
        </p>
        {stats.map(s => (
          <div key={s.description} className="stats">
            <h4 className="number">{s.number}</h4>
            <p className="description">{s.description}</p>
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
