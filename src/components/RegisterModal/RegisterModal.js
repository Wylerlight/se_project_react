import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const RegisterModal = ({ isOpen, onCloseModal, onRedirect, userRegister }) => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputValues });
    userRegister(inputValues);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      name="register__user"
      buttonText="Next"
      buttonRedirectText="or Log in"
      redirect={onRedirect}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      {/* Email input */}
      <div className="modal__input">
        Email*
        <input
          id="modal__input-email"
          className="modal__input-form"
          name="email"
          type="email"
          placeholder="Email"
          value={inputValues.email || ''}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Password input */}
      <div className="modal__input">
        Password*
        <input
          id="modal__input-password"
          className="modal__input-form"
          name="password"
          type="password"
          placeholder="Password"
          value={inputValues.password || ''}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Name Input */}
      <div className="modal__input">
        Name
        <input
          id="modal__input-name"
          className="modal__input-form"
          name="name"
          type="text"
          placeholder="Name"
          value={inputValues.name || ''}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
      {/* Image URL Input */}
      <div className="modal__input">
        Avatar URL
        <input
          id="modal__input-url"
          className="modal__input-form"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={inputValues.avatar || ''}
          onChange={handleInputChange}
          required
        />
      </div>
      <span className=""></span>
    </ModalWithForm>
  );
};

export default RegisterModal;
