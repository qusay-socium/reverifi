import { ReactComponent as filter } from 'assets/icons/filter.svg';
import { ReactComponent as search } from 'assets/icons/search.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  ${mq.desktop`
    max-width: 79rem;
    padding: 1rem;
  `}
`;

export const FilterSection = styled.div`
  border-radius: 1.75rem;
  box-shadow: 0 0.0625rem 0.3125rem ${colors.midGray};
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  margin: 0.125rem 0.3125rem;
  padding: 0.3125rem;
`;

export const Heading = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.4375rem;
  margin: 0.9375rem 0.625rem;
`;

export const FilterSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FilterProperty = styled.div`
  align-items: center;
  display: flex;

  ${mq.tablet`
    display: none; 
  `};
`;

export const FilterIconContainer = styled.div`
  margin: 0.625rem 0rem 0.625rem 0.625rem;
  width: 1rem;
`;

export const FilterIcon = styled(filter)`
  fill: ${colors.green};
  width: 0.75rem;
`;

export const SelectFilter = styled.select`
  background-color: ${colors.white};
  border: none;
  color: ${colors.gray};
  cursor: pointer;
  font-size: 0.75rem;
  margin: 0 0 0.1875rem 0.625rem;

  option {
    background-color: ${colors.white};
    display: flex;
    font-size: 0.9375rem;
  }

  ${mq.mobileWide`
    font-size: 0.9375rem;
  `}

  ${mq.tablet`
    display: flex;
    font-size: 1.125rem;
  `}
`;

export const SelectType = styled(SelectFilter)`
  display: flex;
  margin: 0 0.625rem;
  width: 100%;
`;

export const LocationSearch = styled.input`
  align-content: center;
  align-items: center;
  border: none;
  border-left: 0.0625rem solid ${colors.midGray};
  cursor: text;
  font-size: 0.75rem;
  height: 100%;
  margin: 0 0.3125rem;
  padding: 0 1.5625rem;
  width: 100%;

  ${mq.mobileWide`
    font-size: 0.9375rem;
  `}

  ${mq.tablet`
    padding: 0.625rem;
    text-align: left; 
    width: 100%;
  `};
`;

export const AgentSearch = styled.input`
  border: none;
  border-left: 0.0625rem solid ${colors.midGray};
  cursor: text;
  font-size: 0.75rem;
  height: 100%;
  margin: 0 0.3125rem;
  padding: 0 0 0 1.5625rem;
  width: 100%;

  ${mq.mobileWide`
    font-size: 0.9375rem;
  `};

  ${mq.tablet`
    display: flex;
    padding: 0.625rem;
    text-align: left; 
    width: 100%;
  `};
`;

export const SearchButton = styled.button`
  background-color: ${colors.green};
  border-radius: 50%;
  border: none;
  box-shadow: 0 0.0625rem 0.1875rem ${colors.mercury};
  color: ${colors.white};
  cursor: pointer;
  width: 2.5rem;

  :hover {
    background-color: ${colors.white};
    color: ${colors.midGray};
  }
`;

export const SearchIcon = styled(search)`
  max-width: 1rem;

  ${mq.desktop`
    max-width: 1.5rem;
  `};
`;
