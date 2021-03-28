const {sendMessage} = require('../helpers/messageSender');
const {getFilesEndingInJS} = require('../utils/fsHelper');

const _getCommandFile = (files, cmdNameWithJs) => {
  return files.filter((file) => file === cmdNameWithJs);
};

const _getFields = (files, path, cmdName = undefined) => {
  if (cmdName) {
    const cmdNameWithJs = `${cmdName}.js`;
    const file = _getCommandFile(files, cmdNameWithJs);
    const command = require(`../${path}/${file}`);
    return {
      name: command.help.name,
      value: command.help.description,
    };
  }
  return files.map((file) => {
    const command = require(`../${path}/${file}`);
    return {
      name: command.help.name,
      value: command.help.description,
    };
  });
};


exports.run = (message, args) => {
  const path = 'commands';
  let commandName;
  const files = getFilesEndingInJS(`./src/${path}`);
  if (args.length > 0) {
    commandName = args[0].toLowerCase();
    if (!message.client.commands.has(commandName)) {
      sendMessage(message, 'Command does not exist');
      return;
    }
  }
  const fields = _getFields(files, path, commandName);

  const helpEmbed = {
    color: 0x0099ff,
    title: 'Command Help',
    fields,
  };
  sendMessage(message, {embed: helpEmbed});
};

exports.conf = {
  aliases: ['hlp'],
};

exports.help = {
  name: 'help',
  description: 'You want help? You can\'t handle the help',
  usage: 'help',
};
