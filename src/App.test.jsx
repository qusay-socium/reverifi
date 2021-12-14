import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';

describe('Events Section Testing', () => {
  it('Renders Correctly', () => {
    const Wrapper = shallow(<App />);
    expect(Wrapper).toMatchSnapshot();
  });
});
