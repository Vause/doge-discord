'use strict';

const {sendMessage} = require('../utils/messageSender');

exports.run = (message) => {
  sendMessage(message, 'Pong');
};

exports.conf = {
  aliases: ['healthcheck'],
};

exports.help = {
  name: 'ping',
  description: 'This is for healthcheck purposes',
  usage: 'ping',
};
