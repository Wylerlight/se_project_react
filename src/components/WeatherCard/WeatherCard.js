import './WeatherCard.css';
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day, weatherType = 'clear', weatherTemp = '0°F' }) => {
  const weatherImageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === weatherType;
  });
  const weatherImageSrcUrl = weatherImageSrc[0]?.url;
  const weatherImageSrcType = weatherImageSrc[0]?.type;

  return (
    <section className="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img
        className="weather__image"
        alt={weatherImageSrcType}
        src={weatherImageSrcUrl}
      />
    </section>
  );
};

export default WeatherCard;
