import React from 'react';
import PropTypes from 'prop-types';
import Counter from 'react-countup';
import styles from './index.scss';

const CountUp = ({start, end})=> (
  <Counter
    start={start}
    end={end}
    duration={2.75}
    delay={0}
    separator=" "
    decimals={3}
    decimal="."
  >
    {({countUpRef})=> (
      <div className={styles.container}>
        <h2>Customer Rate</h2>
        <h1 ref={countUpRef} />
      </div>
    )}
  </Counter>
);
CountUp.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number
};

export default CountUp;
