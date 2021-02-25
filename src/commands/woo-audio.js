'use strict';


exports.run = async (message) => {
  if (message.member.voice.channel) {
    const audioFile = './src/audio/crit.mp3';
    const conn = await message.member.voice.channel.join();
    const dispatcher = conn.play(audioFile);
    dispatcher.on('start', () => {
      console.log(`Playing Audio ${audioFile}!`);
    });
    dispatcher.on('finish', () => {
      console.log('Done!');
      message.member.voice.channel.leave();
    });
    dispatcher.on('error', console.error);
  }
};

exports.conf = {
  aliases: ['woo', 'thatswhativebeenwaitingfor', 'twibwf'],
};

exports.help = {
  name: 'woo-audio',
  description: 'This is what you have been waiting for wooooo',
  usage: 'woo-audio',
};
