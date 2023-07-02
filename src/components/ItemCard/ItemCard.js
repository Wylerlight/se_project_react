import './ItemCard.css';

const ItemCard = ({ data, onSelectCard }) => {
  console.log(data);
  return (
    <ul className="clothing__cards-wrapper">
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
          onClick={() => onSelectCard(data)}
        />
      </li>
    </ul>
  );
};

export default ItemCard;
