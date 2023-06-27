import React from 'react';
import logo from '../../Logo.svg';
import avatar from '../images/AvatarPicture.png';
import './Header.css';

const Header = ({ locationData, openAddClothesModal }) => {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });
  const location = locationData;
  console.log(openAddClothesModal, 'Add Clothes button clicked');

  /*  const addClothesButton = document.querySelector(
    '.header__add-clothes-button'
  ); */
  // addClothesButton.addEventListener('click', openModal);

  return (
    <header className="header">
      <section className="header__section header__section-left">
        <img alt="logo" src={logo} className="header__logo" />
        <p>
          {currentDate}, {location}
        </p>
      </section>
      <section className="header__section header__section-right">
        <button
          className="header__add-clothes-button"
          type="button"
          onClick={openAddClothesModal}
        >
          Add Clothes
        </button>
        <p className="avatar__name">Tyler Tellez</p>
        <img alt="avatar picture" src={avatar} className="avatar__picture" />
      </section>
    </header>
  );
};

export default Header;
