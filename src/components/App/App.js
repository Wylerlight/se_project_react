import React, { useEffect, useState } from 'react';

import './App.css';
import '../ModalWithForm/ModalWithForm.css';
import '../ItemModal/ItemModal.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import AddClothes from '../AddClothes/AddClothes';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather } from '../../utils/WeatherApi';
import { responseEx } from '../../utils/constants';

function App() {
  const [modalOpened, setModalOpened] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState(0);
  const [weathType, setWeathType] = useState('');

  console.log(location);
  console.log(temp);
  console.log(weathType);

  useEffect(() => {
    getWeather().then((data) => {
      console.log(data);
      console.log(data.main.temp);
      console.log(data.name);
      console.log(data.weather[0].main);
      const weatherTemperature = data.main.temp;
      setTemp(weatherTemperature);
      const locationName = data.name;
      setLocation(locationName);
      const weatherType = data.weather[0].main;
      setWeathType(weatherType);
    });
  });

  // const weatherTempFromCode = responseEx['main']['temp'];
  // const weatherType = responseEx['weather'][0].main;
  // const location = responseEx.name;

  /* Radio Button click functions */

  const radioButtonClicked = (e) => {
    console.log(e.currentTarget);
  };

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

  /* Item Card Image Modal functions */
  const handleSelectedCard = (card) => {
    setModalOpened('open');
    setSelectedCard(card);
  };
  //////////////////////////////////////////////
  return (
    <>
      <div className="App">
        <Header locationData={location} openAddClothesModal={handleOpenModal} />
        <Main
          weatherTemp={temp}
          weatherType={weathType}
          onSelectCard={handleSelectedCard}
        />
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

        {modalOpened === 'open' && (
          <ItemModal onClose={handleCloseModal} selectedCard={selectedCard} />
        )}
      </div>
    </>
  );
}

export default App;
