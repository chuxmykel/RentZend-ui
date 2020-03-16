import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  const wrappedContainer = shallow(<Router><Header /></Router>);
  const container = shallow(<Header />);
  it('should match the snapshot', () => {
    expect(wrappedContainer.html()).toMatchSnapshot();
  });

  it('should have the main div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should have proper props for the main header div', () => {
    expect(container.find('div').prop('className')).toEqual('header');
    expect(container.find('div').prop('children')).toBeInstanceOf(Array);
  });

  it('should have 2 links to the different pages', () => {
    expect(container.find('Link').length).toEqual(2);
  });

  it('should have proper props for the links', () => {
    expect(container.find('Link').first().prop('to')).toEqual('/');
    expect(container.find('Link').last().prop('to')).toEqual('/apply');
  });
});
