import React from 'react';
import { shallow } from 'enzyme';
import AgentCard from './AgentCard';
import data from '../../utils/dummy-data';

describe('<AgentCard />', () => {
  const container = shallow(<AgentCard {...data[0]} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
