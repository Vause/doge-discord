'use strict';


exports.run = async (message) => {
  if (message.member.voice.channel) {
    const audioFile = './src/audio/kazoo-who-are-you.mp3';
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
  aliases: ['whoareyou', 'waitaminute', 'kazoowho'],
};

exports.help = {
  name: 'whoru-audio',
  description: 'Do you actually belong here?',
  usage: 'whoru-audio',
};
