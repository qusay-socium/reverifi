import { ReactComponent as AcceptIcon } from 'assets/icons/dashboard-offers-accept.svg';
import { ReactComponent as DeclineIcon } from 'assets/icons/dashboard-offers-decline.svg';
import Accordion from 'components/shared/Accordion';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import propTypes from 'prop-types';
import React from 'react';
import {
  CounterOfferIcon,
  IconsContainer,
  OfferList,
  OfferListItem,
  OfferListItemText,
} from './offers-table.styles';

/**
 * Offers Table component
 *
 * @param {Array(Object)} data offers data array
 *
 * @return {JSX.Element}
 */
function OffersTable({ data }) {
  return (
    <Table headers={['PROPERTY']}>
      {data.map(
        ({
          title,
          listingPrice,
          expirationDate,
          mortgageLetter,
          myRole,
          offerPrice,
          submittedBy,
          submittedOn,
        }) => (
          <TableRow key={title}>
            <TableCell>
              <Accordion title={title}>
                <OfferList>
                  <OfferListItem>
                    <OfferListItemText>Listing Price</OfferListItemText>
                    <p>${listingPrice.toLocaleString()}</p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>Offer Price</OfferListItemText>
                    <p>${offerPrice.toLocaleString()}</p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>
                      Mortgage Pre-approval Letter
                    </OfferListItemText>
                    <p>
                      <a href="##">{mortgageLetter}</a>
                    </p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>Submitted By</OfferListItemText>
                    <p>{submittedBy}</p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>Submitted On</OfferListItemText>
                    <p>{submittedOn}</p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>Expiration Date</OfferListItemText>
                    <p>{expirationDate}</p>
                  </OfferListItem>
                  <OfferListItem>
                    <OfferListItemText>My Role</OfferListItemText>
                    <p>{myRole}</p>
                  </OfferListItem>
                </OfferList>
              </Accordion>
            </TableCell>

            <IconsContainer>
              <IconContainer>
                <AcceptIcon />
              </IconContainer>
              <IconContainer>
                <DeclineIcon />
              </IconContainer>
              <IconContainer>
                <CounterOfferIcon />
                <Tooltip
                  text="Counter Offer"
                  arrowPosition="top"
                  position={[2.3, -3]}
                />
              </IconContainer>
            </IconsContainer>
          </TableRow>
        )
      )}
    </Table>
  );
}

OffersTable.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default OffersTable;
