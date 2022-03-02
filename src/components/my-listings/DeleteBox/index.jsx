import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import Modal from 'components/shared/Modal';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteListingById } from 'services/listing';
import {
  BoxContainer,
  BoxText,
  CancelButton,
  DeleteBoxButton,
  DeleteBoxText,
  DeleteBoxTitle,
  DeleteButton,
} from './delete-box.style';

/**
 * Component for rendering share listing modal.
 *
 * @return {JSX.Element}
 */
function DeleteBox({ deleteId }) {
  const { showModal, setShowModal } = useShowModal();

  const deleteListing = async () => {
    await deleteListingById(deleteId);
  };

  return (
    <Modal show={showModal} showCloseIcon>
      <BoxContainer>
        <DeleteIcon />
        <DeleteBoxTitle>DELETE LISTING?</DeleteBoxTitle>
        <DeleteBoxText>
          This listing will be permanently deleted from reverifi. This cannot be
          <BoxText>undone</BoxText>.
        </DeleteBoxText>
        <DeleteBoxButton>
          <CancelButton
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </CancelButton>
          <DeleteButton
            onClick={() => {
              deleteListing();
              setShowModal(false);
            }}
          >
            Delete
          </DeleteButton>
        </DeleteBoxButton>
      </BoxContainer>
    </Modal>
  );
}

DeleteBox.propTypes = {
  deleteId: PropTypes.string,
};

DeleteBox.defaultProps = {
  deleteId: null,
};

export default DeleteBox;
