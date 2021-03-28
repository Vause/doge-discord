const got = require('got');

let _kanyeUrl;

const get = async () => {
  const requestOptions = {
    method: 'GET',
    url: _kanyeUrl,
  };

  try {
    return await got(requestOptions);
  } catch (e) {
    console.log('Error getting Kanye Quote', e);
  }
};

const initialize = (kanyeUrl) => {
  _kanyeUrl = kanyeUrl;
};

module.exports = {
  initialize,
  get,
};
