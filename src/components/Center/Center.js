import React from 'react';

import styles from './Center.module.css';

const Center = ({ children }) => {
  const classes = styles.center;

  return <div className={classes}>{children}</div>;
};

export default Center;
