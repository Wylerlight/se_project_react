import './WeatherCard.css';
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day, weatherType = 'clear', weatherTemp = '0°F' }) => {
  const weatherOption = weatherOptions.filter((item) => {
    return item.day === day && item.type === weatherType;
  });
  const weatherOptionUrl = weatherOption[0]?.url;
  const weatherOptionType = weatherOption[0]?.type;
  // Note for reviewer: I would use .find() instead but it returns me errors that don't pop up with filter. If I were to use .find() with an arrow function arguement, the documentation examples show that I then have to find and match specific variables. ex. .find(({day}) => {day === 'sunny'})
  return (
    <section className="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img
        className="weather__image"
        alt={weatherOptionType}
        src={weatherOptionUrl}
      />
    </section>
  );
};

export default WeatherCard;
