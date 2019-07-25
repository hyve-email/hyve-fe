import React from 'react';
import styled from 'styled-components';

// takes in item with title, site, and action buttons
const RowCard = () => {
  return (
    <Row>
      <div>
        <span>Website</span>
        <span style={{ marginLeft: 10 }}>website.com</span>
      </div>
      <div className="action--buttons">
        <span>send</span>
        <span>pause</span>
        <span>remove</span>
      </div>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: #fafafa;
  border-bottom: 1px solid #e7e7e7;
  border-color: #e7e7e7;
  flex-direction: row;
  width: 100%;
  padding: 10px;

  .action--buttons {
    span {
      margin-right: 10px;
    }
  }
`;

export default RowCard;
