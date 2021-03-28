const Discord = require('discord.js');
const config = require('./config');
const eventHandler = require('./src/handlers/eventHandler');
const {setCommandsAndAliases} = require('./src/helpers/commandLoader');
const cryptoCurrRepo = require('./src/repositories/cryptoCurrencyRepository');
const quoteRepo = require('./src/repositories/quoteRepository');

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

quoteRepo.initialize(
    config.quote.KANYE_API_URL,
    config.quote.TSWIFT_API_URL,
);

client.on('error', (e) => {
  console.error(e.message);
});

client.login(config.app.TOKEN);
