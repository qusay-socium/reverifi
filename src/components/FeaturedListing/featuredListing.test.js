import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import colors from 'styles/colors';
import { Title, StyledSlide, Tag, Text } from './featured-listing.styles';
import FeaturedListing from './index';
import Card from './Card';
import data from './data';

describe('rendering components', () => {
  let wrapper;
  let tree;

  beforeAll(() => {
    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<FeaturedListing />);
    tree = renderer.create(<FeaturedListing />).toJSON();
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

    // other way
    // expect(tree.children[0]).toHaveProperty('type', 'h3');
    // expect(tree.children[0].children[0]).toBe('Our Featured Listing');
  });

  it('should render slider component', () => {
    expect(wrapper.find(StyledSlide).exists()).toBeTruthy();
    expect(wrapper.find(StyledSlide).type().target).toBe('div');

    // other way
    // expect(tree.children[1]).toHaveProperty('type', 'div');
  });

  it('should render card component', () => {
    expect(wrapper.find(Card).exists()).toBeTruthy();
    expect(wrapper.find(Card).first().dive().type().target).toBe('div');
    expect(wrapper.find(Card).length).toBe(data.length);
  });
});

describe('test styled components that have props', () => {
  it('should apply default styles to Tag component', () => {
    const tree = renderer.create(<Tag />).toJSON();

    expect(tree).toHaveStyleRule('background-color', colors.lightgreen);
  });

  it('should apply props styles to Tag component', () => {
    const tree = renderer.create(<Tag color="red" />).toJSON();

    expect(tree).toHaveStyleRule('background-color', 'red');
  });

  it('should apply default styles to Text component', () => {
    const tree = renderer.create(<Text />).toJSON();

    expect(tree).toHaveStyleRule('font-size', '1rem');
  });

  it('should apply props styles to Text component', () => {
    const tree = renderer.create(<Text size="2rem" />).toJSON();

    expect(tree).toHaveStyleRule('font-size', '2rem');
  });
});
