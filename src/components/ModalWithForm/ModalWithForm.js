const ModalWithForm = ({ title, name, buttonText }) => {
  return (
    <section className="modal">
      <div className="modal__container ">
        <button className="modal__exit" type="button"></button>
        <h2 className="modal__title">New clothing</h2>
        <form className="modal__form " id="">
          {/* Name input */}
          <div className="modal__input">
            Name
            <input
              id="modal__input-name"
              className="modal__input-form"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <span className=""></span>
          {/* Image URL Input */}
          <div className="modal__input">
            Image
            <input
              id="modal__input-url"
              className="modal__input-form"
              name="link"
              type="url"
              placeholder="Image URL"
              required
            />
          </div>
          <span className=""></span>
          {/* Select weather and radio inputs */}
          <p className="modal__radio-title">Select weather type:</p>
          <div className="modal__radio-container">
            {/* pass in labels as props, map over them to addd radio labels */}
            <label className="modal__radio-buttons">
              <input type="radio" name="weather temp" />
              Hot
            </label>
            <label className="modal__radio-buttons">
              <input type="radio" name="weather temp" />
              Warm
            </label>
            <label className="modal__radio-buttons">
              <input type="radio" name="weather temp" />
              Cold
            </label>
          </div>
          <button type="submit" className="modal__submit-clothes" disabled>
            Add clothes
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalWithForm;
