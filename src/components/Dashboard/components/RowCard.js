import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../shared/Modal';

class RowCard extends React.Component {
  state = {
    account_id: '',
    muted: false,
  };

  componentDidMount() {
    this.setState({
      account_id: this.props.account_id,
      muted: this.props.muted,
    });
  }

  render() {
    return (
      <Row>
        <div className="site--details">
          <img
            src={this.props.cardImg}
            alt="Profile thumbnail"
            className="pic--placeholder"
          />
          <div style={{ width: '55%' }}>
            <div className="email--details">
              <span>{this.props.targetEmail}</span>
              <hr
                style={{
                  border: 'none',
                  borderTop: '3px dotted #00F09A',
                  height: '1px',
                  width: '90%',
                  justifyContent: 'center',
                  marginLeft: 25,
                }}
              />
              <span style={{ marginLeft: 20 }}>{this.props.droneEmail}</span>
            </div>
          </div>
          {/* <div className="action--buttons">
            <button
              style={{ borderColor: '#FF5252', color: '#FF5252' }}
              onClick={() => onClick()}
            >
              Mute
            </button>
            <button
              style={{ borderColor: '#5282FF', color: '#5282FF' }}
              onClick={() => setModal(!isModalOpen)}
            >
              Reply
            </button>
            <span style={{ fontWeight: 6500 }} onClick={() => onClick()}>
              Edit
            </span>
            <Modal toggle={setModal} isOpen={isModalOpen}>
              <ReplyContainer>
                <button
                  style={{ borderColor: '#5282FF', color: '#5282FF' }}
                  onClick={() => setModal(!isModalOpen)}
                >
                  Reply
                </button>
              </ReplyContainer>
            </Modal>
          </div> */}
        </div>
      </Row>
    );
  }
}

// ({ cardImg, droneEmail, targetEmail, account_id }) => {
//   const [isModalOpen, setModal] = useState(false);
//   const [accountId, setAccountId] = useState('');
//   useEffect(() => {}, [isModalOpen]);
//   console.log('isModalOpen', isModalOpen);
//   const onClick = () => console.log('button clicked');

// };

const Row = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.02), 0 1px 10px rgba(0, 0, 0, 0.04);
  margin: 10px;
  padding: 20px 20px;
  border-radius: 10px;

  .site--details {
    display: flex;
    justify-content: space-around;
    width: 100%;
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
    display: flex;
    align-items: center;
    align-self: center;
    border-radius: 30px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08), 0 1px 5px rgba(0, 0, 0, 0.01);
    padding: 20px 30px;
    text-align: center;
    margin: auto;
    justify-content: center;
  }

  .action--buttons {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: gray;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
    button {
      font-size: 14px;
      font-weight: bold;
      margin-right: 20px;
      height: 35px;
      width: 70px;
      border-radius: 5px;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ReplyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 800px;
`;

export default RowCard;
