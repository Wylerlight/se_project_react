import React, { useEffect } from 'react';

import './App.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
// import { getWeather } from '../../utils/WeatherApi';

function App() {
  /*   useEffect(() => {
    getWeather().then((data) => {
      console.log(data);
    });
  }); */

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <WeatherCard />
          <ItemCard />
        </main>
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <ModalWithForm /> */}
        {/* <ItemModal /> */}
      </div>
    </>
  );
}

export default App;
