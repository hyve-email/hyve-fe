import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import HyveLogo from '../../assets/hyve-logo.png';

const responseGoogle = response => {
  console.log(response);
};

const Login = props => {
  return (
    <LoginContainer>
      <Icon size={100} icon={HyveLogo} />
      <h3>Welcome to Hyve</h3>
      <span>Liberate your email in minutes</span>
      <GoogleWrapper>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          buttonText="Continue with Google"
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
  width: 200px;
  margin-top: 25px;
`;

export default Login;