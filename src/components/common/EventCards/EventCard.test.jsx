import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import EventCard from './EventCard';
import {
  EventImage,
  Title,
  Property,
  EventInfo,
  FooterTop,
  FooterBottom,
  Attendees,
  EventDate,
} from './event-card.styles';

Enzyme.configure({ adapter: new Adapter() });

let Props;
beforeEach(() => {
  Props = {
    event: [
      {
        attendees: '122',
        date: ' Dec 09 2021',
        endTime: '08:00',
        eventId: 78367,
        eventType: 'N/A',
        id: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1598482327649-e8831e1505be',
        location: 'Area 51',
        startTime: '16:20',
        title: 'Alien Hunt',
      },
    ],
  };
});

describe('Snapshot Testing For Cards', () => {
  it('Should render properly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const CardTest = shallow(<EventCard />);
    expect(CardTest).toMatchSnapshot();
  });

  it('Should render 1 Image', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const CardTest = shallow(<EventCard {...Props.event} />);
    expect(CardTest.find(EventImage).exists()).toBe(true);
  });
  it('Should render 1 Title', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const CardTest = shallow(<EventCard {...Props.event} />);
    expect(CardTest.find(Title).exists()).toBe(true);
    expect(CardTest.find(Title).type().target).toEqual('p');
  });
  it('Should render 1 Property', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const CardTest = shallow(<EventCard {...Props.event} />);
    expect(CardTest.find(Property).exists()).toBe(true);
    expect(CardTest.find(Property).type().target).toEqual('p');
  });
});
