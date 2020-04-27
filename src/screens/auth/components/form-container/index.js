import React from 'react';

import { useQuery } from '__UTILS';
import { Box } from '__COMPONENTS/atoms';
import { SigninForm, SignupForm } from '__COMPONENTS/organisms';

const AuthForm = () => {
  const activeView = useQuery().get('main_panel');

  let content = null;
  switch (activeView) {
    case 'sign_up':
      content = <SignupForm />;
      break;
    default:
      content = <SigninForm />;
  }

  return <Box>{content}</Box>;
};

export default AuthForm;
