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
import AddItemModal from '../AddItemModal/AddItemModal';
import { getWeather } from '../../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from '../../profile/Profile';

function App() {
  const [modalOpened, setModalOpened] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState({});

  const [weathType, setWeathType] = useState('');
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  const dateNow = Date.now() * 0.001;

  const [currentTempUnit, setCurrentTempUnit] = useState('F');

  useEffect(() => {
    getWeather()
      .then((data) => {
        console.log(data);
        const weather = {
          temperature: {
            F: Math.round(data.main.temp),
            C: Math.round(((data.main.temp - 32) * 5) / 9),
          },
        };
        setTemp(weather);
        const locationName = data.name;
        setLocation(locationName);
        const weatherType = data.weather[0].main;
        setWeathType(weatherType.toLowerCase());
        const sunriseData = data.sys.sunrise;
        setSunrise(sunriseData);
        const sunsetData = data.sys.sunset;
        setSunset(sunsetData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const timeOfDay = () => {
    if (dateNow >= sunrise && dateNow < sunset) {
      return true;
    } else {
      return false;
    }
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
    setModalOpened('new-clothes-modal');
  };

  /* Item Card Image Modal functions */
  const handleSelectedCard = (card) => {
    setModalOpened('open');
    setSelectedCard(card);
  };
  //////////////////////////////////////////////

  const handleToggleChange = () => {
    currentTempUnit === 'F' ? setCurrentTempUnit('C') : setCurrentTempUnit('F');
  };

  return (
    <BrowserRouter>
      <>
        <div className="page">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTempUnit, handleToggleChange }}
          >
            <div className="App">
              <Header
                locationData={location}
                openAddClothesModal={handleOpenModal}
              />
              <Switch>
                <Route exact path="/">
                  <Main
                    weatherTemp={temp}
                    weatherType={weathType}
                    onSelectCard={handleSelectedCard}
                    timeOfDay={timeOfDay()}
                  />
                </Route>
                <Route path="/profile">
                  <Profile onSelectCard={handleSelectedCard} />
                </Route>
              </Switch>
              <Footer />
              {modalOpened === 'new-clothes-modal' && (
                <ModalWithForm
                  title="New clothes"
                  name="clothes"
                  buttonText="Add clothes"
                  onClose={handleCloseModal}
                  handleSubmitForm={handleSubmit}
                >
                  <AddClothes />
                </ModalWithForm>
              )}

              {modalOpened === 'open' && (
                <ItemModal
                  onClose={handleCloseModal}
                  selectedCard={selectedCard}
                />
              )}
            </div>
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
