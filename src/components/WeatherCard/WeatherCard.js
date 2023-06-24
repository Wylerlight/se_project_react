import './WeatherCard.css';
import DaySunny from '../images/DaySunny.svg';

const WeatherCard = () => {
  return (
    <section className="weather">
      <div className="weather__temp">Weather</div>
      <img className="weather__image" alt="Daytime Sunny" src={DaySunny} />
    </section>
  );
};

export default WeatherCard;
