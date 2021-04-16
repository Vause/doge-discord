const {sendMessage} = require('../helpers/messageSender');
const dataHandler = require('../handlers/weatherHandler');

exports.run = async (message, args) => {
  if (args.length < 1) {
    sendMessage(message, 'You need to specify your city!');
    return;
  }
  const city = args[0];
  const data = await dataHandler(city);
};

exports.conf = {
  aliases: ['weatherr'],
};

exports.help = {
  name: 'weather',
  description: 'This is for getting weather',
  usage: 'weather',
};
