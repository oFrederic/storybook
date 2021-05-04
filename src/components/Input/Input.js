import React from 'react';
import styles from './Input.module.css';

const Input = ({ size = 'medium', ...rest }) => {
  const classes = `${styles.input} ${styles[size]}`;

  return <input className={classes} {...rest}></input>;
};

export default Input;
