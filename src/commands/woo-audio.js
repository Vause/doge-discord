'use strict';

const vcHelper = require('../utils/voiceChannelHelper');
const dispatcherHandler = require('../utils/dispatcherHandler');

exports.run = async (message) => {
  const audioFile = './src/audio/woo.mp3';
  if (!vcHelper.userInVC(message)) return;
  if (vcHelper.botInVC(message)) return;
  const connection = await vcHelper.joinVC(message);
  const dispatch = vcHelper.playAudioFile(connection, audioFile);
  dispatcherHandler(message, dispatch, audioFile);
};

exports.conf = {
  aliases: ['woo', 'thatswhativebeenwaitingfor', 'twibwf'],
};

exports.help = {
  name: 'woo-audio',
  description: 'This is what you have been waiting for wooooo',
  usage: 'woo-audio',
};
