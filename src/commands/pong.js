'use strict';

const {sendMessage} = require('../utils/messageSender');


exports.run = (message) => {
  sendMessage(message, 'Ping');
};

exports.help = {
  name: 'pong',
  description: 'This is for healthcheck purposes',
  usage: 'pong',
};
