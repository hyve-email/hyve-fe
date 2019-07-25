import React from 'react';
import styled from 'styled-components';
import RowCard from "./RowCard";

// going to take in header/title and array of obj/items s
function RowGroup(props) {
  return (
    <RowGroupContainer>
      <span>Row Group</span>

      <RowCard/>
      <RowCard/>
      <RowCard/>
      <RowCard/>
      <RowCard/>
      <RowCard/>
      <RowCard/>
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 30px 0;

  span {
    text-align: left;
  }
`;

export default RowGroup;
