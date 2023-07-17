import React from 'react';
import SideBar from './SideBar';
import ClothesSection from './ClothesSection';
import './Profile.css';

const Profile = ({ onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} />
    </div>
  );
};

export default Profile;
