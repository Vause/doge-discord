exports.run = (message) => {
  message.channel.send('Ping');
};

exports.help = {
  name: 'pong',
  description: 'This is for healthcheck purposes',
  usage: 'pong',
};
