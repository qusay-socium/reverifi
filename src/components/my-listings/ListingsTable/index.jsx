/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ScheduleIcon } from 'assets/icons/schedule.svg';
import agentImage from 'assets/listing-agent-image.png';
import listingImage from 'assets/listing-image.png';
import Table from 'components/shared/Table';
import { TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AgentContainer,
  AgentImage,
  AgentName,
  ArrowIconContainer,
  ArrowLeft,
  ArrowRight,
  CurrentListing,
  IconContainer,
  ListingImage,
  ListingImageContainer,
  MaxListingNumber,
  Pagination,
  TableCellContainer,
} from './listing-table.style';

const tableHeaders = ['IMAGE', 'PROPERTY', 'SELLER', 'DATE', 'STATUS', ''];

/**
 * My Listings table component.
 *
 * @return {JSX.Element}
 */
export default function MyListings({
  setDeleteId,
  handleLeftArrowClick,
  handleRightArrowClick,
  pageNumber,
  listings,
  setShowModal,
}) {
  const listingPerPage = 8;
  const navigate = useNavigate();

  const startItem = pageNumber * listingPerPage + 1;
  let endItem = startItem - 1 + listingPerPage;
  if (endItem > listings?.count) {
    endItem = listings?.count;
  }

  return (
    <>
      <Table headers={tableHeaders}>
        {listings?.data?.map(
          ({ address, images, agent, createdAt, id, owner }) => (
            <TableRow key={id}>
              <TableCellContainer>
                <ListingImageContainer>
                  <ListingImage src={images ? images[0] : listingImage} />
                </ListingImageContainer>
              </TableCellContainer>
              <TableCellContainer>{address}</TableCellContainer>
              <TableCellContainer>
                <AgentContainer>
                  <AgentImage src={agent?.userInfo?.image || agentImage} />
                  <AgentName>{agent?.name || owner?.name || 'N/A'}</AgentName>
                </AgentContainer>
              </TableCellContainer>
              <TableCellContainer>
                {new Date(createdAt).toLocaleDateString()}
              </TableCellContainer>
              <TableCellContainer> </TableCellContainer>
              <TableCellContainer iconsCell>
                <IconContainer hover>
                  <EyeIcon
                    onClick={() => {
                      navigate(`/listing/${id}`);
                    }}
                  />
                  <Tooltip
                    text="View"
                    arrowPosition="top"
                    position={[3, -0.8]}
                  />
                </IconContainer>
                <IconContainer hover>
                  <EditIcon
                    onClick={() => {
                      navigate(`/my-listings/edit/${id}`);
                    }}
                  />
                  <Tooltip
                    text="Edit"
                    arrowPosition="top"
                    position={[3, -0.5]}
                  />
                </IconContainer>
                <IconContainer hover>
                  <ScheduleIcon
                    onClick={() => {
                      navigate(
                        `/my-listings/listing-schedule/edit/${id}?tab=1`
                      );
                    }}
                  />
                  <Tooltip
                    text="Schedule"
                    arrowPosition="top"
                    position={[3, -1.8]}
                  />
                </IconContainer>
                <IconContainer hover>
                  <DeleteIcon
                    onClick={() => {
                      setShowModal(true);
                      setDeleteId(id);
                    }}
                  />
                  <Tooltip
                    text="Delete"
                    arrowPosition="top"
                    position={[3, -0.8]}
                  />
                </IconContainer>
              </TableCellContainer>
            </TableRow>
          )
        )}
      </Table>

      <Pagination>
        <CurrentListing>{startItem} -</CurrentListing>
        <CurrentListing>{endItem}</CurrentListing>
        <MaxListingNumber>of {listings?.count}</MaxListingNumber>
        <ArrowIconContainer onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </ArrowIconContainer>
        <ArrowIconContainer onClick={handleRightArrowClick}>
          <ArrowRight />
        </ArrowIconContainer>
      </Pagination>
    </>
  );
}

MyListings.propTypes = {
  setDeleteId: PropTypes.func,
};

MyListings.defaultProps = {
  setDeleteId: () => {},
};
