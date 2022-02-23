import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CheckBoxWrapper = styled.div`
  position: relative;

  ${mq.tablet`
      width:13rem;
  `}
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  width: 2.8rem;
  border-radius: 1rem;
  background: ${colors.midGray};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin: 0.12rem;
    background: ${colors.white};
    transition: 0.3s;
  }
`;

export const TextLabel = styled.label`
  font-size: 0.8rem;
  margin-left: 3.4rem;
  color: ${colors.gray};
`;

export const CheckBox = styled.input`
  display: none;
  z-index: 1;
  border-radius: 1rem;
  width: 2.8rem;

  &:checked + ${CheckBoxLabel} {
    background: ${colors.green};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      margin-left: 1.65rem;
      transition: 0.3s;
    }
  }
`;
