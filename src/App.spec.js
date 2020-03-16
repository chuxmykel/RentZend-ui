import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const container = shallow(<App />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have the main app div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should have proper props main app div', () => {
    expect(container.find('div').prop('className')).toEqual('App');
    expect(container.find('div').prop('children')).toBeInstanceOf(Array);
  });
});
