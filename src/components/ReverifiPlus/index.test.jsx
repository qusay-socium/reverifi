import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReverifiPlus from './index';
// import { Header } from 'components/ReverifiPlus';
import {
  Button,
  Paragraph,
  // PlusUpperSection,
  // Title,
  // Header,
  // PlusBottomSection,
  // Item,
  // ItemHeader,
  // ItemIcon,
  // ReverifiPlusDiv,
} from './reverifi-plus.styles';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<ReverifiPlus />);
describe('rendering components', () => {
  it('should render App component without crashing', () => {
    const paragraph = wrapper.find(Paragraph);
    expect(paragraph.text()).toEqual(
      'Search our network and find your supporting team to complete the process'
    );
    // console.log(wrapper.debug());
  });

  it('should invoke the button function correctly', () => {
    const button = wrapper.find('#theButton');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('1');
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Button).text()).toEqual('2');
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Button).text()).toEqual('3');
  });
});
