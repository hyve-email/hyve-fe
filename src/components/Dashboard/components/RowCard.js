import React from 'react';
import styled from 'styled-components';
import Modal from '../../shared/Modal';

import DroneService from '../../../services/drone';
import UserService from '../../../services/user';

class RowCard extends React.Component {
  state = {
    account_id: '',
    muted: true,
    drone_email: '',
    target_email: '',
    category: '',
    isModalOpen: false,
  };

  componentDidMount() {
    this.setState({
      account_id: this.props.accountId,
      muted: this.props.muted,
      drone_email: this.props.droneEmail,
      target_email: this.props.targetEmail,
      category: this.props.category,
    });
  }

  onMute = async () => {
    try {
      const { muted, drone_email, target_email, category } = this.state;

      const response = await DroneService.update(
        muted,
        drone_email,
        target_email,
        category
      );

      if (response.success) {
        const { data } = response;

        this.setState({
          muted: data.muted,
          drone_email: data.drone_email,
          target_email: data.target_email,
          category: data.category,
        });

        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  reply = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const to = form.get('to');
    const drone_email = this.state.drone_email;
    const subject = form.get('subject');
    const message = form.get('message');

    try {
      const response = await UserService.reply(
        to,
        drone_email,
        subject,
        message
      );

      this.setState({ isModalOpen: false });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { muted, isModalOpen } = this.state;
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
              <span>{this.props.droneEmail}</span>
              {muted ? (
                <hr
                  style={{
                    border: 'none',
                    borderTop: '3px dotted #FF504D',
                    height: '1px',
                    width: '90%',
                    justifyContent: 'center',
                    marginLeft: 25,
                  }}
                />
              ) : (
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
              )}

              <span style={{ marginLeft: 20 }}>{this.props.targetEmail}</span>
            </div>
          </div>
          <div className="action--buttons">
            {muted ? (
              <button
                style={{ backgroundColor: '#FF5252', color: '#fff' }}
                onClick={this.onMute}
              >
                Unmute
              </button>
            ) : (
              <button
                style={{ borderColor: '#FF5252', color: '#FF5252' }}
                onClick={this.onMute}
              >
                Mute
              </button>
            )}

            <button
              style={{
                borderColor: '#5282FF',
                color: '#5282FF',
                width: '100%',
              }}
              onClick={() => this.setState({ isModalOpen: true })}
            >
              Reply
            </button>
            <span
              style={{ fontWeight: 6500 }}
              // onClick={() => onClick()}
            >
              Edit
            </span>
            <Modal
              toggle={() => this.setState({ isModalOpen: false })}
              isOpen={isModalOpen}
            >
              <ReplyContainer onSubmit={this.reply}>
                <span>Reply</span>
                <div style={{ width: '100%' }}>
                  <label htmlFor="to">To: </label>
                  <input
                    required
                    name="to"
                    type="text"
                    aria-describedby="target_email"
                  />
                </div>

                <div style={{ width: '100%' }}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    required
                    name="subject"
                    type="text"
                    aria-describedby="target_email"
                  />
                </div>

                <div style={{ width: '100%' }}>
                  <label htmlFor="subject">Message</label>
                  <textarea
                    required
                    name="message"
                    type="textarea"
                    rows="10"
                    cols="50"
                    aria-describedby="target_email"
                  />
                </div>

                <button
                  type="submit"
                  style={{ borderColor: '#5282FF', color: '#5282FF' }}
                >
                  Reply
                </button>
              </ReplyContainer>
            </Modal>
          </div>
        </div>
      </Row>
    );
  }
}

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

const ReplyContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #828282;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
  }

  label {
    margin-top: 25px;
    margin-right: 10px;
    margin-bottom: 3px;
  }

  input {
    border-radius: 5px;
    border: #969696 solid 1px;
    padding: 5px;
  }

  button {
    align-self: center;
    width: 100%;
    padding: 5px;
    margin-top: 30px;
    margin-right: 20px;
    border-color: #5282ff;
    color: #5282ff;
    margin-right: 0;
  }
`;

export default RowCard;
