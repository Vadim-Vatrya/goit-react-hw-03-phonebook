// import { Component } from 'react';
import { useState, } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './ContactForm.module.scss';



const ContactForm  = ({onSubmit}) => {

   
const [name, setName] = useState('');
const [number, setNumber] = useState('');


const handleChange = e => {
  const { name, value } = e.currentTarget;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
  }
};

  const handleSubmit = event => {
    event.preventDefault();
      onSubmit({name, number});
    reset();
  };

  const reset = () => {
       setName('');
    setNumber('');
  };

 

    return (
      <form className={styles.form} onSubmit={handleSubmit} >
        <label className={styles.formLabel} >
          Name
          <input
            type="text"
            value={name}
            name="name"
            className={styles.formInput}
            placeholder="Enter name"
            onChange={handleChange}
            
          />
        </label>
        <label className={styles.formLabel} >
          Number
          <input
            type="tel"
            value={number}
            name="number"
            className={styles.formInput}
            placeholder="Enter contact"
            onChange={handleChange}
           
          />
        </label>
        <Button />
      </form>
    );
  }



ContactForm.propTypes = {
  
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;