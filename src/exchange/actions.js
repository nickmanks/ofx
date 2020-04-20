import {getQuote} from '#src/api/exchange';

// Simple Actions

export const setTo = (to)=> ({
  type: 'exchange/set-to',
  to
});

export const setFrom = (from)=> ({
  type: 'exchange/set-from',
  from
});

export const setAmount = (amount)=> ({
  type: 'exchange/set-amount',
  amount
});

export const setExchange = (exchange)=> ({
  type: 'exchange/set-exchange',
  exchange
});

export const setRate = (rate)=> ({
  type: 'exchange/set-rate',
  rate
});

export const setFetching = (fetching)=> ({
  type: 'exchange/set-fetching',
  fetching
});

export const clearExchange = ()=> ({
  type: 'exchange/clear'
});

// Thunk Actions

export const fetchQuote = (
    {value: fromValue},
    {value: toValue},
    amount
)=> async (dispatch)=> {
  dispatch(setFrom(fromValue));
  dispatch(setTo(toValue));
  dispatch(setAmount(amount));

  dispatch(setFetching(true));

  try {
    const {rate, exchange} = await getQuote(fromValue, toValue, amount);

    dispatch(setRate(rate));
    dispatch(setExchange(exchange));
  } catch (err) {
    // TODO error handling
    dispatch(setFetching(false));
  }

  dispatch(setFetching(false));
};
