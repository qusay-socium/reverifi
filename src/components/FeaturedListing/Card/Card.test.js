import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import colors from 'styles/colors';
import { Tag } from './card.styles';

describe('test styled components that have props', () => {
  it('should apply default styles to Tag component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const tree = renderer.create(<Tag />).toJSON();

    expect(tree).toHaveStyleRule('background-color', colors.lightgreen);
  });

  it('should apply props styles to Tag component', () => {
    const tree = renderer.create(<Tag color="red" />).toJSON();

    expect(tree).toHaveStyleRule('background-color', 'red');
  });
});
