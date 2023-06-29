import React, { useEffect } from 'react';

import './App.css';
import '../ModalWithForm/ModalWithForm.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import AddClothes from '../AddClothes/AddClothes';
import { getWeather } from '../../utils/WeatherApi';
import { responseEx } from '../../utils/constants';

function App() {
  getWeather().then((data) => {
    console.log(data);
  });

  const weatherTempFromCode = responseEx['main']['temp'] + '°F';
  const weatherType = responseEx['weather'][0].main;
  const location = responseEx.name;

  const [modalOpened, setModalOpened] = React.useState('');
  const [radioButton, setRadioButton] = React.useState('');

  /* Radio Button click functions */

  const radioButtonClicked = (e) => {
    /*   console.log(e.target, e.currentTarget);
    console.log(`${e.target.id} clicked`);
    let radioBtn = document.getElementById(`${e.target.id}`);
    console.log(radioBtn); */
    if (e.target === 'on') {
      e.currentTarget.classList.add('modal__radio-buttons-enabled');
    } else {
      e.currentTarget.classList.remove('modal__radio-buttons-enabled');
    }
  };

  // e.target.classList.add('radio__clicked');
  /* Modal functions */
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        setModalOpened('');
      }
    };
    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpened('');
    }
  };

  const handleOpenModal = () => {
    setModalOpened('modal__opened');
    console.log('open modal pressed');
  };
  //////////////////////////////////////////////
  return (
    <>
      <div className="App">
        <Header locationData={location} openAddClothesModal={handleOpenModal} />
        <WeatherCard
          day={true}
          type={weatherType}
          weatherTemp={weatherTempFromCode}
        />
        <ItemCard temp={weatherTempFromCode} />
        {/* <Main /> */}
        <Footer />
        {modalOpened === 'modal__opened' && (
          <ModalWithForm
            title="New clothes"
            name="clothes"
            buttonText="Add clothes"
            onClose={handleCloseModal}
            handleSubmitForm={handleSubmit}
          >
            <AddClothes radioClick={radioButtonClicked} />
          </ModalWithForm>
        )}
        {/* <ItemModal /> */}
      </div>
    </>
  );
}

export default App;
