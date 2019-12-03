import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ProfileModal from '../../layouts/ProfileModal';
import { setLogoutRequested as performLogout } from '../../actions/login';
import { performLogin } from '../../storage/login';
import withClickableEffect from '../../modules/clickable';
import withModals from '../../modules/modalable';

import './index.css';


class Index extends React.Component {
  modals() {
    return {
      profile: {
        controls: [],
        body: <ProfileModal />,
        hashRoute: true,
      },
    }
  }

  static propTypes = {
    loginData: PropTypes.object,
    performLogin: PropTypes.func.isRequired,
    performLogout: PropTypes.func.isRequired,
  };

  render() {
    const { loginData, performLogin, performLogout } = this.props;

    return (
      <MainLayout>
        {
          loginData.login ? <>
            Hello, {loginData.login}!
            {' '}
            <a onClick={() => performLogout()}>[Logout]</a>
          </> : <>
            <a onClick={() => this.openModal('profile', ['User'])}>Hello</a>, world!
            {' '}
            <a onClick={() => performLogin('pupkine', '123456')}>[Login as pupkine]</a>
          </>
        }
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData,
});

const mapDispatchToProps = dispatch => ({
  performLogin: (login, password) => dispatch(performLogin(login, password)),
  performLogout: () => dispatch(performLogout()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    R.pipe(
      withClickableEffect,
      withModals,
    )(Index),
  )
);
