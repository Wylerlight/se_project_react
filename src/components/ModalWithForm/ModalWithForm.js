import React from 'react';

const ModalWithForm = ({
  children,
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  isOpen,
}) => {
  return (
    <section className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__container ">
        <button
          className="modal__exit"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form " id="" onSubmit={onSubmit}>
          <fieldset className="modal__fieldset">{children}</fieldset>
          <span className="modal__error"></span>
          <button
            type="submit"
            className="modal__submit"
            // disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalWithForm;
