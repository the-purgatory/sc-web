import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import validator from '__UTILS/form';

import {
  Input,
  Button,
  LinkButton,
  ErrorBox,
  Loader,
  Seperator,
  Box
} from '__COMPONENTS/atoms';

const Form = styled.form`
  width: 100%;
`;

const VALIDATION_RULES = {
  username: {
    isRequired: true,
    minLength: 3,
    maxLength: 15
  },
  password: {
    minLength: 6,
    maxLength: 15,
    isRequired: true
  },
  email: {
    isRequired: true,
    isEmail: true
  },
  phone: {
    minLength: 10,
    maxLength: 10,
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
const SignupForm = ({
  error,
  isLoading,
  tryRegister,
  switchPanel,
  clearAPIErrors
}) => {
  const [username, setUsername] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  const [showError, setShowError] = useState(false);

  const onChange = (val, type) => {
    switch (type) {
      case 'username': {
        setUsername(val);
        setIsValidUsername(validator(val, VALIDATION_RULES.username));
        break;
      }
      case 'password': {
        setPassword(val);
        setIsValidPassword(validator(val, VALIDATION_RULES.password));
        break;
      }
      case 'email': {
        setEmail(val);
        setIsValidEmail(validator(val, VALIDATION_RULES.email));
        break;
      }
      case 'phone': {
        setPhone(val);
        setIsValidPhone(validator(val, VALIDATION_RULES.phone));
        break;
      }
      default:
    }
  };

  const onBlur = (type) => {
    switch (type) {
      case 'username': {
        setIsValidUsername(validator(username, VALIDATION_RULES.username));
        break;
      }
      case 'password': {
        setIsValidPassword(validator(password, VALIDATION_RULES.password));
        break;
      }
      case 'email': {
        setIsValidEmail(validator(email, VALIDATION_RULES.email));
        break;
      }
      case 'phone': {
        setIsValidPhone(validator(phone, VALIDATION_RULES.phone));
        break;
      }
      default:
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !isValidUsername ||
      !isValidPassword ||
      !isValidEmail ||
      !isValidPhone
    ) {
      clearAPIErrors();
      setShowError(true);
      return;
    }

    tryRegister({
      username,
      password,
      email,
      phone
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
          label='Username'
          isValid={showError ? isValidUsername : true}
          inputProps={{
            name: 'username',
            value: username,
            type: 'text',
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
            name: 'password',
            value: password,
            type: 'password',
            onChange: (val) => onChange(val, 'password'),
            onBlur: () => onBlur('password')
          }}
          mb={4}
        />
        <Input
          label='Email'
          isValid={showError ? isValidEmail : true}
          inputProps={{
            name: 'email',
            value: email,
            type: 'email',
            onChange: (val) => onChange(val, 'email'),
            onBlur: () => onBlur('email')
          }}
          mb={3}
        />
        <Input
          label='Phone'
          isValid={showError ? isValidPhone : true}
          inputProps={{
            name: 'phone',
            value: phone,
            type: 'tel',
            onChange: (val) => onChange(val, 'phone'),
            onBlur: () => onBlur('phone')
          }}
          mb={3}
        />
        <Button text='Sign Up' onClick={onSubmit} minWidth={15} />
        {error && showError && <ErrorBox text={error} />}
      </Form>
      <Seperator lineColor='indigo.2' text='or' />
      <LinkButton text='Sign In' onClick={() => switchPanel('sign_in')} />
    </Box>
  );
};

SignupForm.propTypes = {
  tryRegister: PropTypes.func,
  switchPanel: PropTypes.func,
  clearAPIErrors: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default SignupForm;
