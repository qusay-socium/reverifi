import { mount } from 'enzyme';
import React from 'react';
import { IconContainer, Tag } from './card.styles';

describe('test styled components that have props', () => {
  it('should return no props on Tag component', () => {
    const wrapper = mount(<Tag />);
    expect(wrapper.props()).toEqual({});
  });

  it('should return one prop on Tag component', () => {
    const wrapper = mount(<Tag isNew />);
    expect(wrapper.props()).toEqual({ isNew: true });
  });

  it('should return no props on IconContainer component', () => {
    const wrapper = mount(<IconContainer />);
    expect(wrapper.props()).toEqual({});
  });

  it('should return stroke prop on IconContainer component', () => {
    const wrapper = mount(<IconContainer stroke="true" />);
    expect(wrapper.props()).toEqual({ stroke: 'true' });
  });

  it('should return fill prop on IconContainer component', () => {
    const wrapper = mount(<IconContainer fill="true" />);
    expect(wrapper.props()).toEqual({ fill: 'true' });
  });
});
