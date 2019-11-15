export const actionTypes = {
  SET_LOGIN_REQUESTED: 'SET_LOGIN_REQUESTED',
  SET_LOGOUT_REQUESTED: 'SET_LOGOUT_REQUESTED',
};

export const setLoginRequested = (login, password) => ({
  type: actionTypes.SET_LOGIN_REQUESTED,
  login,
  password,
});

export const setLogoutRequested = () => ({
  type: actionTypes.SET_LOGOUT_REQUESTED,
});
