import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

const Profile = ({
  onSelectCard,
  clothingItems,
  handleUserLogout,
  currentUser,
  openModal,
  onCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleUserLogout={handleUserLogout}
        currentUser={currentUser}
        openModal={openModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        openAddClothesModal={openModal}
        clothingItems={clothingItems}
        currentUser={currentUser}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
