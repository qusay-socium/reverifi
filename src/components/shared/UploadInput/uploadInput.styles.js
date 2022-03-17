import styled from 'styled-components';

export const InputWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
  ::file-selector-button {
    cursor: pointer;
  }
`;
