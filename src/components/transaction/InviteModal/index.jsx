import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from 'components/shared/FormInput';
import Modal from 'components/shared/Modal';
import { useShowModal } from 'contexts/ShowModalContext';
import React from 'react';
import { useForm } from 'react-hook-form';
import { handleTextInput } from 'utils/helpers';
import inviteModalSchema from './invite-modal-schema';

function InviteModal() {
  const { showModal, setShowModal } = useShowModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(inviteModalSchema),
  });

  /**
   * Handle form submit
   */
  const submit = () => {
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

  return (
    <Modal show={showModal} handleClose={handleClose}>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          error={errors.name?.message}
          label="Name"
          name="name"
          placeholder="eg: Jhon Doe"
          register={register}
          maxLength="30"
          onChange={handleTextInput}
        />
        <FormInput
          error={errors.email?.message}
          label="E-mail"
          name="email"
          placeholder="eg: Jhon@domain.com"
          register={register}
          maxLength="50"
        />
      </form>
    </Modal>
  );
}

export default InviteModal;
