'use strict';

const vcHelper = require('../utils/voiceChannelHelper');

module.exports = (message, dispatcher, audioFile) => {
  dispatcher.on('start', () => {
    console.log(`Playing Audio ${audioFile}!`);
  });
  dispatcher.on('finish', () => {
    console.log('Done!');
    vcHelper.leaveVC(message);
  });
  dispatcher.on('error', console.error);
};
