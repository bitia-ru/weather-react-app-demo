import { actionTypes } from '../actions/login';


const loginReducer = (state = {}, action) => {
  switch (action.type) {
  case actionTypes.SET_LOGIN_REQUESTED:
    return {
      login: action.login,
    };
  case actionTypes.SET_LOGOUT_REQUESTED:
    return {};
  default:
    return state;
  }
};

export default loginReducer;
