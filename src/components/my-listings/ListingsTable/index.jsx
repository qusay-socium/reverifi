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
  ArrowLeft,
  ArrowRight,
  CellContainer,
  CurrentListing,
  IconContainer,
  ListingImage,
  ListingImageContainer,
  MaxListingNumber,
  Pagination,
  TableIconContainer,
} from './listing-table.style';

const tableHeaders = ['IMAGE', 'PROPERTY', 'SELLER', 'DATE', 'STATUS', ''];

/**
 *
 * My Listings table component.
 *
 * @param  {func} setDeleteId select the id for the item to delete
 * @param  {func} handleLeftArrowClick handle the previous page
 * @param  {func} handleRightArrowClick handle the next page
 * @param  {number} pageNumber the current page number
 * @param  {object} listings date for the listings
 * @param  {func} setShowModal handle the delete box
 *
 * @return {JSX.Element}
 */
export default function MyListingsTable({
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
              <CellContainer>
                <ListingImageContainer>
                  <ListingImage src={images ? images[0] : listingImage} />
                </ListingImageContainer>
              </CellContainer>
              <CellContainer>{address}</CellContainer>
              <CellContainer>
                <AgentContainer>
                  <AgentImage src={agent?.userInfo?.image || agentImage} />
                  <AgentName>{agent?.name || owner?.name || 'N/A'}</AgentName>
                </AgentContainer>
              </CellContainer>
              <CellContainer>
                {new Date(createdAt).toLocaleDateString()}
              </CellContainer>
              <CellContainer> </CellContainer>
              <CellContainer iconsCell>
                <TableIconContainer hover>
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
                </TableIconContainer>
                <TableIconContainer hover>
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
                </TableIconContainer>
                <TableIconContainer hover>
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
                </TableIconContainer>
                <TableIconContainer hover>
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
                </TableIconContainer>
              </CellContainer>
            </TableRow>
          )
        )}
      </Table>

      <Pagination>
        <CurrentListing>{startItem} -</CurrentListing>
        <CurrentListing>{endItem}</CurrentListing>
        <MaxListingNumber>of {listings?.count}</MaxListingNumber>
        <IconContainer onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </IconContainer>
        <IconContainer onClick={handleRightArrowClick}>
          <ArrowRight />
        </IconContainer>
      </Pagination>
    </>
  );
}

MyListingsTable.propTypes = {
  handleLeftArrowClick: PropTypes.func,
  handleRightArrowClick: PropTypes.func,
  listings: PropTypes.objectOf(PropTypes.string),
  pageNumber: PropTypes.number,
  setDeleteId: PropTypes.func,
  setShowModal: PropTypes.func,
};

MyListingsTable.defaultProps = {
  handleLeftArrowClick: () => {},
  handleRightArrowClick: () => {},
  listings: null,
  pageNumber: null,
  setDeleteId: () => {},
  setShowModal: () => {},
};
