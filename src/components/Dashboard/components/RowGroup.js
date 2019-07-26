import React from 'react';
import styled from 'styled-components';
import RowCard from './RowCard';

// going to take in header/title and array of obj/items s
function RowGroup({ category, cardImg }) {
  return (
    <RowGroupContainer>
      <span>{category}</span>

      <RowCard cardImg={cardImg} />
      <RowCard cardImg={cardImg} />
      <RowCard cardImg={cardImg} />
      <RowCard cardImg={cardImg} />


    </RowGroupContainer>
  );
}

const RowGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70%;
  padding: 10px 10px 0 10px;
  margin: 30px 0;

  span {
    text-align: left;
  }
`;

export default RowGroup;
