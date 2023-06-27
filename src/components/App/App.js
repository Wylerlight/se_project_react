import React, { useEffect } from 'react';

import './App.css';
import '../ModalWithForm/ModalWithForm.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import AddClothes from '../AddClothes/AddClothes';
import { getWeather } from '../../utils/weatherApi';
import { responseEx } from '../../utils/constants';

function App() {
  const weatherTempFromCode = responseEx['main']['temp'] + '°F';
  const weatherType = responseEx['weather'][0].main;
  const location = responseEx.name;

  const [modalOpened, setModalOpened] = React.useState('');
  /// option 1
  /* useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        setModalOpened('');
        console.log('Esc key clicked: close');
      }
    };
    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const overlayClickClose = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpened('');
      console.log('overlay clicked');
    }
  };

  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      setModalOpened('');
      console.log('Esc key clicked: close');
    }
  };
  /// option 2
  const handleCloseModal = () => {
    setModalOpened('');

    // handleEscClose();

    // overlayClickClose(e);

    console.log('handleCloseModal run');
  };

  const handleOpenModal = () => {
    setModalOpened('modal__opened');
    console.log('open modal pressed');
  };

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
            esClose={handleEscClose}
          >
            <AddClothes />
          </ModalWithForm>
        )}
        {/* <ItemModal /> */}
      </div>
    </>
  );
}

export default App;
