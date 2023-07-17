import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  function hadndleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm>
      {/* the contents of the form will go in here */}
    </ModalWithForm>
  );
};

export default AddItemModal;
