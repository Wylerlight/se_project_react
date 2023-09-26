import ItemCard from '../ItemCard/ItemCard';
import './ClothesSection.css';

const ClothesSection = ({
  onSelectCard,
  openAddClothesModal,
  clothingItems,
  currentUser,
}) => {
  return (
    <div className="clothes__section">
      <div className="clothes__section-title-wrapper">
        <p className="clothes__section-title">Your items</p>
        <button
          type="submit"
          className="clothes__section-button"
          onClick={openAddClothesModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothing__section-cards">
        {clothingItems.map((data) => {
          const isOwn = data.owner === currentUser?._id;

          return (
            <>
              {isOwn && (
                <ItemCard
                  key={data._id}
                  data={data}
                  onSelectCard={onSelectCard}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
