import React from 'react';
import SideBar from './SideBar';
import ClothesSection from './ClothesSection';
import './Profile.css';

const Profile = ({ onSelectCard, openAddClothesModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        openAddClothesModal={openAddClothesModal}
      />
    </div>
  );
};

export default Profile;
