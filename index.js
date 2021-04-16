const Discord = require('discord.js');
const config = require('./config');
const eventHandler = require('./src/handlers/eventHandler');
const {setCommandsAndAliases} = require('./src/helpers/commandLoader');
const cryptoCurrRepo = require('./src/repositories/cryptoCurrencyRepository');
const weatherRepo = require('./src/repositories/weatherRepository');
const kanyeQuoteRepo = require('./src/repositories/kanyeQuoteRepository');
const tswiftQuoteRepo = require('./src/repositories/tswiftQuoteRepository');


const prefix = config.app.PREFIX;
const commandDir = config.directories.COMMANDS;

const client = new Discord.Client();
client.prefix = prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


eventHandler(client);
setCommandsAndAliases(client, commandDir);
cryptoCurrRepo.initialize(
    config.dogeTicker.API_KEY,
    config.dogeTicker.API_URL,
);

weatherRepo.initialize(
    config.weather.API_KEY,
    config.weather.API_URL,
);

kanyeQuoteRepo.initialize(
    config.quote.KANYE_API_URL,
);

tswiftQuoteRepo.initialize(
    config.quote.TSWIFT_API_URL,
);

client.on('error', (e) => {
  console.error(e.message);
});

client.login(config.app.TOKEN);
