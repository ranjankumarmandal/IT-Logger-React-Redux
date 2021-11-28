import React from 'react';
import PropTypes from 'prop-types';

const Preloader = (props) => {
  return (
    <div className='progress blue lighten-4'>
      <div className='indeterminate blue'></div>
    </div>
  );
};

Preloader.propTypes = {};

export default Preloader;
