import React from 'react';
import styled from 'styled-components';

// takes in item with title, site, and action buttons
const RowCard = ({cardImg}) => {
  return (
    <Row>
      <div className="site--details">
        <img src={cardImg} alt='Profile thumbnail' className="pic--placeholder" />
        <div className="email--details">
          <span>email@gmail.com</span>
          <span style={{ marginLeft: 20 }}>email@hyve.mail</span>
        </div>
      </div>
      <div className="action--buttons">
        <button>Mute</button>
        <button>Reply</button>
        <span>Edit</span>
      </div>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 10px;
  padding: 20px 20px;
  border-radius: 10px;

  .site--details {
    display: flex;
    justify-content: space-around;
  }

  .pic--placeholder {
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 100%;
    margin-left: 10px;
    margin-right: 50px;
  }

  .email--details {
    align-self: center;
  }

  .action--buttons {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: gray;
      font-weight: bold;
    }
    button {
    font-size: 14px;
    font-weight: bold;
      margin-right: 10px;
      height: 35px;
      width: 70px;
      border-radius: 5px; 
      outline: none;
    }
  }
`;

export default RowCard;
