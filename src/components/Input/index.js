import React, {forwardRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Cleave from 'cleave.js';
import styles from './index.scss';

const Input = forwardRef(
  ({label, error, id, type, onChange, ...props}, ref)=> {
    const [focused, setFocused] = useState(false);

    useEffect(()=> {
      if (type === 'amount') {
        const cleave = new Cleave(`#${id}`, {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand'
        });

        return ()=> cleave.destroy();
      }
    }, []);

    return (
      <div className={styles.inputGroup}>
        {label && <label htmlFor={id}>{label}</label>}
        <div className={styles.textbox}>
          <input
            id={id}
            className={styles.input}
            {...props}
            ref={ref}
            type={type === 'amount' ? 'text' : type}
            onChange={({target})=> onChange(target.value)}
            onFocus={()=> setFocused(true)}
            onBlur={()=> setFocused(false)}
          />
          {error && <p className={styles.error}>{error.message}</p>}
          <div
            className={
              focused
                ? `${styles.border} ${styles.borderFocused}`
                : styles.border
            }
          />
        </div>
      </div>
    );
  }
);
Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
