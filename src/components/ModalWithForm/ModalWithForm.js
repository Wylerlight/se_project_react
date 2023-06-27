const ModalWithForm = ({
  children,
  title,
  name,
  buttonText,
  onClose,
  esClose,
  handleSubmitForm,
}) => {
  return (
    <section className={`modal modal_type_${name}`} onKeyDown={esClose}>
      <div className="modal__container ">
        <button
          className="modal__exit"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form " id="">
          <fieldset className="modal__fieldset">{children}</fieldset>
          <span className="modal__error"></span>
          <button
            onSubmit={handleSubmitForm}
            type="submit"
            className="modal__submit"
            disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalWithForm;
