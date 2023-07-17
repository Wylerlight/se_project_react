import React from 'react';
import avatar from '../images/AvatarPicture.png';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <img
        alt="sidebar__avatar"
        src={avatar}
        className="sidebar__avatar-picture"
      />
      <p className="sidebar__avatar-name">Tyler Tellez</p>
    </div>
  );
};

export default SideBar;
