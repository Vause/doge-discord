'use strict';

const fs = require('fs');

exports.run = (message) => {
  const imagePath = './src/images/cmds/meme/';
  const files = fs.readdirSync(imagePath);
  const chosenFile = files[Math.floor(Math.random() * files.length)];
  message.channel.send('hello', {
    files: [
      `${imagePath}${chosenFile}`,
    ],
  });
  console.log(`Sending Image ${chosenFile}`);
};

exports.help = {
  name: 'meme',
  description: 'Sends a random meme',
  usage: 'meme',
};
