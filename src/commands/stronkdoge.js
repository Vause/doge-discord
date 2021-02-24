exports.run = (message) => {
  message.channel.send('You have awoken the STRONKDOGE', {
    files: [
      './src/images/stronk_doge.png',
    ],
  });
};

exports.conf = {
  aliases: ['sdoge'],
};

exports.help = {
  name: 'stronkdoge',
  description: 'This is for awakening stronkdoge',
  usage: 'stronkdoge',
};
