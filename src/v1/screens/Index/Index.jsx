import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setLogoutRequested as performLogout } from '../../actions/login';
import { performLogin } from '../../storage/login';


const Index = ({ loginData, performLogin, performLogout }) => (
  loginData.login ?
    <> Hello, {loginData.login}!
      {' '}
      <a onClick={() => performLogout()}>[Logout]</a>
    </>
    :
    <>
      Hello, world!
      {' '}
      <a onClick={() => performLogin('pupkine', '123456')}>
        [Login as pupkine]
      </a>
    </>
);

Index.propTypes = {
  loginData: PropTypes.object,
  performLogin: PropTypes.func.isRequired,
  performLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginData: state.loginData,
});

const mapDispatchToProps = dispatch => ({
  performLogin: (l, p) => dispatch(performLogin(l, p)),
  performLogout: () => dispatch(performLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
