import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// import Stat from '../../components/Stat/Stat'
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      <div className='image-background'>
        <img className="person" src={person}></img>
      </div>

      <div className="text">
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="stats">
          <div className="stats-numbers">
            {stats.map(stat => {
              return <div key={stat.number}>{stat.number}</div>;
            })}
          </div>
          <div className="stats-descriptions">
            {stats.map(stat => {
              return <div key={stat.description}>{stat.description}</div>;
            })}
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
