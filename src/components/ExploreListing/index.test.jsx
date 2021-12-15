import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExploreListings from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('ExploreListings', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExploreListings />);
  });

  it('should render all of the components', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
