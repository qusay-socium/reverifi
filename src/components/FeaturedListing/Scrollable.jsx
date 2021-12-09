import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types/prop-types';

import { ScrollGrid, Dot, Dots } from './featured-listing.styles';

function Scrollable({ children, initialCount, cardsNum }) {
  const numberOfDots = Math.ceil(cardsNum / initialCount);

  const scrollContainer = useRef(null);

  const [dots, setDots] = useState(Array(numberOfDots));
  const [mouseIn, setMouseIn] = useState(false);

  useEffect(() => {
    // active first dot at start
    setDots([true, ...dots]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollHandler = () => {
    const scrollRef = scrollContainer.current;

    const scrollAmount = (scrollRef.scrollLeft / scrollRef.scrollWidth).toFixed(
      1
    );

    if (mouseIn) {
      const copy = Array(numberOfDots);
      const index = Math.round(numberOfDots * scrollAmount);
      copy[index] = true;
      setDots(copy);
    }
  };

  const activateDot = (index) => {
    // set mouseIn to prevent update dots from scroll function
    setMouseIn(false);

    // reset it cuz the first element is true from the (useEffect)
    const copy = Array(numberOfDots);
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
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <>
      <ScrollGrid
        count={initialCount}
        ref={scrollContainer}
        onScroll={scrollHandler}
        onClick={() => setMouseIn(true)}
        onTouchStart={() => setMouseIn(true)}
      >
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
