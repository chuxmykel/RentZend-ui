import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> with no props', () => {
  const container = shallow(<App />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have the main app div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should have proper props for email field', () => {
    expect(container.find('div').props()).toEqual({
      className: 'App',
      children: 'Hello World'
    });
  });
});
