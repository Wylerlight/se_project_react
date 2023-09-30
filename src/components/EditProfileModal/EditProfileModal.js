import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const EditProfileModal = ({
  isOpen,
  onCloseModal,
  currentUser,
  submitEditProfileData,
}) => {
  const [inputValues, setInputValues] = useState(currentUser);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditProfileData(inputValues);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      buttonText="Save changes"
      buttonRedirectText=""
      redirect={() => {}}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      {/* Name input */}
      <div className="modal__input">
        Name*
        <input
          id="modal__input-name"
          className="modal__input-form"
          name="name"
          type="text"
          placeholder="Name"
          value={inputValues.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Avatar input */}
      <div className="modal__input">
        Avatar
        <input
          id="modal__input-avatar"
          className="modal__input-form"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={inputValues.avatar}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
    </ModalWithForm>
  );
};

export default EditProfileModal;
