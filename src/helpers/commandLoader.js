'use strict';

const {getFilesEndingInJS} = require('../utils/fsHelper');

const _aliasesExist = (command) => {
  return command.conf && command.conf.aliases;
};

const setCommandsAndAliases = (client, path) => {
  const commandFiles = getFilesEndingInJS(`./src/${path}`);


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
