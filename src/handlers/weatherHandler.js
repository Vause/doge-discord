const {getCurrentWeather} = require('../repositories/weatherRepository');

module.exports = async (city) => {
  try {
    const data = await getCurrentWeather(city);
    const body = JSON.parse(data.body);

    return {
      body,
    };
  } catch (e) {
    console.log(e);
  }
};
