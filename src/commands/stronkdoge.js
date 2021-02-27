'use strict';

const {sendMessage} = require('../utils/messageSender');

exports.run = (message) => {
  const msgText = 'You have awoken the STRONKDOGE';
  const dogeImage = './src/images/cmds/stronk_doge.png';
  sendMessage(message, msgText, dogeImage);
};

exports.conf = {
  aliases: ['sdoge'],
};

exports.help = {
  name: 'stronkdoge',
  description: 'This is for awakening stronkdoge',
  usage: 'stronkdoge',
};
