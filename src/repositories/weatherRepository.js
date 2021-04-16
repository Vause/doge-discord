const got = require('got');

let _apiKey;
let _url;

const getCurrentWeather = async (city) => {
  const requestOptions = {
    method: 'GET',
    url: `${_url}/current?access_key=${_apiKey}&query=${city}&units=f`,
  };

  try {
    return await got(requestOptions);
  } catch (e) {
    console.log('Error getting current weather', e);
  }
};

const initialize = (apiKey, url) => {
  _apiKey = apiKey;
  _url = url;
};

module.exports = {
  initialize,
  getCurrentWeather,
};
