import Accordion from 'components/shared/Accordion';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import React, { useEffect, useState } from 'react';
import { getAllPurchaseOffers } from 'services/purchase-offer';
import { formatPhoneNumber } from 'utils/helpers';
import {
  EmailText,
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
function OffersTable() {
  const [offers, setOffers] = useState([]);
  const getAllUserPurchaseOffers = async () => {
    const offerData = await getAllPurchaseOffers();
    setOffers(offerData);
  };

  useEffect(() => {
    getAllUserPurchaseOffers();
  }, []);

  return (
    <Table headers={['PROPERTY']}>
      {offers?.map(
        ({ id, address, listingOffer, price }) =>
          listingOffer.length > 0 && (
            <TableRow key={id}>
              <TableCell>
                <Accordion title={address}>
                  {listingOffer?.map(
                    ({ price: offerPrice, attachments, offeredUser }) => (
                      <OfferList>
                        <OfferListItem>
                          <OfferListItemText>Listing Price</OfferListItemText>
                          <p>$ {price.toLocaleString()}</p>
                        </OfferListItem>
                        <OfferListItem>
                          <OfferListItemText>Offer Price</OfferListItemText>
                          <p>$ {offerPrice?.toLocaleString()}</p>
                        </OfferListItem>
                        <OfferListItem>
                          <OfferListItemText>
                            Mortgage Pre-approval Letter
                          </OfferListItemText>
                          <p>
                            <a href="##">{attachments}</a>
                          </p>
                        </OfferListItem>
                        <OfferListItem>
                          <OfferListItemText>Submitted By</OfferListItemText>
                          <p>{offeredUser?.name}</p>
                          <EmailText
                            href={`mailto:${offeredUser?.email}`}
                          >{` - ${offeredUser?.email} - `}</EmailText>
                          <p>{formatPhoneNumber(offeredUser?.phone)}</p>
                        </OfferListItem>
                      </OfferList>
                    )
                  )}
                </Accordion>
              </TableCell>
            </TableRow>
          )
      )}
    </Table>
  );
}

export default OffersTable;
