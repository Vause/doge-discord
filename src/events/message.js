'use strict';

const config = require('../../config');

const PREFIX = config.app.PREFIX;

/**
 * Invalid message check
 *
 * @param {Discord.Message} message - Incoming message
 * @param {String} prefix - Prefix defined in config
 * @return {Boolean}
 */
const _checkForInvalidCommand = (message, prefix) => {
  return !message.content.startsWith(prefix) || message.author.bot;
};

/**
 * Get Arguments coming in from message sent to bot
 *
 * @param {Discord.Message.content} messageContent - Incoming message.content
 * @param {String} prefix - Prefix defined in config
 * @return {Array}
 */
const _getArgs = (messageContent, prefix) => {
  return messageContent.slice(prefix.length).trim().split(/ +/);
};

/**
 * Get Command coming in from message sent to bot
 *
 * @param {String} message - Cleaned Message
 * @return {String}
 */
const _getCommand = (message) => {
  return message.shift().toLowerCase();
};

/**
 * Run command or alias if exists
 *
 * @param {Discord.Client} client - Discord Client connection
 * @param {String} command - Command sent in
 * @param {Discord.Message} message - Incoming message to handle
 * @param {String} args - Optional arguments
 */
const _runCommand = (client, command, message, args) => {
  if (client.commands.has(command)) {
    client.commands.get(command).run(message, args);
  } else if (client.aliases.has(command)) {
    client.commands.get(client.aliases.get(command)).run(message, args);
  }
};

/**
 *
 * @param {Discord.Message} message - Incoming message to handle
 */
module.exports = (message) => {
  const client = message.client;
  if (_checkForInvalidCommand(message, PREFIX)) return;
  const args = _getArgs(message.content, PREFIX);
  const command = _getCommand(args);
  try {
    _runCommand(client, command, message, args);
  } catch (error) {
    console.error(error);
    message.reply('Not a valid command, Dogeski.');
  }
};
