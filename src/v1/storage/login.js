import { setLoginRequested } from '../actions/login';


export const performLogin = (login, password) => (
  // This overengineering is for illustration of the concept.
  dispatch => dispatch(setLoginRequested(
    login,
    password,
  ))
);
