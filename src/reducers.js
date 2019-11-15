import { combineReducers } from 'redux';
import loginReducer from './v1/reducers/login';


export default combineReducers({
  loginData: loginReducer,
});
