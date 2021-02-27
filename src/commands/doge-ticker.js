'use strict';

const {getTickerPrice} = require('../repositories/cryptoCurrencyRepository');
const {sendMessage} = require('../utils/messageSender');

exports.run = async (message) => {
  try {
    const tickerId = 74;
    const data = await getTickerPrice(tickerId);
    const body = JSON.parse(data.body);
    const ticker = body.data[tickerId].name;
    const price = body.data[tickerId].quote.USD.price;
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
