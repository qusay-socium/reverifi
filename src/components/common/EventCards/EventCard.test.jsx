/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';
import {
  EventImage,
  Title,
  Property,
  EventDate,
  EventInfo,
} from './event-card.styles';

const mockdata = {
  attendees: '122',
  date: 'Dec 09 2021',
  endTime: '08:00',
  eventId: 78367,
  eventType: 'N/A',
  id: 1,
  imageUrl: 'https://images.unsplash.com/photo-1598482327649-e8831e1505be',
  location: 'Area 51',
  startTime: '16:20',
  title: 'Alien Hunt',
};

describe('Snapshot Testing For Cards', () => {
  it('Should render properly', () => {
    const CardTest = shallow(<EventCard {...mockdata} />);
    expect(CardTest).toMatchSnapshot();
  });

  it('Should render Correctly', () => {
    const CardTest = shallow(<EventCard {...mockdata} />);
    expect(CardTest.find(EventImage).exists()).toBe(true);
    expect(CardTest.find(Title).exists()).toBe(true);
    expect(CardTest.find(Title).type().target).toEqual('p');
    expect(CardTest.find(Title).text()).toEqual('Alien Hunt');
    expect(CardTest.find(Property).exists()).toBe(true);
    expect(CardTest.find(Property).type().target).toEqual('p');
    expect(CardTest.find(Property).text()).toEqual('N/A');
    expect(CardTest.find(EventDate).exists()).toBe(true);
    expect(CardTest.find(EventDate).type().target).toEqual('div');
    expect(CardTest.find(EventDate).text()).toEqual('Dec 09 2021');
    expect(CardTest.find(EventInfo).exists()).toBe(true);
    expect(CardTest.find(EventInfo).type().target).toEqual('p');
    expect(CardTest.find(EventInfo).text()).toEqual('16:20-08:00 @Area 51');
  });
});
