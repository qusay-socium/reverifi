import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/shared/Button';
import FormInput from 'components/shared/FormInput';
import Modal from 'components/shared/Modal';
import { useShowModal } from 'contexts/ShowModalContext';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addInvitedUser } from 'services/user';
import { handleTextInput } from 'utils/helpers';
import inviteModalSchema from './invite-modal-schema';
import { InviteForm } from './invite-modal.styles';

/**
 * Invite Modal component
 *
 * @return {JSX.Element}
 */
function InviteModal() {
  const { showModal, setShowModal, modalData, setModalData } = useShowModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(inviteModalSchema),
  });

  /**
   * Handle form submit
   */
  const submit = async ({ name, email }) => {
    const invitedUser = await addInvitedUser({ email, name });

    // add invited user to modal state to send invitations after step 1 submission
    const invitedUsers = modalData?.invitedUsers?.length
      ? [
          ...modalData?.invitedUsers,
          { invitedUserId: invitedUser.id, role: modalData.type },
        ]
      : [{ invitedUserId: invitedUser.id, role: modalData.type }];

    setModalData((prev) => ({
      ...prev,
      invitedUsers,
    }));

    setShowModal(!showModal);
    reset();
  };

  /**
   * Handle modal close
   */
  const handleClose = () => {
    setShowModal(!showModal);
    reset();
  };

  useEffect(() => {
    if (modalData?.val) setValue('name', modalData.val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData?.val]);

  return (
    <Modal show={showModal} handleClose={handleClose}>
      <InviteForm onSubmit={handleSubmit(submit)}>
        <h2>Invite</h2>
        <FormInput
          error={errors.name?.message}
          label="Name"
          name="name"
          placeholder="eg: Jhon Doe"
          register={register}
          maxLength="30"
          onChange={handleTextInput}
          defaultValue={modalData?.val}
        />
        <FormInput
          error={errors.email?.message}
          label="E-mail"
          name="email"
          placeholder="eg: Jhon@domain.com"
          register={register}
          maxLength="50"
        />
        <Button type="submit">Save</Button>
      </InviteForm>
    </Modal>
  );
}

export default InviteModal;
