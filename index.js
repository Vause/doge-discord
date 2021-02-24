'use strict';

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');
require('./src/utils/eventHandler.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const _getFilesEndingInJS = (path) => {
  return fs.readdirSync(path).filter((file) => file.endsWith('.js'));
};

const _setAllCommands = (path) => {
  const commandFiles = _getFilesEndingInJS(path);


  // For each file in commands, set commands
  commandFiles.forEach((file) => {
    const command = require(`${path}/${file}`);
    client.commands.set(command.help.name, command);

    // For each alias in commands conf section, set aliases
    command.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, command.help.name);
    });
  });
};

_setAllCommands('./src/commands');

client.on('error', (e) => {
  console.error(e.message);
});

client.login(config.app.TOKEN);
