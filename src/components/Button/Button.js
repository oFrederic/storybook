import React from 'react';

import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...rest }) => {
  const classes = `${styles.button} ${styles[variant]}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
