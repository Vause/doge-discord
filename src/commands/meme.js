'use strict';

const fs = require('fs');
const {sendMessage} = require('../utils/messageSender');

exports.run = (message) => {
  const imagePath = './src/images/cmds/meme';
  const msgText = 'Check out this meme';
  const files = fs.readdirSync(imagePath);
  const chosenFile = files[Math.floor(Math.random() * files.length)];
  sendMessage(message, msgText, `${imagePath}/${chosenFile}`);
};

exports.conf = {
  aliases: ['healthcheck'],
};

exports.help = {
  name: 'meme',
  description: 'Sends a random meme',
  usage: 'meme',
};
