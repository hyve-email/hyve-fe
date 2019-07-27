import React, { useEffect } from 'react';
import styled from 'styled-components';
import RowGroup from './components/RowGroup';
import Header from '../layout/Header';
import mockData from './mockData';

const Dashboard = props => {
  useEffect(() => {
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem(
      'image',
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    );
    localStorage.setItem(
      'profile_image',
      'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg'
    );
  });

  return (
    <DashboardContainer>
      <Header profileImage={localStorage.getItem('profile_image')} />

      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Spam"
        categoryGroup={mockData.spam}
      />
      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Work"
        categoryGroup={mockData.work}
      />
      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Personal"
        categoryGroup={mockData.personal}
      />
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
