import './WeatherCard.css';
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day, type, weatherTemp = '0°F' }) => {
  const weatherImageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const weatherImageSrcUrl = weatherImageSrc[0].url;
  const weatherImageSrcType = weatherImageSrc[0].type;

  return (
    <section className="weather">
      <div className="weather__temp">{weatherTemp}</div>
      <img
        className="weather__image"
        alt={weatherImageSrcType}
        src={weatherImageSrcUrl}
      />
    </section>
  );
};

export default WeatherCard;
