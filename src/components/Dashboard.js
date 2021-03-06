import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import Header from './shared/Header';

import { PlusIcon } from '../assets/plus-solid';
import Modal from './shared/Modal';

import DroneService from '../services/drone';

function AddModal(props) {
  return (
    <AddContainer onSubmit={props.submit} style={{ 'margin-top': '-10px' }}>
      <span>Add Drone</span>
      <div style={{ width: '100%' }}>
        <label htmlFor="drone">New Email</label>
        <input
          required
          name="target_email"
          type="text"
          aria-describedby="target_email"
        />

        <label htmlFor="category">Category</label>
        <select
          required
          aria-describedby="category"
          name="category"
          id="category"
        >
          <option value="SPAM">Spam</option>
          <option value="WORK">Work</option>
          <option value="PERSONAL">Personal</option>
        </select>
      </div>

      <button type="submit" style={{ padding: '10px' }}>
        Add drone
      </button>
    </AddContainer>
  );
}

function AddDroneButton(props) {
  return (
    <AddButton onClick={props.onClick}>
      <div>{PlusIcon()}</div>
      <span>Add Drone</span>
    </AddButton>
  );
}

class Dashboard extends React.Component {
  state = {
    isAddModalOpen: false,
    isReplyModalOpen: false,
    spam_drones: [],
    personal_drones: [],
    work_drones: [],
  };

  async componentDidMount() {
    try {
      this.setState({ isAddModalOpen: false, isReplyModalOpen: false });
      const data = await DroneService.read();

      if (data.success) {
        let { spam_drones, personal_drones, work_drones } = this.state;

        const { drones } = data.data;

        if (drones.PERSONAL && drones.PERSONAL.length > 0) {
          this.setState({ personal_drones: drones.PERSONAL });
        }
        if (drones.WORK && drones.WORK.length > 0) {
          this.setState({ work_drones: drones.WORK });
        }
        if (drones.SPAM && drones.SPAM.length > 0) {
          this.setState({ spam_drones: drones.SPAM });
        }
      }
    } catch (e) {
      console.log({ e });
    }
  }

  submit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const category = form.get('category');
    const target_email = form.get('target_email');

    try {
      const response = await DroneService.create(target_email, category);

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { spam_drones, personal_drones, work_drones } = this.state;
    return (
      <DashboardContainer>
        <Header profileImage={localStorage.getItem('profile_image')} />

        <AddDroneButton
          onClick={() => this.setState({ isAddModalOpen: true })}
        />
        <Categories
          spam_drones={spam_drones}
          personal_drones={personal_drones}
          work_drones={work_drones}
        />
        <Modal
          isOpen={this.state.isAddModalOpen}
          toggle={() => this.setState({ isAddModalOpen: false })}
        >
          <AddModal submit={this.submit} />
        </Modal>
      </DashboardContainer>
    );
  }
}

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

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin-right: 13%;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: #6c44fa;
    margin-bottom: 15px;
    padding: 5px;
  }

  span {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #969696;
  }
`;

const AddContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #828282;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
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
    padding: 5px;
    margin-top: 30px;
    border-color: #5282ff;
    color: #5282ff;
    width: 100% !important;
  }

  select {
    -webkit-appearance: none;
    border-radius: 5px;
    border: #969696 solid 1px;
    padding: 5px;
  }
`;

export default Dashboard;
