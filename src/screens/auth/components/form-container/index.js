import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { tryLogin, tryRegister, hideErrors } from '__STORE/auth/actions';
import { useQuery } from '__UTILS';

import { Box } from '__COMPONENTS/atoms';
import { SigninForm, SignupForm } from '__COMPONENTS/organisms';

const AuthForm = ({ error, isLoading, hideErrors, tryLogin, tryRegister }) => {
  const activeView = useQuery().get('main_panel');
  const history = useHistory();
  const switchPanel = (panel) => history.push(`?main_panel=${panel}`);

  useEffect(() => {
    hideErrors();
  }, [hideErrors, activeView]);

  let content = null;
  switch (activeView) {
    case 'sign_up':
      content = (
        <SignupForm
          tryRegister={tryRegister}
          switchPanel={switchPanel}
          error={error}
          isLoading={isLoading}
          clearAPIErrors={hideErrors}
        />
      );
      break;
    default:
      content = (
        <SigninForm
          tryLogin={tryLogin}
          switchPanel={switchPanel}
          error={error}
          isLoading={isLoading}
          clearAPIErrors={hideErrors}
        />
      );
  }

  return <Box>{content}</Box>;
};

AuthForm.propTypes = {
  tryLogin: PropTypes.func,
  tryRegister: PropTypes.func,
  hideErrors: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryLogin: (data) => dispatch(tryLogin(data)),
    tryRegister: (data) => dispatch(tryRegister(data)),
    hideErrors: (data) => dispatch(hideErrors(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
