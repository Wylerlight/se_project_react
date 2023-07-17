import React from 'react';
import { defaultClothingItems } from '../utils/constants';
import ItemCard from '../components/ItemCard/ItemCard';
import './ClothesSection.css';

const ClothesSection = ({ onSelectCard }) => {
  return (
    <div className="clothes__section">
      <div className="clothes__section-title-wrapper">
        <p className="clothes__section-title">Your items</p>
        <button type="submit" className="clothes__section-button">
          + Add new
        </button>
      </div>
      <div className="clothing__section-cards">
        {defaultClothingItems.map((data) => {
          return (
            <ItemCard key={data._id} data={data} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
