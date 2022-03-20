import { yupResolver } from '@hookform/resolvers/yup';
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
  RowContainer,
  SellerTeamFromContainer,
  SideContainer,
  TextAreaContainer,
  TitleText,
} from 'components/transaction/AddPartiesWrapper/add-parties-wrapper.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
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
} from 'services/transactions';
import { getUsersWithLimit } from 'services/user';
import { transactionStepsNames } from 'utils/constants';

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
  const submit = async ({ sellerAgent, buyerAgent, seller, buyer, notes }) => {
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

    // add transaction assignees
    await addTransactionAssignees({
      transactionId: transactionData.id,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });

    // add the note
    await addTransactionNote({
      notes,
      transactionId: transactionData.id,
      workflowStepId: workflowStep.id,
    });

    // navigate to step 2
    navigate(`/transaction/${listingId}/${transactionStepsNames.assignTasks}`);
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
      const buyer = assignees.find((item) => item?.role === 'Buyer');
      const buyerAgent = assignees.find((item) => item?.role === 'Buyer Agent');
      const seller = assignees.find((item) => item?.role === 'Seller');
      const sellerAgent = assignees.find(
        (item) => item?.role === 'Seller Agent'
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
