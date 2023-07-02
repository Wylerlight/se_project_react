import './AddClothes.css';

const AddClothes = ({ radioClick }) => {
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

        <div className="radio__btn-container">
          <input
            className="radio__btns"
            type="radio"
            id="radioA"
            name="weather_temp"
          />
          <label
            htmlFor="radioA"
            className="radio__btn-label"
            onChange={radioClick}
          >
            Hot
          </label>
        </div>
        <div className="radio__btn-container">
          <input
            className="radio__btns"
            type="radio"
            id="radioB"
            name="weather_temp"
          />
          <label
            htmlFor="radioB"
            className="radio__btn-label"
            onChange={radioClick}
          >
            Warm
          </label>
        </div>
        <div className="radio__btn-container">
          <input
            className="radio__btns"
            type="radio"
            id="radioC"
            name="weather_temp"
          />
          <label
            htmlFor="radioC"
            className="radio__btn-label"
            onChange={radioClick}
          >
            Cold
          </label>
        </div>
      </div>
    </>
  );
};

export default AddClothes;
