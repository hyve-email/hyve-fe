import React from 'react';
import styled from 'styled-components';
import RowCard from './RowCard';

import DroneService from '../../../services/drone';

class RowGroup extends React.Component {
  state = {
    spam_drones: [],
    personal_drones: [],
    work_drones: [],
  };

  async componentDidMount() {
    try {
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

  render() {
    const { spam_drones, work_drones, personal_drones } = this.state;

    return (
      <RowGroupContainer>
        <h2>Spam</h2>
        {spam_drones.length > 0 ? (
          spam_drones.map((drone, index) => {
            return (
              <RowCard
                key={index}
                accountId={drone.account_id}
                cardImg={drone.icon_image}
                droneEmail={drone.drone_email}
                targetEmail={drone.target_email}
                muted={drone.muted}
                category={drone.category}
              />
            );
          })
        ) : (
          <p style={{ fontWeight: '800', fontSize: '20px' }}>
            No spam drones available
          </p>
        )}

        <h2>Work</h2>
        {work_drones.length > 0 ? (
          work_drones.map((drone, index) => {
            return (
              <RowCard
                key={index}
                accountId={drone.account_id}
                cardImg={drone.icon_image}
                droneEmail={drone.drone_email}
                targetEmail={drone.target_email}
                muted={drone.muted}
                category={drone.category}
              />
            );
          })
        ) : (
          <p style={{ fontWeight: '800', fontSize: '20px' }}>
            No work drones available
          </p>
        )}

        <h2>Personal</h2>
        {personal_drones.length > 0 ? (
          personal_drones.map((drone, index) => {
            return (
              <RowCard
                key={index}
                accountId={drone.account_id}
                cardImg={drone.icon_image}
                droneEmail={drone.drone_email}
                targetEmail={drone.target_email}
                muted={drone.muted}
                category={drone.category}
              />
            );
          })
        ) : (
          <p style={{ fontWeight: '800', fontSize: '20px' }}>
            No personal drones available
          </p>
        )}
      </RowGroupContainer>
    );
  }
}

const RowGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 75%;
  padding: 10px 10px 0 10px;
  margin: 30px 0;

  h2 {
    text-align: left;
    font-style: normal;
    font-weight: 900;
    color: #787878;
    margin: 5px -20px;
  }
`;

export default RowGroup;
