import reducer from '#src/utils/reducer';

export const DefaultState = {
  to: null,
  from: null,
  amount: null,
  exchange: null,
  rate: null,
  fetching: false
};

export default reducer(DefaultState, {
  'exchange/set-to': (state, {to})=> ({
    ...state,
    to
  }),

  'exchange/set-from': (state, {from})=> ({
    ...state,
    from
  }),

  'exchange/set-amount': (state, {amount})=> ({
    ...state,
    amount
  }),

  'exchange/set-exchange': (state, {exchange})=> ({
    ...state,
    exchange
  }),

  'exchange/set-rate': (state, {rate})=> ({
    ...state,
    rate
  }),

  'exchange/clear': ()=> ({
    ...DefaultState
  }),

  'exchange/set-fetching': (state, {fetching})=> ({
    ...state,
    fetching
  })
});
