import React, { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';

function Main({
  weatherTemp,
  weatherType,
  onSelectCard,
  timeOfDay,
  clothingItems,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  console.log(temp);
  const weatherFilter = () => {
    if (temp >= 30) {
      return 'hot';
    } else if (temp >= 19 && temp <= 29) {
      return 'warm';
    } else if (temp <= 18) {
      return 'cold';
    }

    if (temp >= 86) {
      return 'hot';
    } else if (temp >= 66 && temp <= 85) {
      return 'warm';
    } else if (temp <= 65) {
      return 'cold';
    }
  };
  const weatherTempFilter = weatherFilter();
  console.log(weatherTempFilter);
  const filterCards = clothingItems.filter((item) => {
    return item.weather === weatherTempFilter;
  });
  return (
    <main className="main">
      <WeatherCard
        day={timeOfDay}
        weatherType={weatherType}
        weatherTemp={temp}
      />
      <div className="main__title">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
      </div>
      <section className="clothing">
        {filterCards.map((data) => {
          return (
            <ItemCard
              key={data?.id || data?._id}
              data={data}
              onSelectCard={onSelectCard}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
