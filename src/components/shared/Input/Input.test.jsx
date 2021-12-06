import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('<Button />', () => {
  it('renders <Button />', () => {
    const wrapper = shallow(
      <Input placeholder="test" size="sm">
        submit
      </Input>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
