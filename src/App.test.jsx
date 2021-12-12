import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
