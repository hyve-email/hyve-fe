import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import Icon from '../Icon';
import HyveLogo from '../../assets/hyve-logo.png';
import { GOOGLE_CLIENT_ID } from '../../.env';

const responseGoogle = response => {
  console.log(JSON.stringify(response, null, 2));
  // TODO Remove once connected to backend
  console.log('token', response.accessToken);
  console.log('googleToken', response.accessToken);
  localStorage.setItem('token', response.accessToken);
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

};

const Login = props => {
  return (
    <LoginContainer>
      <Icon size={100} icon={HyveLogo} />
      <h3>Welcome to Hyve</h3>
      <span>Liberate your email in minutes</span>
      <GoogleWrapper>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
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
