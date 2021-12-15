import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReverifiPlus from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReverifiPlus />);
  });

  it('should render all of the components', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
