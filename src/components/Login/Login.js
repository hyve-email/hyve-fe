import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import HyveLogo from '../../assets/hyve-logo.png';

// API
import UserService from '../../services/user';

const responseGoogle = async response => {
  const { Zi, googleId, profileObj } = response;
  const { access_token } = Zi;
  const { email, name, imageUrl } = profileObj;

  const data = { email, name, imageUrl, googleId };

  try {
    await localStorage.setItem('googleToken', access_token);
    await localStorage.setItem('googleId', googleId);
    await localStorage.setItem('name', name);
    await localStorage.setItem('email', email);
    await localStorage.setItem('profile_image', imageUrl);

    const response = await UserService.create(data);
    console.log({ response });
  } catch (err) {
    console.log({ err });
  }
};

const Login = props => {
  return (
    <LoginContainer>
      <Icon size={180} icon={HyveLogo} />
      <h3>Welcome to your Hyve</h3>
      <span style={{ fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
        Security, Safety, Organization <br /> all in one hyve.
      </span>
      <GoogleWrapper>
        <GoogleLogin
          clientId="497597479194-ahqalu2dcn6ggq2lrr5k0hov52dtr2uq.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </GoogleWrapper>
    </LoginContainer>
  );
};

Login.propTypes = {};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  padding: 30px 0;
  color: gray;
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
`;

export default Login;
