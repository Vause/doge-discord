const dataHandler = require('../handlers/kanyeQuoteHandler');
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
  aliases: ['kq', 'kanye'],
};

exports.help = {
  name: 'kanyequote',
  description: 'Wack man gives thoughts',
  usage: 'kanyequote',
};
