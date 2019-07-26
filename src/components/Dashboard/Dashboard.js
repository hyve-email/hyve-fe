import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RowGroup from './components/RowGroup';
import Header from "../layout/Header";

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
    console.log('storage', localStorage);
  });



  return (
    <DashboardContainer>
      <Header profileImage={localStorage.getItem('profile_image')} />
      <div className="dashboard--header">
        <h3>You have 9,000 emails ✉️</h3>
        <span>this time privacy is on your terms 💪</span>
      </div>

      <RowGroup cardImg={localStorage.getItem('image')} category="Spam" />
      <RowGroup cardImg={localStorage.getItem('image')} category="Personal" />
      <RowGroup cardImg={localStorage.getItem('image')} category="Professional" />
    </DashboardContainer>
  );
};

Dashboard.propTypes = {};

const DashboardContainer = styled.div`
  .dashboard--header {
    text-align: left;
    width: 70%;
    align-self: center;
    padding: 0 10px;
  }

  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Dashboard;
