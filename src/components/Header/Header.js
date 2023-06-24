import React from 'react';
import logo from '../../Logo.svg';
import avatar from '../images/AvatarPicture.png';
import './Header.css';
// import Api from '../../utils/WeatherApi';

const Header = () => {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <section className="header__section header__section-left">
        <img alt="logo" src={logo} className="header__logo" />
        <p>{currentDate}</p>
      </section>
      <section className="header__section header__section-right">
        <button className="header__add-clothes-button" type="button">
          Add Clothes
        </button>
        <p className="avatar__name">Tyler Tellez</p>
        <img alt="avatar picture" src={avatar} className="avatar__picture" />
      </section>
    </header>
  );
};

export default Header;
