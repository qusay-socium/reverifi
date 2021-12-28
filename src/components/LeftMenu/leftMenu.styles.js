import styled from 'styled-components';
// import mq from 'styles/media-query';
import colors from 'styles/colors';

export const Div = styled.div`
  background-color: ${colors.mineShaft};
  max-width: 240px;
  max-height: 773px;
  padding: 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-radius: 0.7rem;
  margin: 1rem;
`;

export const MenuAnchor = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.2rem;
`;

// styled(ggffr)`
// path{

// }
// ` this if I wanted to edit the svg color or style with the hover.

// TODO : for tablet and mobile the menu gonna be above other elements = z-index=1;
