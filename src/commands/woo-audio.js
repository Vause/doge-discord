'use strict';

const vcHelper = require('../utils/voiceChannelHelper');

exports.run = async (message) => {
  const audioFile = './src/audio/woo.mp3';
  if (!vcHelper.userInVC(message)) return;
  if (vcHelper.botInVC(message)) return;
  const connection = await vcHelper.joinVC(message);
  const dispatch = vcHelper.playAudioFile(connection, audioFile);
  dispatch.on('start', () => {
    console.log(`Playing Audio ${audioFile}!`);
  });
  dispatch.on('finish', () => {
    console.log('Done!');
    vcHelper.leaveVC(message);
  });
  dispatch.on('error', console.error);
};

exports.conf = {
  aliases: ['woo', 'thatswhativebeenwaitingfor', 'twibwf'],
};

exports.help = {
  name: 'woo-audio',
  description: 'This is what you have been waiting for wooooo',
  usage: 'woo-audio',
};
