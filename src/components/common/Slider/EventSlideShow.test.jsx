/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import EventsArray from 'Mock/events.json';
import EventSlideShow from './EventSlideShow';

describe('Slider Testing', () => {
  it('Should Render Properly', () => {
    const wrapper = shallow(<EventSlideShow data={EventsArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
