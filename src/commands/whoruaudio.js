const vcHelper = require('../helpers/voiceChannelHelper');
const dispatcherHandler = require('../handlers/dispatcherHandler');

exports.run = async (message) => {
  const audioFile = './src/audio/kazoo-who-are-you.mp3';
  if (!vcHelper.userInVC(message)) return;
  if (vcHelper.botInVC(message)) return;
  const connection = await vcHelper.joinVC(message);
  const dispatch = vcHelper.playAudioFile(connection, audioFile);
  dispatcherHandler(message, dispatch, audioFile);
};

exports.conf = {
  aliases: ['whoareyou', 'waitaminute', 'kazoowho'],
};

exports.help = {
  name: 'whoruaudio',
  description: 'Do you actually belong here?',
  usage: 'whoruaudio',
};
