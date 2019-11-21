import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { setLogoutRequested as performLogout } from '../../actions/login';
import { performLogin } from '../../storage/login';

import './index.css';


const Index = ({ loginData, performLogin, performLogout }) => (
  <MainLayout>
    {
      loginData.login ?
        <>
          Hello, {loginData.login}!
          {' '}
          <a onClick={() => performLogout()}>[Logout]</a>
        </>
        :
        <>
          Hello, world!
          {' '}
          <a onClick={() => performLogin('pupkine', '123456')}>[Login as pupkine]</a>
        </>
    }
  </MainLayout>
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
  performLogin: (login, password) => dispatch(performLogin(login, password)),
  performLogout: () => dispatch(performLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
