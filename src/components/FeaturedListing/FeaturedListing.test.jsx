import { shallow } from 'enzyme';
import 'jest-styled-components';
import Home from 'pages/Home';
import React from 'react';
import Card from './Card/Card';
import data from './data';
import { StyledSlide, Title } from './featured-listing.styles';
import FeaturedListing from './index';

describe('rendering components', () => {
  let wrapper;
  let tree;

  beforeAll(() => {
    wrapper = shallow(<FeaturedListing />);
  });

  it('should render Home component without crash', () => {
    const wrapper2 = shallow(<Home />);
    expect(wrapper2).toMatchSnapshot();
  });

  it('should render FeaturedListing component without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title component', () => {
    expect(wrapper.find(Title).exists()).toBeTruthy();
    expect(wrapper.find(Title).getElement().type.render.displayName).toBe(
      'styled.h3'
    );
    expect(wrapper.find(Title).type().target).toBe('h3');
    expect(wrapper.find(Title).text()).toBe('Our Featured Listing');
  });

  it('should render slider component', () => {
    expect(wrapper.find(StyledSlide).exists()).toBeTruthy();
    expect(wrapper.find(StyledSlide).type().target).toBe('div');
  });

  it('should render card component', () => {
    expect(wrapper.find(Card).exists()).toBeTruthy();
    expect(wrapper.find(Card).first().dive().type().target).toBe('div');
    expect(wrapper.find(Card).length).toBe(data.length);
  });
});
