import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';

class Categories extends React.Component {
  render() {
    const { spam_drones, work_drones, personal_drones } = this.props;

    return (
      <RowGroupContainer>
        <h2>Spam</h2>
        {spam_drones.length > 0 ? (
          spam_drones.map((drone, index) => {
            return (
              <CategoryCard
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
              <CategoryCard
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
              <CategoryCard
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
  margin-bottom: 30px;

  h2 {
    text-align: left;
    font-style: normal;
    font-weight: 900;
    color: #787878;
    margin: 5px -20px;
  }
`;

export default Categories;
