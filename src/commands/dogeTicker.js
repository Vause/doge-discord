'use strict';

const dataHandler = require('../handlers/dogeTickerHandler');
const {sendMessage} = require('../helpers/messageSender');

exports.run = async (message) => {
  try {
    const tickerId = 74;
    const data = await dataHandler(tickerId);
    const ticker = data.tickerName;
    const price = data.tickerPrice;
    const msgText = `Current price of ${ticker} is ${price}`;
    sendMessage(message, msgText);
  } catch (e) {
    console.log('Failure to run command', e);
  }
};

exports.conf = {
  aliases: ['dogestonk'],
};

exports.help = {
  name: 'doge-ticker',
  description: 'Get the current price of dogecoin!',
  usage: 'doge-ticker',
};
