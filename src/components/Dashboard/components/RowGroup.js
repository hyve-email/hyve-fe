import React from 'react';
import styled from 'styled-components';
import RowCard from './RowCard';

const RowGroup = ({ category, categoryGroup }) => (
  <RowGroupContainer>
    <h2>{category}</h2>

    {categoryGroup.map((item, index) => {
      const { icon_image, drone_email, target_email } = item;
      return (
        <RowCard
          cardImg={icon_image}
          droneEmail={drone_email}
          key={index}
          targetEmail={target_email}
        />
      );
    })}
  </RowGroupContainer>
);

const RowGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 75%;
  padding: 10px 10px 0 10px;
  margin-bottom: 30px;

  h2 {
    text-align: left;
    font-style: normal;
    font-weight: 900;
    color: #787878;
    margin: 5px -20px;
  }
`;

export default RowGroup;
