import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

const Profile = ({
  onSelectCard,
  openAddClothesModal,
  clothingItems,
  handleUserLogout,
  currentUser,
}) => {
  return (
    <div className="profile">
      <SideBar handleUserLogout={handleUserLogout} currentUser={currentUser} />
      <ClothesSection
        onSelectCard={onSelectCard}
        openAddClothesModal={openAddClothesModal}
        clothingItems={clothingItems}
        currentUser={currentUser}
      />
    </div>
  );
};

export default Profile;
