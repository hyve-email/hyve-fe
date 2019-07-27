import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RowGroup from './components/RowGroup';

const Dashboard = props => {
  return (
    <DashboardContainer>
      <div className="dashboard--header">
        <h3>You have 9,000 emails ✉️</h3>
        <span>this time privacy is on your terms 💪</span>
      </div>

      <RowGroup category="Spam" />
      <RowGroup category="Personal" />
      <RowGroup category="Professional" />
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
