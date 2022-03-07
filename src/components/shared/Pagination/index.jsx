import PropTypes from 'prop-types';
import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CurrentListing,
  IconWrapper,
  MaxListingNumber,
  PaginationWrapper,
} from './pagination.styles';

/**
 * Pagination component
 *
 * @param {Number} pageNumber current page number
 * @param {Function} setPageNumber set page number function
 * @param {Number} limit page limit
 * @param {Number} dataCount data shown count
 * @param {JSX.Element} children component to apply pagination on it
 *
 *  @return {JSX.Element}
 */
function Pagination({ pageNumber, setPageNumber, limit, dataCount, children }) {
  const PAGE_LIMIT = limit;
  const startItem = pageNumber * PAGE_LIMIT + 1;
  let endItem = startItem - 1 + PAGE_LIMIT;

  if (endItem > dataCount) {
    endItem = dataCount;
  }

  /**
   * handle pagination Left Arrow Click
   */
  const handleLeftArrowClick = () => {
    if (pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  /**
   * handle pagination Right Arrow Click
   */
  const handleRightArrowClick = () => {
    if (
      pageNumber < Math.floor(dataCount / PAGE_LIMIT) &&
      dataCount !== PAGE_LIMIT
    ) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      {children}
      <PaginationWrapper>
        <CurrentListing>{startItem} -</CurrentListing>
        <CurrentListing>{endItem}</CurrentListing>
        <MaxListingNumber>of {dataCount}</MaxListingNumber>
        <IconWrapper onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </IconWrapper>
        <IconWrapper onClick={handleRightArrowClick}>
          <ArrowRight />
        </IconWrapper>
      </PaginationWrapper>
    </div>
  );
}

Pagination.defaultProps = {
  children: null,
  dataCount: 1,
  limit: 1,
  pageNumber: 1,
  setPageNumber: () => {},
};

Pagination.propTypes = {
  children: PropTypes.node,
  dataCount: PropTypes.node,
  limit: PropTypes.node,
  pageNumber: PropTypes.node,
  setPageNumber: PropTypes.func,
};

export default Pagination;
