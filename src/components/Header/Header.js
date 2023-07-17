import React from 'react';
import logo from '../../Logo.svg';
import avatar from '../../images/AvatarPicture.png';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';

const Header = ({ locationData, openAddClothesModal }) => {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });
  const location = locationData;

  return (
    <header className="header">
      <section className="header__section header__section-left">
        <Link to="/">
          <img alt="logo" src={logo} className="header__logo" />
        </Link>
        <p>
          {currentDate}, {location}
        </p>
      </section>
      <section className="header__section header__section-right">
        <ToggleSwitch />
        <button
          className="header__add-clothes-button"
          type="button"
          onClick={openAddClothesModal}
        >
          Add Clothes
        </button>
        <p className="avatar__name">Tyler Tellez</p>
        <Link to="/profile">
          <img alt="avatar" src={avatar} className="avatar__picture" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
