import React from 'react';
import { shallow } from 'enzyme';
import EventSlideShow from 'components/common/Slider/EventSlideShow';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import colors from 'styles/colors';
import Events from './index';
import {
  EventsSection,
  FilterButton,
  FilterButtonsContainer,
  SectionContainer,
  SectionTitle,
} from './events.styles';

describe('Events Section Testing', () => {
  it('Renders Correctly', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper).toMatchSnapshot();
  });
  it('Should Render 1 SectionContainer', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper.find(SectionContainer).exists()).toBe(true);
  });
  it('Should render 1 Title', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper.find(SectionTitle).exists()).toBe(true);
    expect(Wrapper.find(SectionTitle).type().target).toEqual('h1');
    expect(Wrapper.find(SectionTitle).text()).toEqual('Events');
  });
  it('Should render 1 FilterContainer', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper.find(FilterButtonsContainer).exists()).toBe(true);
  });
  it('Should Render 3 Filter Buttons', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper.find(FilterButton)).toHaveLength(3);
    expect(Wrapper.find(EventSlideShow).prop('data')).toHaveLength(11);
    Wrapper.find(FilterButton).at(0).simulate('click');
    expect(Wrapper.find(EventSlideShow).prop('data')).toHaveLength(11);
    Wrapper.find(FilterButton).at(1).simulate('click');
    expect(Wrapper.find(EventSlideShow).prop('data')).toHaveLength(3);
    Wrapper.find(FilterButton).at(2).simulate('click');
    expect(Wrapper.find(EventSlideShow).prop('data')).toHaveLength(8);
  });
  it('Should Render Styles Correctly', () => {
    const Wrapper = renderer.create(<Events />).toJSON();
    expect(Wrapper.children[1].children[0]).toHaveStyleRule(
      'color',
      colors.mainGreen
    );
    expect(Wrapper.children[1].children[0]).toHaveStyleRule(
      'text-decoration',
      'underline'
    );
    expect(Wrapper.children[1].children[1]).toHaveStyleRule(
      'color',
      colors.textGray
    );
    expect(Wrapper.children[1].children[1]).toHaveStyleRule(
      'text-decoration',
      'none'
    );
    expect(Wrapper.children[1].children[2]).toHaveStyleRule(
      'color',
      colors.textGray
    );
    expect(Wrapper.children[1].children[2]).toHaveStyleRule(
      'text-decoration',
      'none'
    );
  });

  it('Should render 1 Event Section', () => {
    const Wrapper = shallow(<Events />);
    expect(Wrapper.find(EventsSection).exists()).toBe(true);
  });
});
