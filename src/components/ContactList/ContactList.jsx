import React from 'react';
import PropTypes from 'prop-types';

import {createUseStyles} from 'react-jss';
// import styles from './ContactList.module.scss';


const useStyles = createUseStyles({
list:{
  marginTop: 20,
},

  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 200,
    '&:not(last-child)': {
      marginBottom: 5,
    },
  },

  name: {
    marginRight: 10,
  },
  
  number: {
    color: 'cornflowerblue',
    marginRight: 10,
    fontSize: 14,
  },
  
  deleteButton: {
    backgroundColor: '#fff',
    color: 'rgba(118, 138, 177, 0.952)',
    border: ['1px', 'solid', 'rgb(173, 70, 70)'],
    borderRadius: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
     
    }
  }
})


const ContactList = ({ contacts, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={classes.listItem}>
            <span className={classes.name}>{name}:</span>
            <span className={classes.number}>{number}</span>
            <button className={classes.deleteButton} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default  ContactList;