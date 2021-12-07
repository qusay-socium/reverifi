import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollGrid, Dot, Dots } from './featured-listing.styles';

function Scrollable({ children, initialCount, cardsNum }) {
  const numberOfDots = Math.ceil(cardsNum / initialCount);

  const [dots, setDots] = useState(Array(numberOfDots).fill(false));

  const scrollContainer = useRef(null);

  useEffect(() => {
    setDots([true, ...dots]);
  }, []);

  const activateDot = (index) => {
    const copy = Array(numberOfDots).fill(false);
    copy[index] = true;
    setDots(copy);

    let childrenIndex = 0;

    if (!index) {
      childrenIndex = 0;
    } else if (index === numberOfDots - 1) {
      childrenIndex = cardsNum - 1;
    } else {
      childrenIndex = Math.floor(cardsNum / (numberOfDots - index)) + 1;
    }

    scrollContainer.current?.children[childrenIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <>
      <ScrollGrid count={initialCount} ref={scrollContainer}>
        {children}
      </ScrollGrid>
      <Dots>
        {[...Array(numberOfDots)].map((_, index) => (
          <Dot active={dots[index]} onClick={() => activateDot(index)} />
        ))}
      </Dots>
    </>
  );
}

Scrollable.defaultProps = {
  cardsNum: 1,
  initialCount: 1,
};

Scrollable.propTypes = {
  cardsNum: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  initialCount: PropTypes.number,
};

export default Scrollable;
