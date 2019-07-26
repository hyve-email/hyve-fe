import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <span>No more drones...</span>
    </div>
  );
};

const FooterContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: aqua;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export default Footer;
