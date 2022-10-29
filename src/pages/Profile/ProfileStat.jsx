import React from 'react';
import PropTypes from 'prop-types';
import './ProfileStat.css';

const ProfileStat = ({ desc, num }) => {
  return (
    <div className="profile-stat">
      <p className="profile-stat-num">{num}</p>
      <p className="profile-stat-desc">{desc}</p>
    </div>
  );
};

ProfileStat.propTypes = {
  desc: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
};

export default ProfileStat;
