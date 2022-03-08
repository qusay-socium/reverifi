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
 *
 *  @return {JSX.Element}
 */
function Pagination({ pageNumber, setPageNumber, limit = 8, dataCount }) {
  const startItem = pageNumber * limit + 1;
  let endItem = startItem - 1 + limit;

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
    if (pageNumber < Math.floor(dataCount / limit) && dataCount !== limit) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
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
  );
}

Pagination.defaultProps = {
  dataCount: 1,
  limit: 8,
  pageNumber: 1,
  setPageNumber: () => {},
};

Pagination.propTypes = {
  dataCount: PropTypes.node,
  limit: PropTypes.node,
  pageNumber: PropTypes.node,
  setPageNumber: PropTypes.func,
};

export default Pagination;
