import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as PriceIcon } from 'assets/icons/dollar-sign.svg';
import { ReactComponent as BuyerAgent } from 'assets/icons/gray-buyer-agent.svg';
import { ReactComponent as Buyer } from 'assets/icons/gray-buyer-group.svg';
import { ReactComponent as Seller } from 'assets/icons/gray-seller-name.svg';
import { ReactComponent as SellerAgent } from 'assets/icons/gray-seller.svg';
import { ReactComponent as NoteIcon } from 'assets/icons/profile-about.svg';
import Button from 'components/shared/Button';
import FormCheckbox from 'components/shared/FormCheckbox';
import TextAreaInput from 'components/shared/FormTextArea';
import TransactionSelectInput from 'components/shared/TransactionSelectInput';
import addPartiesSchema from 'components/transaction/AddPartiesWrapper/add-parties-wrapper-schema';
import {
  ButtonText,
  CheckBoxContainer,
  PriceInput,
  RowContainer,
  SellerTeamFromContainer,
  SideContainer,
  TextAreaContainer,
  TextAreaDiv,
  TitleText,
} from 'components/transaction/AddPartiesWrapper/add-parties-wrapper.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addInvitation } from 'services/invitations';
import { getListingsById } from 'services/listing';
import {
  addOrUpdateTransaction,
  addTransactionAssignees,
  addTransactionNote,
  getAssignees,
  getNotes,
  getWorkflowStep,
  updateTransaction,
} from 'services/transactions';
import { getUsersWithLimit } from 'services/user';
import { transactionRoles, transactionStepsNames } from 'utils/constants';
import { handleNumberInput } from 'utils/helpers';

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
  const [transactionData, setTransactionData] = useState({});
  const [workflowStep, setWorkflowStep] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addPartiesSchema),
  });

  /**
   * handle Input Change function
   */
  const handleInputChange = async (userName, type) => {
    if (userName?.length > 2) {
      const data = await getUsersWithLimit(10, userName);

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
    if (user?.name !== user?.id && user?.id) {
      idsAndRolesArray.push({
        invitedUserId: user?.id,
        role,
      });
    }
  };

  /**
   * form submit function
   */
  const submit = async ({
    sellerAgent,
    buyerAgent,
    seller,
    buyer,
    notes,
    finalSalePrice,
  }) => {
    // filter the non exist and send invitations
    const userIdsAndRoles = [];

    filterInvitedUsers(
      userIdsAndRoles,
      sellerAgent,
      transactionRoles.sellerAgent
    );
    filterInvitedUsers(
      userIdsAndRoles,
      buyerAgent,
      transactionRoles.buyerAgent
    );
    filterInvitedUsers(userIdsAndRoles, seller, transactionRoles.seller);
    filterInvitedUsers(userIdsAndRoles, buyer, transactionRoles.buyer);

    await addInvitation({
      listingId,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });

    await updateTransaction({
      finalSalePrice,
      transactionId: transactionData.id,
    });

    // add transaction assignees
    await addTransactionAssignees({
      transactionId: transactionData.id,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });

    // add the note
    if (notes) {
      await addTransactionNote({
        notes,
        transactionId: transactionData.id,
        workflowStepId: workflowStep.id,
      });
    }

    // navigate to step 2
    navigate(
      `/transaction/${listingId}/${transactionStepsNames.assignTasks.route}`
    );
  };

  /**
   * fetch Transaction Data function
   */
  const fetchTransactionData = async () => {
    // reset modal data
    setModalData(null);

    // get step info
    const step = await getWorkflowStep(1);
    setWorkflowStep(step);

    // create transaction record
    const transactionRecord = await addOrUpdateTransaction({
      listingId,
      workflowStepId: step.id,
    });
    setTransactionData(transactionRecord);

    // fill final sale price input
    if (transactionRecord?.finalSalePrice) {
      setValue('finalSalePrice', transactionRecord?.finalSalePrice);
    }

    // get listing agent and owner
    const listingData = await getListingsById(listingId);

    if (listingData?.agent) {
      setValue('sellerAgent', {
        id: listingData?.agent.id,
        name: listingData?.agent.name,
      });
    }
    if (listingData?.owner) {
      setValue('seller', {
        id: listingData?.owner.id,
        name: listingData?.owner.name,
      });
    }
    // fill inputs if data exist
    const assignees = await getAssignees(transactionRecord.id);

    if (assignees.length) {
      const buyer = assignees.find(
        (item) => item?.role === transactionRoles.buyer
      );
      const buyerAgent = assignees.find(
        (item) => item?.role === transactionRoles.buyerAgent
      );
      const seller = assignees.find(
        (item) => item?.role === transactionRoles.seller
      );
      const sellerAgent = assignees.find(
        (item) => item?.role === transactionRoles.sellerAgent
      );

      reset({
        buyer: buyer?.assignedUser?.id
          ? { id: buyer?.assignedUser?.id, name: buyer?.assignedUser?.name }
          : null,
        buyerAgent: buyerAgent?.assignedUser?.id
          ? {
              id: buyerAgent?.assignedUser?.id,
              name: buyerAgent?.assignedUser?.name,
            }
          : null,
        seller: seller?.assignedUser?.id
          ? {
              id: seller?.assignedUser?.id,
              name: seller?.assignedUser?.name,
            }
          : null,
        sellerAgent: sellerAgent?.assignedUser?.id
          ? {
              id: sellerAgent?.assignedUser?.id,
              name: sellerAgent?.assignedUser?.name,
            }
          : null,
      });
    }

    const note = await getNotes(transactionRecord.id, step.id);

    if (note?.notes) setValue('notes', note?.notes);
  };

  useEffectOnce(fetchTransactionData);

  useEffect(() => {
    // to fill the fields of with the pop up invited user data
    if (modalData?.invitedUsers.length) {
      const seller = modalData?.invitedUsers.find(
        ({ role }) => role === transactionRoles.seller
      );
      const sellerAgent = modalData?.invitedUsers.find(
        ({ role }) => role === transactionRoles.sellerAgent
      );
      const buyer = modalData?.invitedUsers.find(
        ({ role }) => role === transactionRoles.buyer
      );
      const buyerAgent = modalData?.invitedUsers.find(
        ({ role }) => role === transactionRoles.buyerAgent
      );

      if (seller) {
        setValue('seller', { id: seller?.id, name: seller?.name });
      }
      if (sellerAgent) {
        setValue('sellerAgent', {
          id: sellerAgent?.id,
          name: sellerAgent?.name,
        });
      }
      if (buyer) {
        setValue('buyer', {
          id: buyer?.id,
          name: buyer?.name,
        });
      }
      if (buyerAgent) {
        setValue('buyerAgent', {
          id: buyerAgent?.id,
          name: buyerAgent?.name,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData?.invitedUsers]);

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
                  onChange={({ target: { checked } }) =>
                    setIsSellerRepresented(checked)
                  }
                />
              </CheckBoxContainer>
            </RowContainer>
            {!isSellerRepresented && (
              <RowContainer>
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
                <div />
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
            <PriceInput
              error={errors.finalSalePrice?.message}
              id="finalSalePrice"
              label="Final Sale Price"
              name="finalSalePrice"
              placeholder="Enter Final Sale Price"
              register={register}
              maxLength="7"
              labelIconElement={<PriceIcon />}
              onChange={(e) => {
                handleNumberInput(e);
                setValue('finalSalePrice', e.target.value);
              }}
            />
          </RowContainer>
          <TextAreaDiv>
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
          </TextAreaDiv>

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
