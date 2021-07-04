import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { validator } from '__UTILS/form';

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
  email: {
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
 * - then what is the requirement for it to be in validator
 *
 * @todo Scope this functionality out
 */
const SigninForm = ({
  error,
  isLoading,
  tryLogin,
  switchPanel,
  clearAPIErrors
}) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [showError, setShowError] = useState(false);

  const onChange = (val, type) => {
    switch (type) {
      case 'email': {
        setEmail(val);
        setIsValidEmail(validator(val, VALIDATION_RULES.email));
        break;
      }
      case 'password': {
        setPassword(val);
        setIsValidPassword(validator(val, VALIDATION_RULES.password));
        break;
      }
      default:
    }
  };

  const onBlur = (type) => {
    switch (type) {
      case 'email': {
        setIsValidEmail(validator(email, VALIDATION_RULES.email));
        break;
      }
      case 'password': {
        setIsValidPassword(validator(password, VALIDATION_RULES.password));
        break;
      }
      default:
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword) {
      clearAPIErrors();
      setShowError(true);
      return;
    }

    tryLogin({
      email,
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
          isValid={showError ? isValidEmail : true}
          inputProps={{
            value: email,
            type: 'email',
            onChange: (val) => onChange(val, 'email'),
            onBlur: () => onBlur('email'),
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
  clearAPIErrors: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default SigninForm;
