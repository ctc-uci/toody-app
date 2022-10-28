import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ name, statistics }) => {
  return <p>{name} : {statistics}</p>;
};

Stat.propTypes = {
  statistics: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Stat;
