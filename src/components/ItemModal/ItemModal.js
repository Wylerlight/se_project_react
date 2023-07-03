import './ItemModal.css';

const ItemModal = ({ onClose, selectedCard }) => {
  return (
    <section className="modal item__modal" onClick={onClose}>
      <div className="modal__container item__modal-container">
        <button
          className="modal__exit"
          type="button"
          onClick={onClose}
        ></button>
        <div className="item__modal">
          <p className="item__modal-title">{selectedCard.name}</p>
          <img
            className="item__modal-image"
            alt={selectedCard.name}
            src={selectedCard.link}
          />
        </div>
        <p className="item__modal-weather">Weather: {selectedCard.weather}</p>
      </div>
    </section>
  );
};

export default ItemModal;
