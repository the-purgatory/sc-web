import React, { useState } from 'react';

import { useQuery } from '__UTILS';

import { Loader, Box } from '__COMPONENTS/atoms';
import { SigninForm, SignupForm } from '__COMPONENTS/organisms';

const AuthForm = () => {
  const activeView = useQuery().get('main_panel');
  const [loading, setLoading] = useState(false);

  let content = null;
  switch (activeView) {
    case 'sign_up':
      content = <SignupForm onShowLoader={() => setLoading(true)} />;
      break;
    default:
      content = <SigninForm onShowLoader={() => setLoading(true)} />;
  }

  return <Box>{loading ? <Loader color='indigo.0' /> : content}</Box>;
};

export default AuthForm;
