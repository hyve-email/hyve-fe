import React from 'react';
import HyveLogo from '../../assets/hyve-logo.png';
import styled from 'styled-components';
import Icon from '../shared/Icon';

const Header = ({ profileImage }) => {
  return (
    <HeaderContainer>
      <div style={{width:"75%", margin:"auto", display:"flex", justifyContent:"space-between" }}>
        <Icon size={60} icon={HyveLogo} />
        <ButtonGroup>
          <a href="/#">Account Settings</a>
          <img
            src={profileImage}
            alt="Profile thumbnail"
            className="pic--placeholder"
          />
        </ButtonGroup>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  //padding: 20px 200px;
  width: 100%;
  margin: auto;
  padding: 10px 0;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border:1px solid rgba(188, 188, 188, 0.6);
  i {
    margin-left: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  .pic--placeholder {
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 100%;
    margin-left: 10px;
  }

  a {
    margin-right: 10px;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
  }
`;

export default Header;
