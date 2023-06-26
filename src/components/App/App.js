import React, { useEffect } from 'react';

import './App.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import { getWeather } from '../../utils/weatherApi';
import '../ModalWithForm/ModalWithForm.css';

function App() {
  useEffect(() => {
    getWeather().then((data) => {
      console.log(data);
    });
  });

  return (
    <>
      <div className="App">
        <Header />
        <WeatherCard />
        <ItemCard />
        {/* <Main /> */}
        <Footer />
        <ModalWithForm />
        {/* <ItemModal /> */}
      </div>
    </>
  );
}

export default App;
