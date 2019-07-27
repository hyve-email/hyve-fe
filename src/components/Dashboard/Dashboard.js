import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RowGroup from './components/RowGroup';
import Header from '../layout/Header';
import mockData from './mockData';
import { PlusIcon } from '../../assets/plus-solid';
import Modal from '../shared/Modal';

const Dashboard = props => {
  const [isModalOpen, toggleModal] = useState(false);

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
  });

  return (
    <DashboardContainer>
      <Header profileImage={localStorage.getItem('profile_image')} />

      <AddButton onClick={() => toggleModal(true)}>
        <div>{PlusIcon()}</div>
        <span>Add Drone</span>
      </AddButton>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <AddContainer>
          <span>Add Drone</span>
          <div>
            <label htmlFor="drone">New Email</label>
            <input name="drone" type="text" />

            <label htmlFor="category">Category</label>
            <input name="drone" type="text" />
          </div>

          <button type="submit" onClick={() => console.log('add email')}>
            Add drone
          </button>
        </AddContainer>
      </Modal>

      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Spam"
        categoryGroup={mockData.spam}
      />
      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Work"
        categoryGroup={mockData.work}
      />
      <RowGroup
        cardImg={localStorage.getItem('image')}
        category="Personal"
        categoryGroup={mockData.personal}
      />
    </DashboardContainer>
  );
};

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

const AddButton = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin-right: 13%;
  margin-top: 40px;

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

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    padding: 5px
  }

  button {
    margin-top: 30px;
    margin-right: 20px;
    border-color: #5282FF;
    color: #5282FF;
  }
`;

export default Dashboard;
