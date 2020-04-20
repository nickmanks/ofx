import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import numeral from 'numeral';
import Bounce from '#src/components/Bounce';
import CountUp from '#src/components/CountUp';
import {clearExchange} from '#src/exchange/actions';
import {goTo} from '#src/history';
import styles from './index.scss';

const timeout = 2800;

const Result = ({fetching, amount, rate, exchange, from, to, onNewQuote})=> {
  const [ready, setReady] = useState(false);

  useEffect(()=> {
    if (!fetching && exchange) {
      setTimeout(()=> {
        setReady(true);
      }, timeout);
    }
  }, [fetching, exchange]);

  return (
    <div className={styles.result}>
      <h1>Quick Quote</h1>
      <div className={styles.container}>
        {fetching && (
          <div>
            <h4>We're fetching the best exchange rate</h4>
            <Bounce />
          </div>
        )}
        {!fetching && rate && (
          <CountUp start={0} end={rate} from={from} to={to} />
        )}
        {ready && (
          <div>
            <h2 className={`${styles.value} ${styles.fadeIn}`}>
              {from} ${amount}
            </h2>
            <h2 className={`${styles.value} ${styles.tada}`}>
              {to} ${numeral(exchange).format('0,0.00')}
            </h2>
            <button className={styles.button} onClick={()=> onNewQuote()}>
              Start New Quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
Result.propTypes = {
  fetching: PropTypes.bool,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  exchange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  from: PropTypes.string,
  to: PropTypes.string,
  onNewQuote: PropTypes.func
};

const mapStateToProps = ({exchange})=> ({
  fetching: exchange.fetching,
  amount: exchange.amount,
  rate: exchange.rate,
  exchange: exchange.exchange,
  from: exchange.from,
  to: exchange.to
});

const mapDispatchToProps = (dispatch)=> ({
  onNewQuote: ()=> {
    goTo('/');
    dispatch(clearExchange());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
