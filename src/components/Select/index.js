import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import {getClassName} from './helpers';
import styles from './index.scss';

const Select = ({placeholder, options, error, zIndex, ...props})=> {
  const [focused, setFocused] = useState(false);

  return (
    <div className={getClassName(error, focused)}>
      <ReactSelect
        {...props}
        placeholder={placeholder}
        options={options}
        styles={{
          container: ()=> ({
            color: '#1e1407',
            boxSizing: 'border-box',
            fontSize: '1.8rem',
            outline: 'none',
            border: 'none',
            zIndex,
            position: 'relative',
            width: '100%',
            marginBottom: '1rem',
            marginTop: '1rem'
          }),
          control: (provided, {isFocused})=> ({
            ...provided,
            borderRadius: '5px',
            borderColor: isFocused ? '#f79e37' : 'hsl(0,0%,80%)',
            boxShadow: 'none',
            [':hover']: {
              ...provided[':hover'],
              borderColor: isFocused ? '#f79e37' : 'hsl(0,0%,80%)',
              boxShadow: 'none'
            }
          }),
          valueContainer: (provided)=> ({
            ...provided,
            zIndex,
            position: 'relative',
            padding: '.3rem 1rem',
            cursor: 'pointer'
          }),
          indicatorsContainer: (provided)=> ({
            ...provided,
            cursor: 'pointer'
          }),
          option: (provided, {isSelected})=> ({
            ...provided,
            backgroundColor: isSelected ? '#f79e37' : '#fff',
            cursor: 'pointer',
            ':hover': {
              ...provided[':hover'],
              backgroundColor: '#ffc98a'
            }
          }),
          placeholder: ()=> ({
            color: '#e0e0e0'
          })
        }}
        onFocus={()=> setFocused(true)}
        onBlur={()=> setFocused(false)}
      />
      {error && <p className={styles.error}>{error.message}</p>}
      <div
        className={
          focused ? `${styles.border} ${styles.borderFocused}` : styles.border
        }
      />
    </div>
  );
};
Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  zIndex: PropTypes.number
};

export default Select;
