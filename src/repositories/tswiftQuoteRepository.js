const got = require('got');

let _tSwiftUrl;

const get = async () => {
  const requestOptions = {
    method: 'GET',
    url: _tSwiftUrl,
  };

  try {
    return await got(requestOptions);
  } catch (e) {
    console.log('Error getting TSwift Quote', e);
  }
};

const initialize = (tSwiftUrl) => {
  _tSwiftUrl = tSwiftUrl;
};

module.exports = {
  initialize,
  get,
};
