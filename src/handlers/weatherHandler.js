const {getCurrentWeather} = require('../repositories/weatherRepository');

const _getWindSpeedAndDir = (data) => {
  return data.wind_speed + 'mph ' + data.wind_dir;
};

const _flattenWeatherDescriptions = (data) => {
  return data.weather_descriptions.join(', ');
};

const _mapWeatherResponse = (loc, current) => {
  return {
    asOfDateTime: loc.localtime,
    location: loc.name,
    temperature: current.temperature,
    weatherIcon: current.weather_icons[0],
    weatherDescriptions: _flattenWeatherDescriptions(current),
    wind: _getWindSpeedAndDir(current),
    feelsLike: current.feelslike,
  };
};

module.exports = async (city) => {
  try {
    const data = await getCurrentWeather(city);
    const body = JSON.parse(data.body);
    const locationData = body.location;
    const currentWeatherData = body.current;
    return _mapWeatherResponse(locationData, currentWeatherData);
  } catch (e) {
    console.log(e);
  }
};
