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
      For the profile picture, use the avatar placeholder image that has
      already been imported for you on line 3.
      For the name & stats to display, use the props (firstName, lastName, and stats)
      that have already been declared. */}
      <div className='flex-container'>
        <div className="picture-circle">
          <img className="center" src={person}></img>
        </div>
        <div className="text-container">
          <div className='text-col'>
            <div className='text-row'>
              {firstName} {lastName}
            </div>
            <div className='text-row'>
              <div className='text-numbers-font'>
                {stats[0]}
              </div>
            </div>
            <div className='text-row'>
              Cool Stat
            </div>

          </div>
          <div className='text-col'>
            <div className='text-row'>

            </div>
            <div className='text-row'>
              <div className='text-numbers-font'>
                {stats[1]}%
              </div>
            </div>
            <div className='text-row'>
              Another Cool Stat
            </div>

          </div>
          <div className='text-col'>
            <div className='text-row'>
            </div>
            <div className='text-row'>
              <div className='text-numbers-font'>
                {stats[2]}
              </div>
            </div>
            <div className='text-row'>
              Journal Entries
            </div>

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
