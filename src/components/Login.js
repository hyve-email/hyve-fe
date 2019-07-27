import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import Icon from './shared/Icon';
import HyveLogo from '../assets/hyve-logo.png';
import { Redirect } from 'react-router-dom';

// API
import UserService from '../services/user';

const Login = props => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const responseGoogle = async response => {
    const { Zi, googleId, profileObj } = response;
    const { access_token } = Zi;
    const { email, name, imageUrl } = profileObj;
    const data = { email, name, imageUrl, googleId };

    try {
      const response = await UserService.create(data);

      if (response.token) {
        // store accontID
        await localStorage.setItem('googleToken', access_token);
        await localStorage.setItem('googleId', googleId);
        await localStorage.setItem('name', name);
        await localStorage.setItem('email', email);
        await localStorage.setItem('profile_image', imageUrl);

        await localStorage.setItem('token', response.token);
        await localStorage.setItem('account_id', response.data.account_id);

        setRedirect(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <LoginContainer>
      <Icon size={180} icon={HyveLogo} />
      <h3>Welcome to your Hyve</h3>
      <span style={{ fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
        Security, Safety, Organization <br /> all in one hyve.
      </span>
      <GoogleWrapper>
        <GoogleLogin
          className="google--login"
          clientId="497597479194-ahqalu2dcn6ggq2lrr5k0hov52dtr2uq.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </GoogleWrapper>
      {error && <ErrorMessage>You are not a beta user</ErrorMessage>}

      <a target="_blank" href="https://gmail.us3.list-manage.com/subscribe?u=131e40b536b7522dc377d85b6&id=54fd5a4685">
        <SignUpButton>Sign up for Beta</SignUpButton>
      </a>
      {redirect && <Redirect to="/me" />}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  padding: 30px 0;
  color: #828282;
  margin-top: 17vh;

  h3 {
    margin: 15px;
  }

  span {
    font-weight: lighter;
    font-size: 13px;
  }
`;

const GoogleWrapper = styled.div`
  align-self: center;
  margin-top: 25px;

  &:hover {
    background-color: #397bf5 !important;
    color: #397bf5 !important;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  font-size: 18px !important;
  margin-top: 20px !important;
`;

const SignUpButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  outline: none;
  height: 35px;
  margin-top: 30px;
  margin-right: 20px;
  border-color: #5282ff;
  color: #5282ff;

  &:hover {
    cursor: pointer;
  }
`;

export default Login;
