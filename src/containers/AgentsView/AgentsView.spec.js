import React from 'react';
import { shallow } from 'enzyme';
import AgentsView from './AgentsView';

describe('<AgentsView /> with no props', () => {
  const container = shallow(<AgentsView />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have the main div', () => {
    expect(container.find('div').length).toEqual(1);
  });
});
