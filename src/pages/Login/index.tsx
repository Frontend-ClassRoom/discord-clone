import React, { FC } from 'react';
import { LoginPage } from './Styled';
import { auth, provider } from '../../utils/firebase';

const Login: FC = () => {
  const SignIn = (e: any) => {
    //do google Login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginPage.Panel>
      <LoginPage.LogoBox>
        <LoginPage.Logo src="https://upload.wikimedia.org/wikipedia/ko/thumb/6/62/%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.svg/2880px-%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.svg.png" />
      </LoginPage.LogoBox>
      <LoginPage.SignInButton onClick={SignIn}>Sign In</LoginPage.SignInButton>
    </LoginPage.Panel>
  );
};
export default Login;
