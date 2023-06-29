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
        <label className="modal__radio-buttons" onChange={radioClick}>
          <input type="radio" id="radioA" name="weather temp" />
          Hot
        </label>
        <label className="modal__radio-buttons" onChange={radioClick}>
          <input type="radio" id="radioB" name="weather temp" />
          Warm
        </label>
        <label className="modal__radio-buttons" onChange={radioClick}>
          <input type="radio" id="radioC" name="weather temp" />
          Cold
        </label>
      </div>
    </>
  );
};

export default AddClothes;
