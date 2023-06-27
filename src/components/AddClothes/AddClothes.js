import './AddClothes.css';

const AddClothes = () => {
  return (
    <>
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
        <label htmlFor="weather temp" className="modal__radio-buttons">
          <input type="radio" name="weather temp" />
          Hot
        </label>
        <label htmlFor="weather temp" className="modal__radio-buttons">
          <input type="radio" name="weather temp" />
          Warm
        </label>
        <label htmlFor="weather temp" className="modal__radio-buttons">
          <input type="radio" name="weather temp" />
          Cold
        </label>
      </div>
    </>
  );
};

export default AddClothes;
