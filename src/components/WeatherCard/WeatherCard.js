import './WeatherCard.css';
import DaySunny from '../images/DaySunny.svg';

const weatherOptions = [
  { url: require('../images/DaySunny.svg').default, day: true, type: 'sunny' },
  { url: require('../images/DayStorm.svg').default, day: true, type: 'storm' },
  { url: require('../images/DaySnow.svg').default, day: true, type: 'snow' },
  { url: require('../images/DayRain.svg').default, day: true, type: 'rain' },
  { url: require('../images/DayFog.svg').default, day: true, type: 'fog' },
  {
    url: require('../images/DayCloudy.svg').default,
    day: true,
    type: 'cloudy',
  },
  {
    url: require('../images/NightSunny.svg').default,
    day: false,
    type: 'sunny',
  },
  {
    url: require('../images/NightStorm.svg').default,
    day: false,
    type: 'storm',
  },
  { url: require('../images/NightSnow.svg').default, day: false, type: 'snow' },
  { url: require('../images/NightRain.svg').default, day: false, type: 'rain' },
  { url: require('../images/NightFog.svg').default, day: false, type: 'fog' },
  {
    url: require('../images/NightCloudy.svg').default,
    day: false,
    type: 'cloudy',
  },
];

const WeatherCard = ({ day = true, type = 'rain', weatherTemp = 0 }) => {
  const weatherImageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const weatherImageSrcUrl = weatherImageSrc[0].url;

  return (
    <section className="weather">
      <div className="weather__temp">Weather</div>
      <img
        className="weather__image"
        alt="Daytime Sunny"
        src={weatherImageSrcUrl}
      />
    </section>
  );
};

export default WeatherCard;
