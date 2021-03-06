import React from 'react';


import {createUseStyles} from 'react-jss'
// import styles from './Button.module.scss';

const useStyles = createUseStyles({
  button: {
    width: 120,
    padding: [5, 10],
    backgroundColor: 'rgb(104, 166, 218)',
    color: '#fff',
    fontWeight: 700,
    border: 'none',
    borderRadius: 4,
    boxShadow: '0 6px 6px -6px black',
    cursor: 'pointer',
    display:' inline-block',
    marginRight: 20,
  }
})

const Button = () => {
  const classes = useStyles();
  return (
    <button type='submit' className={classes.button}>
      Add contact
    </button>
  )
};

export default Button;