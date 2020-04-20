import {combineReducers} from 'redux';
import authReducer from '#src/auth/reducer';
import exchangeReducer from '#src/exchange/reducer';
import userReducer from '#src/user/reducer';

export default combineReducers({
  auth: authReducer,
  exchange: exchangeReducer,
  user: userReducer
});
