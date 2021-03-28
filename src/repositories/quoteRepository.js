const got = require('got');

let _kanyeUrl;
let _tSwiftUrl;

const getKanye = async () => {
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

const getTSwift = async () => {
  const requestOptions = {
    method: 'GET',
    url: _tSwiftUrl,
  };

  try {
    return await got(requestOptions);
  } catch (e) {
    console.log('Error getting Taylor Swift Quote', e);
  }
};

const initialize = (kanyeUrl, tSwiftUrl) => {
  _kanyeUrl = kanyeUrl;
  _tSwiftUrl = tSwiftUrl;
};

module.exports = {
  initialize,
  getKanye,
  getTSwift,
};
