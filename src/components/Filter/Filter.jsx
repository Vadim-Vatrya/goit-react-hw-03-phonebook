import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Filter.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 17,
    marginBottom: 15,
    fontWeight: 500,
  },
  
  input: {
    padding: 2,
    marginTop: 5,
    maxWidth: 190,
    height: 30,
    outline: 'none',
  textAlign: 'center',
    border: ['1px', 'solid', 'gray'],
    borderRadius: 5,
  }

})


const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.label}>Find contacts by name</h3>
      <input
        className={classes.input}
        type="text"
        placeholder="Search"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};


Filter.defaultProps = {
  value: '',
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;