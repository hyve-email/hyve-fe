import React, { useEffect } from 'react';
import styled from 'styled-components';
import RowGroup from './components/RowGroup';
import Header from '../layout/Header';
import mockData from './mockData';

const Dashboard = props => {
  return (
    <DashboardContainer>
      <Header profileImage={localStorage.getItem('profile_image')} />
      <RowGroup />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .dashboard--header {
    text-align: left;
    width: 80%;
    align-self: center;
    padding: 0 10px;
  }
`;

export default Dashboard;
