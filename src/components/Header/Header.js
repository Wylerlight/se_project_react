import React from 'react';
import logo from '../../Logo.svg';
import avatar from '../../images/AvatarPicture.png';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';

const Header = ({ locationData, openModal, isLoggedIn, currentUser }) => {
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
        {isLoggedIn ? (
          <>
            <button
              className="header__add-clothes-button"
              type="button"
              onClick={() => openModal('new-clothes-modal')}
            >
              Add Clothes
            </button>
            <p className="avatar__name">
              {currentUser ? currentUser.name : 'No Name'}
            </p>

            <Link to="/profile">
              <img
                alt="avatar"
                src={avatar ? avatar : currentUser.name[0]}
                className="avatar__picture"
              />
            </Link>
          </>
        ) : (
          <>
            <button
              className="header avatar__sign-up"
              type="button"
              onClick={() => openModal('register-modal-opened')}
            >
              Sign Up
            </button>
            <button
              className="header avatar__log-in"
              type="button"
              onClick={() => openModal('login-modal-opened')}
            >
              Log In
            </button>
          </>
        )}
      </section>
    </header>
  );
};

export default Header;
