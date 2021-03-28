const _sendMessageWithFiles = (message, text, files) => {
  files = (files instanceof Array) ? files : [files];
  message.channel.send(text, {
    files,
  });
};

const sendMessage = (message, text, files) => {
    files ? _sendMessageWithFiles(message, text, files) :
    message.channel.send(text);
};

module.exports = {
  sendMessage,
};
