import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ListingSearchContainer = styled.div`
  width: 100%;
  border: none;
  border-bottom: 0.06rem solid ${colors.midGray};
  height: 5rem;
  display: flex;
  position: fixed;
  z-index: 3;
  background-color: ${colors.white};

  select {
    font-size: 0.75rem;
    padding: 0.7rem;
    background-position-x: 100%;
    background-position-y: 0.95rem;
  }
`;

export const SearchButton = styled(Button)`
  margin: 0 0.6rem;
  padding: 0.5rem 0.8rem;
  height: 2.5rem;
  width: 2.5rem;

  svg {
    width: 1.4rem;
    height: 2em;
    margin-left: -0.2rem;
  }
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 1.5rem 0 1.5rem 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 0 0.3rem 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  input {
    background-color: ${colors.white};
    border-radius: 2rem;
    border: none;
    border: 0.06rem solid ${colors.dustyGray};
    outline: none;
    padding: 0.7rem 2.5rem 0.7rem 0.7rem;
    width: 6rem;
    font-size: 0.75rem;
    font-weight: 700;

    ${mq.mobile`
    min-width: 8rem;
     `}

    ${mq.tablet`
    min-width: 16rem;
     `}
  }

  svg {
    background-color: ${colors.white};
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    width: 2.1rem;
    height: 0.8rem;
    cursor: pointer;

    path {
      fill: ${colors.dustyGray};

      &:hover {
        fill: ${colors.gray};
      }
    }
  }
`;
