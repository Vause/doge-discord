const dataHandler = require('../handlers/tSwiftQuoteHandler');
const {sendMessage} = require('../helpers/messageSender');

exports.run = async (message) => {
  try {
    const data = await dataHandler();
    const quote = data.quote;
    sendMessage(message, quote);
  } catch (e) {
    console.log('Failure to run command', e);
  }
};

exports.conf = {
  aliases: ['tq', 'tswift'],
};

exports.help = {
  name: 'tswiftquote',
  description: 'Sad lady has inspiring thought',
  usage: 'tswiftquote',
};
