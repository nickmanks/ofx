import {combineReducers} from 'redux';
import authReducer from '#src/auth/reducer';
import exchangeReducer from '#src/exchange/reducer';

export default combineReducers({
  auth: authReducer,
  exchange: exchangeReducer
});
