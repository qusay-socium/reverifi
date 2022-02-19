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
`;

export const SearchButton = styled(Button)`
  margin: 0 0.6rem;
  padding: 0.5rem 0.8rem;
  height: 3rem;
  width: 3rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
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
    border-radius: 2.18rem;
    border: none;
    border: 0.06rem solid ${colors.midGray};
    outline: none;
    padding: 1rem;
    width: 5rem;

    ${mq.mobile`
    min-width: 8rem;
     `}

    ${mq.tablet`
    min-width: 15rem;
     `}
  }

  svg {
    position: absolute;
    top: 1.1rem;
    right: 0.7rem;
    width: 1rem;
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
