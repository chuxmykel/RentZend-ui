import React from 'react';
import { shallow } from 'enzyme';
import AgentsApplication from './AgentsApplication';

describe('<AgentsApplication /> with no props', () => {
  const container = shallow(<AgentsApplication />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have the main div', () => {
    expect(container.find('div').length).toEqual(1);
  });
});
