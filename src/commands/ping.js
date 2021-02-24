exports.run = (message) => {
  message.channel.send('Pong');
};

exports.conf = {
  aliases: ['healthcheck'],
};

exports.help = {
  name: 'ping',
  description: 'This is for healthcheck purposes',
  usage: 'ping',
};
