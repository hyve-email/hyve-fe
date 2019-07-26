import React from 'react';
import HyveLogo from '../../assets/hyve-logo.png';
import styled from 'styled-components';
import Icon from '../Icon';

const Header = ({ isLoggedIn, setLogin }) => {
  const buttonText = isLoggedIn ? 'Logout' : 'Login';
  return (
    <HeaderContainer>
      <Icon size={40} icon={HyveLogo} />
      <ButtonGroup>
        <a href="#">Account</a>
        <a href="#">Settings</a>
        <div className="pic--placeholder" />
      </ButtonGroup>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 0 200px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  i {
    margin-left: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  .pic--placeholder {
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 100%;
    margin-left: 10px;
  }

  a {
    margin-right: 10px;
    color: inherit;
    text-decoration: none;
  }
`;

export default Header;
