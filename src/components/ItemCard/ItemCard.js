import './ItemCard.css';
import tshirt from '../images/T-Shirt.png';
import shorts from '../images/Shorts.png';
import cap from '../images/Cap.png';
import shoes from '../images/Sneakers 1.png';

const ItemCard = () => {
  return (
    <section className="clothing">
      <p className="clothing__title">
        Today is WEATHER / You may want to wear:
      </p>
      <ul className="clothing__cards-wrapper">
        <li className="clothing__cards-items">
          <p className="clothing-card-title">T-Shirt</p>
          <img className="clothing-card-individual" alt="tshirt" src={tshirt} />
        </li>
        <li className="clothing__cards-items">
          <p className="clothing-card-title">Shorts</p>
          <img className="clothing-card-individual" alt="tshirt" src={shorts} />
        </li>
        <li className="clothing__cards-items">
          <p className="clothing-card-title">Cap</p>
          <img className="clothing-card-individual" alt="tshirt" src={cap} />
        </li>
        <li
          className="clothing__cards-items"
          id="clothing__cards-items_sneaker"
        >
          <p className="clothing-card-title">Sneakers</p>
          <img
            className="clothing-card-individual"
            id="clothing-card-individual_sneaker"
            alt="tshirt"
            src={shoes}
          />
        </li>
      </ul>
    </section>
  );
};

export default ItemCard;
