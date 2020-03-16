import React from 'react';
import AgentCard from '../../components/AgentCard';
import data from '../../utils/dummy-data';
import './AgentsView.css';

const AgentsView = () => {
  return (
    <div className="agents-view">
      {data.map(({ id, name, email, phoneNumber, address, zipCode, passport }) => (
        <AgentCard
          key={id}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          zipCode={zipCode}
          passport={passport}
        />
      ))}
    </div>
  );
};

export default AgentsView;
