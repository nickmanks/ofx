import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import styles from './index.scss';
import 'react-phone-input-2/lib/style.css';

const Phone = ({id, label, value, onChange})=> {
  const [focused, setFocused] = useState(false);

  return (
    <div className={styles.inputGroup}>
      {label && <label htmlFor={id}>{label}</label>}
      <PhoneInput
        id={id}
        country={'au'}
        value={value}
        onChange={(phone)=> onChange(phone)}
        containerClass={
          focused
            ? `${styles.container} ${styles.containerFocused}`
            : styles.container
        }
        inputClass={styles.input}
        buttonClass={styles.flag}
        dropdownClass={styles.list}
        onFocus={()=> setFocused(true)}
        onBlur={()=> setFocused(false)}
      />
    </div>
  );
};
Phone.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Phone;
