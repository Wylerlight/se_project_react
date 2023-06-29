import React, { useEffect } from 'react';

import './App.css';
import '../ModalWithForm/ModalWithForm.css';
import '../ItemModal/ItemModal.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import AddClothes from '../AddClothes/AddClothes';
import ItemModal from '../ItemModal/ItemModal';
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
  const [selectedCard, setSelectedCard] = React.useState({});
  const [radioButton, setRadioButton] = React.useState('');

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

  const handleCloseItemModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpened('');
    }
  };
  const handleOpenItemModal = (e) => {
    console.log(e.target);
    setModalOpened('open');
    // setSelectedCard(card);
    console.log('item card image open');
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
        <ItemCard
          temp={weatherTempFromCode}
          openItemCardModal={handleOpenItemModal}
        />
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
        {modalOpened === 'open' && (
          <ItemModal onClose={handleCloseItemModal} cardImage={selectedCard} />
        )}
      </div>
    </>
  );
}

export default App;
