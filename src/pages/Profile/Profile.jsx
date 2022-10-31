import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
// ^^ blank avatar for profile pic, uncomment the above line to use
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
      <div className="profile-page">
          <div className='avatar'>
            <img src={person}/>
          </div>
          <div>
            <p id="name">{firstName} {lastName}</p>
          </div>
          <div>
            <div className='stats'>
            <div className='stats-value'>
                {stats.map((stat, index) => {
                  return <div key={index}>{stat.number}</div>
                })
                }
              </div>
            <div className='desc'>
              {stats.map((stat, index) => {
                  return <div key={index}>{stat.description}</div>
                })
                }
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
