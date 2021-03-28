const got = require('got');

let _apiKey;
let _url;

const getTickerPrice = async (id) => {
  const requestOptions = {
    method: 'GET',
    url: `${_url}?id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': _apiKey,
    },
  };

  try {
    return await got(requestOptions);
  } catch (e) {
    console.log('Error getting CryptoCurrency ticker price', e);
  }
};

const initialize = (apiKey, url) => {
  _apiKey = apiKey;
  _url = url;
};

module.exports = {
  initialize,
  getTickerPrice,
};
