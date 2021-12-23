import { shallow } from 'enzyme';
import React from 'react';
import ClaimAddress from '.';

describe('<ClaimAddress />', () => {
  it('renders <ClaimAddress />', () => {
    const wrapper = shallow(<ClaimAddress />);
    expect(wrapper).toMatchSnapshot();
  });
});
