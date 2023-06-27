import './ItemCard.css';
import { defaultClothingItems } from '../../utils/constants';

const ItemCard = ({ temp }) => {
  return (
    <section className="clothing">
      <p className="clothing__title">Today is {temp} | You may want to wear:</p>
      <ul className="clothing__cards-wrapper">
        {defaultClothingItems.map((data) => {
          return (
            <li
              key={data._id}
              className="clothing__card-items"
              id={`clothing__card-items_${data.name}`}
            >
              <p className="clothing-card-title">{data.name}</p>
              <img
                className="clothing-card-individual"
                id={`clothing-card-individual_${data.name}`}
                alt={data.name}
                src={data.link}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ItemCard;
