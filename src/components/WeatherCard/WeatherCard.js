import './WeatherCard.css';
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day, weatherType, weatherTemp = '0°F' }) => {
  const weatherOption = weatherOptions.find(
    (item) => item.day === day && item.type === weatherType
  );

  const weatherOptionUrl = weatherOption?.url;
  const weatherOptionType = weatherOption?.type;

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
