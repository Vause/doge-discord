const {sendMessage} = require('../helpers/messageSender');
const dataHandler = require('../handlers/weatherHandler');
const lodash = require('lodash');

const _mapFields = (weatherData) => {
  const fields = [];
  for (const [k, v] of Object.entries(weatherData)) {
    mappedData = {
      name: lodash.startCase(k),
      value: v,
    };
    fields.push(mappedData);
  }
  return fields;
};

exports.run = async (message, args) => {
  if (args.length < 1) {
    sendMessage(message, 'You need to specify your city!');
    return;
  }
  const city = args[0];
  const data = await dataHandler(city);
  const image = {
    url: data.weatherIcon,
  };
  delete data.weatherIcon;

  const fields = _mapFields(data);

  const helpEmbed = {
    color: 0x0099ff,
    title: 'Current Weather',
    fields,
    image,
  };
  sendMessage(message, {embed: helpEmbed});
};

exports.conf = {
  aliases: ['weatherr'],
};

exports.help = {
  name: 'weather',
  description: 'This is for getting weather',
  usage: 'weather',
};
