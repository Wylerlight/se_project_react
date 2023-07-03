export const latitude = 34.055569;
export const longitude = -117.182541;
export const APIkey = `393864ae7bb46428ae703a86fe0dd5d7`;
export const defaultClothingItems = [
  {
    _id: 0,
    name: 'Cap',
    weather: 'hot',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591',
  },
  {
    _id: 1,
    name: 'Hoodie',
    weather: 'warm',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8',
  },
  {
    _id: 2,
    name: 'Jacket',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad',
  },
  {
    _id: 3,
    name: 'Sneakers',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f',
  },
  {
    _id: 4,
    name: 'T-Shirt',
    weather: 'hot',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09',
  },
  {
    _id: 5,
    name: 'Winter coat',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4',
  },
];

export const weatherOptions = [
  {
    url: require('../images/DaySunny.svg').default,
    day: true,
    type: 'sunny',
  },
  {
    url: require('../images/DaySunny.svg').default,
    day: true,
    type: 'clear',
  },
  {
    url: require('../images/DayStorm.svg').default,
    day: true,
    type: 'storm',
  },
  {
    url: require('../images/DaySnow.svg').default,
    day: true,
    type: 'snow',
  },
  {
    url: require('../images/DayRain.svg').default,
    day: true,
    type: 'rain',
  },
  {
    url: require('../images/DayFog.svg').default,
    day: true,
    type: 'fog',
  },
  {
    url: require('../images/DayCloudy.svg').default,
    day: true,
    type: 'clouds',
  },
  {
    url: require('../images/NightSunny.svg').default,
    day: false,
    type: 'clear',
  },
  {
    url: require('../images/NightStorm.svg').default,
    day: false,
    type: 'storm',
  },
  {
    url: require('../images/NightSnow.svg').default,
    day: false,
    type: 'snow',
  },
  {
    url: require('../images/NightRain.svg').default,
    day: false,
    type: 'rain',
  },
  {
    url: require('../images/NightFog.svg').default,
    day: false,
    type: 'fog',
  },
  {
    url: require('../images/NightCloudy.svg').default,
    day: false,
    type: 'clouds',
  },
];

export const responseEx = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    '1h': 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: 'IT',
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200,
};
