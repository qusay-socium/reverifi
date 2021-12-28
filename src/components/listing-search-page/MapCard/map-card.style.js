import styled from 'styled-components';
import colors from 'styles/colors';

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGrey};
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: -10rem;
  max-width: 24rem;
  min-width: 22rem;
  overflow: hidden;
  position: absolute;
`;

export const ImageContainer = styled.div`
  max-height: 10rem;
  overflow: hidden;
  position: relative;
`;

export const Badge = styled.div`
  background-color: ${colors.orange};
  border-radius: 0.31rem;
  color: ${colors.white};
  margin: 1rem;
  padding: 0.3rem 1.2rem;
`;

export const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 1rem;
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceText = styled.div`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  padding-right: 0.8rem;
  h2 {
    color: ${colors.green};
    padding-right: 0.5rem;
  }
`;
export const TimeText = styled.div`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  font-size: 0.8rem;
  padding-right: 1rem;
  white-space: nowrap;
  h4 {
    color: ${colors.black};
    padding-left: 0.5rem;
  }
`;
