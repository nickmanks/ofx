import {
  setTo,
  setFrom,
  setAmount,
  setRate,
  setExchange,
  setFetching,
  clearExchange,
  fetchQuote
} from './actions';
import {getQuote} from '#src/api/exchange';
import {testStore} from '#src/testing/helpers';

jest.mock('#src/api/exchange', ()=> ({
  getQuote: jest.fn(()=> ({
    rate: 'test-rate',
    exchange: 'test-exchange'
  }))
}));

const defaultState = {
  to: null,
  from: null,
  amount: null,
  exchange: null,
  rate: null,
  fetching: false
};

const getExchange = ({getState})=> getState().exchange;

describe('Exchange Actions', ()=> {
  describe('Simple Actions', ()=> {
    it('setTo - sets to value in store', ()=> {
      const store = testStore();

      store.dispatch(setTo('AUD'));

      expect(getExchange(store).to).toBe('AUD');
    });

    it('setFrom - sets from value in store', ()=> {
      const store = testStore();

      store.dispatch(setFrom('AUD'));

      expect(getExchange(store).from).toBe('AUD');
    });

    it('setAmount - sets to value in store', ()=> {
      const store = testStore();

      store.dispatch(setAmount('23,000'));

      expect(getExchange(store).amount).toBe('23,000');
    });

    it('setRate - sets rate value in store', ()=> {
      const store = testStore();

      store.dispatch(setRate(0.754));

      expect(getExchange(store).rate).toBe(0.754);
    });

    it('setExchange - sets exchange value in store', ()=> {
      const store = testStore();

      store.dispatch(setExchange(16000));

      expect(getExchange(store).exchange).toBe(16000);
    });

    it('setFetching - sets fetching value in store', ()=> {
      const store = testStore();

      store.dispatch(setFetching(true));

      expect(getExchange(store).fetching).toBe(true);
    });

    it('clearExchange - returns state to default', ()=> {
      const store = testStore();

      store.dispatch(clearExchange());

      expect(getExchange(store)).toEqual(defaultState);
    });
  });

  describe('Thunk Actions', ()=> {
    // eslint-disable-next-line max-statements
    it('fetchQuote - calls getQuote and sets data in store', async ()=> {
      const store = testStore();

      store.dispatch(
        fetchQuote({value: 'test-from'}, {value: 'test-to'}, 'test-amount')
      );

      expect(store).toDispatch(setFrom('test-from'));
      expect(store).toDispatch(setTo('test-to'));
      expect(store).toDispatch(setAmount('test-amount'));
      expect(store).toDispatch(setFetching(true));

      await store.nextDispatch;

      expect(getQuote).toHaveBeenCalledWith(
        'test-from',
        'test-to',
        'test-amount'
      );

      expect(store).toDispatch(setRate('test-rate'));
      expect(store).toDispatch(setExchange('test-exchange'));
      expect(store).toDispatch(setFetching(false));
    });

    it('fetchQuote - does not throw error', async ()=> {
      // eslint-disable-next-line max-nested-callbacks
      getQuote.mockImplementationOnce(()=> {
        throw new Error();
      });

      const store = testStore();

      store.dispatch(
        fetchQuote({value: 'test-from'}, {value: 'test-to'}, 'test-amount')
      );

      expect(store).toDispatch(setFrom('test-from'));
      expect(store).toDispatch(setTo('test-to'));
      expect(store).toDispatch(setAmount('test-amount'));
      expect(store).toDispatch(setFetching(true));
      expect(store).not.toDispatch(setRate('test-rate'));
      expect(store).not.toDispatch(setExchange('test-exchange'));
      expect(store).toDispatch(setFetching(false));
    });
  });
});
