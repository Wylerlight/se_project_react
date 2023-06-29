import './ItemModal.css';
import { defaultClothingItems } from '../../utils/constants';
import mockCap from '../images/mock-cap.png';

const ItemModal = ({ onClose, cardImage }) => {
  console.log(cardImage);
  return (
    <section className="modal item__modal" onClick={onClose}>
      <div className="modal__container item__modal-container">
        <button
          className="modal__exit"
          type="button"
          onClick={onClose}
        ></button>
        <div className="item__card">
          <p className="item__card-title"></p>
          <p className="item__card-weather">Weather: Hot</p>
          <img className="item__card-image" src={''} />
        </div>
      </div>
    </section>
  );
};

export default ItemModal;
