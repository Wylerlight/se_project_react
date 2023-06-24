import React, { useEffect } from 'react';

import './App.css';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';

/* 
const latitude = 34.055569;
const longitude = -117.182541;
const APIkey = `393864ae7bb46428ae703a86fe0dd5d7`;

export const getWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);

  return weatherApi;
};

const checkResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

 */

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
