import { shallow } from 'enzyme';
import React from 'react';
import Footer from '.';

describe('<Footer />', () => {
  it('renders <Footer />', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
