import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Wrapper = styled.div`
  align-items: flex-end;
  top: 6rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 5%;
  width: 100%;
  z-index: 99;
  ${mq.tablet`
    right: 1rem;
    width: unset;
  `}
`;

export const NotificationWrap = styled.div`
  animation: fadeIn 0.5s linear forwards;
  width: 90%;
  overflow: visible;
  ${mq.tablet`
    width: fit-content;
  `}
  &.out {
    animation: fadeOut 0.3s linear forwards;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 4rem;
    }
  }
  @keyframes fadeOut {
    0% {
      max-height: 4rem;
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
      max-height: 0;
    }
  }
`;

export const NotificationMessage = styled.div`
  background: ${colors.white};
  border-radius: 0.5rem;
  border: 0.0625rem solid ${colors.lightGray};
  box-shadow: 0rem 0rem 0.625rem rgb(34 34 34 / 10%);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.75rem 3.25rem;
  position: relative;
  width: 100%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 1rem;
  padding: 0;
  position: absolute;
  right: 0.875rem;
  top: 0.875rem;
  width: 1rem;
`;

export const NotificationSvg = styled.button`
  background: none;
  border: none;
  height: 1rem;
  left: 0.875rem;
  padding: 0;
  position: absolute;
  top: 0.875rem;
  width: 1rem;
`;

export const Message = styled.p`
  margin: 0 0.5rem 0.5rem;
  line-height: 1.0625rem;
`;

export const PointsLink = styled.p`
  margin: 0 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.375rem;
  letter-spacing: -0.0063rem;
  text-decoration-line: underline;
  color: ${colors.azure};
  cursor: pointer;
`;
