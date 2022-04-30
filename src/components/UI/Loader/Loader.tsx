import React from 'react';
import SpinnerIcon from '../../../assets/icons/spinner.svg';
import './loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <SpinnerIcon />
    </div>
  );
};

export default Loader;