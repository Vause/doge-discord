const {sendMessage} = require('../helpers/messageSender');


exports.run = (message) => {
  sendMessage(message, 'Ping');
};

exports.help = {
  name: 'pong',
  description: 'This is for healthcheck purposes',
  usage: 'pong',
};
