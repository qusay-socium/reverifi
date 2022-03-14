import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as BuyerAgent } from 'assets/icons/gray-buyer-agent.svg';
import { ReactComponent as Buyer } from 'assets/icons/gray-buyer-group.svg';
import { ReactComponent as SellerAddress } from 'assets/icons/gray-seller-address.svg';
import { ReactComponent as Seller } from 'assets/icons/gray-seller-name.svg';
import { ReactComponent as SellerAgent } from 'assets/icons/gray-seller.svg';
import { ReactComponent as NoteIcon } from 'assets/icons/profile-about.svg';
import Button from 'components/shared/Button';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import TextAreaInput from 'components/shared/FormTextArea';
import TransactionSelectInput from 'components/shared/TransactionSelectInput';
import addPartiesSchema from 'components/transaction/AddPartiesWrapper/add-parties-wrapper-schema';
import {
  ButtonText,
  CheckBoxContainer,
  RowContainer,
  SellerTeamFromContainer,
  SideContainer,
  TextAreaContainer,
  TitleText,
} from 'components/transaction/AddPartiesWrapper/add-parties-wrapper.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { addInvitation } from 'services/invitations';
import { getUsersWithLimit } from 'services/user';

/**
 * Add Parties Wrapper component
 *
 * @return {JSX.Element}
 */
export default function AddPartiesWrapper() {
  const { modalData, setModalData } = useShowModal();
  const [sellerAgentList, setSellerAgentList] = useState([]);
  const [buyerAgentList, setBuyerAgentList] = useState([]);
  const [sellerList, setSellerList] = useState([]);
  const [buyerList, setBuyerList] = useState([]);
  const [isSellerRepresented, setIsSellerRepresented] = useState(false);
  const { listingId } = useParams();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPartiesSchema),
  });

  /**
   * handle Input Change function
   */
  const handleInputChange = async (name, type) => {
    if (name?.length > 2) {
      const data = await getUsersWithLimit(10, name);

      if (type === 'sellerAgent') {
        setSellerAgentList(data);
      } else if (type === 'buyerAgent') {
        setBuyerAgentList(data);
      } else if (type === 'seller') {
        setSellerList(data);
      } else if (type === 'buyer') {
        setBuyerList(data);
      }
    } else {
      setSellerAgentList([]);
      setBuyerAgentList([]);
      setSellerList([]);
      setBuyerList([]);
    }
  };

  /**
   * filter Invited Users function (when id === name the user is invited -not exist-)
   */
  const filterInvitedUsers = (idsAndRolesArray, user, role) => {
    if (user?.name !== user?.id) {
      idsAndRolesArray.push({
        invitedUserId: user?.id,
        role,
      });
    }
  };

  /**
   * form submit function
   */
  const submit = async ({ sellerAgent, buyerAgent, seller, buyer }) => {
    // filter the non exist and send invitations
    const userIdsAndRoles = [];

    filterInvitedUsers(userIdsAndRoles, sellerAgent, 'Seller Agent');
    filterInvitedUsers(userIdsAndRoles, buyerAgent, 'Buyer Agent');
    filterInvitedUsers(userIdsAndRoles, seller, 'Seller');
    filterInvitedUsers(userIdsAndRoles, buyer, 'Buyer');

    await addInvitation({
      listingId,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <SellerTeamFromContainer>
          <SideContainer>
            <TitleText>Seller Team</TitleText>

            <RowContainer>
              <TransactionSelectInput
                options={sellerAgentList}
                control={control}
                label="Seller Agent"
                labelIcon={<SellerAgent />}
                name="sellerAgent"
                placeholder="Select seller agent"
                handleInputChange={handleInputChange}
                setValue={setValue}
                setModalData={setModalData}
                error={errors.sellerAgent?.message}
              />
              <CheckBoxContainer>
                <FormCheckbox
                  label="Represent Seller"
                  name="representSeller"
                  register={register}
                  onChange={() => setIsSellerRepresented(!isSellerRepresented)}
                />
              </CheckBoxContainer>
            </RowContainer>
            {!isSellerRepresented && (
              <RowContainer>
                <FormInput
                  label="Seller Address:"
                  labelIconElement={<SellerAddress />}
                  name="address"
                  placeholder="Seller Address"
                  register={register}
                />

                <TransactionSelectInput
                  options={sellerList}
                  control={control}
                  label="Seller"
                  labelIcon={<Seller />}
                  name="seller"
                  placeholder="Select seller"
                  handleInputChange={handleInputChange}
                  setValue={setValue}
                  setModalData={setModalData}
                  error={errors.seller?.message}
                />
              </RowContainer>
            )}
          </SideContainer>
        </SellerTeamFromContainer>

        <SideContainer>
          <TitleText>Buyer Team</TitleText>

          <RowContainer>
            <TransactionSelectInput
              options={buyerAgentList}
              control={control}
              label="Buyer Agent"
              labelIcon={<BuyerAgent />}
              name="buyerAgent"
              placeholder="Select buyer agent"
              handleInputChange={handleInputChange}
              setValue={setValue}
              setModalData={setModalData}
              error={errors.buyerAgent?.message}
            />

            <TransactionSelectInput
              options={buyerList}
              control={control}
              label="Buyer"
              labelIcon={<Buyer />}
              name="buyer"
              placeholder="Select buyer"
              handleInputChange={handleInputChange}
              setValue={setValue}
              setModalData={setModalData}
              error={errors.buyer?.message}
            />
          </RowContainer>
          <RowContainer>
            <TextAreaContainer>
              <TextAreaInput
                label="Notes"
                labelIconElement={<NoteIcon />}
                name="notes"
                rounded={false}
                limit={140}
                register={register}
              />
            </TextAreaContainer>
          </RowContainer>
          <RowContainer>
            <Button type="submit">
              <ButtonText>Confirm and Next</ButtonText>
            </Button>
          </RowContainer>
        </SideContainer>
      </div>
    </form>
  );
}
