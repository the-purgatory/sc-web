import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Validator from '__UTILS/validator';

import {
  Input,
  Button,
  LinkButton,
  Loader,
  ErrorBox,
  Seperator,
  Box
} from '__COMPONENTS/atoms';

const Form = styled.form`
  width: 100%;
`;

const VALIDATION_RULES = {
  username: {
    isRequired: true,
    isEmail: true
  },
  password: {
    minLength: 6,
    maxLength: 15,
    isRequired: true
  }
};

/**
 *
 * @todo if field is not required
 * - we still need to change it once to validate
 * - or we can set initial validation value to true
 * - then what is the requirement for it to be in Validator
 *
 * @todo Scope this functionality out
 */
const SigninForm = ({ error, isLoading, tryLogin, switchPanel }) => {
  const [username, setUsername] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [showError, setShowError] = useState(false);

  const onChange = (val, type) => {
    switch (type) {
      case 'username': {
        setUsername(val);
        setIsValidUsername(Validator(val, VALIDATION_RULES.username));
        break;
      }
      case 'password': {
        setPassword(val);
        setIsValidPassword(Validator(val, VALIDATION_RULES.password));
        break;
      }
      default:
    }
  };

  const onBlur = (type) => {
    switch (type) {
      case 'username': {
        setIsValidUsername(Validator(username, VALIDATION_RULES.username));
        break;
      }
      case 'password': {
        setIsValidPassword(Validator(password, VALIDATION_RULES.password));
        break;
      }
      default:
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isValidUsername || !isValidPassword) {
      setShowError(true);
      return;
    }

    tryLogin({
      username,
      password
    });
  };

  useEffect(() => {
    setShowError(!!error);
  }, [error]);

  if (isLoading) {
    return <Loader color='indigo.0' />;
  }

  return (
    <Box width={30}>
      <Form onSubmit={onSubmit}>
        <Input
          label='Email'
          isValid={showError ? isValidUsername : true}
          inputProps={{
            value: username,
            type: 'email',
            onChange: (val) => onChange(val, 'username'),
            onBlur: () => onBlur('username'),
            autoFocus: true
          }}
          mb={3}
        />
        <Input
          label='Password'
          isValid={showError ? isValidPassword : true}
          inputProps={{
            value: password,
            type: 'password',
            onChange: (val) => onChange(val, 'password'),
            onBlur: () => onBlur('password')
          }}
          mb={4}
        />
        <Button text='Sign In' onClick={onSubmit} minWidth={15} />
        {error && showError && <ErrorBox text={error} />}
      </Form>
      <Seperator lineColor='indigo.2' text='or' />
      <LinkButton text='Sign Up' onClick={() => switchPanel('sign_up')} />
    </Box>
  );
};

SigninForm.propTypes = {
  tryLogin: PropTypes.func,
  switchPanel: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default SigninForm;
