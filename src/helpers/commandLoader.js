'use strict';

const fs = require('fs');

const _getFilesEndingInJS = (path) => {
  return fs.readdirSync(path).filter((file) => file.endsWith('.js'));
};

const _aliasesExist = (command) => {
  return command.conf && command.conf.aliases;
};

const setCommandsAndAliases = (client, path) => {
  const commandFiles = _getFilesEndingInJS(`./src/${path}`);


  // For each file in commands, set commands
  commandFiles.forEach((file) => {
    const command = require(`../${path}/${file}`);
    client.commands.set(command.help.name, command);
    if (_aliasesExist(command)) {
      // For each alias in commands conf section, set aliases
      command.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, command.help.name);
      });
    }
  });
};

module.exports = {
  setCommandsAndAliases,
};
