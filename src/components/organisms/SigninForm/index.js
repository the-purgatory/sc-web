import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Input, Button, LinkButton, Seperator, Box } from '__COMPONENTS/atoms';

const Form = styled.form`
  width: 100%;
`;

const SigninForm = ({ onShowLoader }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(username, password);
    onShowLoader && onShowLoader();
  };

  const changeView = () => history.push('?main_panel=sign_up');

  return (
    <Box width={30}>
      <Form onSubmit={onSubmit}>
        <Input
          label='Username'
          inputProps={{
            value: username,
            type: 'text',
            onChange: setUsername,
            autoFocus: true,
            autoFill: false
          }}
          mb={3}
        />
        <Input
          label='Password'
          inputProps={{
            value: password,
            type: 'password',
            onChange: setPassword
          }}
          mb={4}
        />
        <Button text='Sign In' onClick={onSubmit} minWidth={15} />
      </Form>
      <Seperator lineColor='indigo.2' text='or' />
      <LinkButton text='Sign Up' onClick={changeView} />
    </Box>
  );
};

SigninForm.propTypes = {
  onShowLoader: PropTypes.func
};

export default SigninForm;
