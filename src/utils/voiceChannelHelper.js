'use strict';

const _botInVCHelper = (msg) => {
  return msg.guild.me.voice.channel;
};

const _userInVCHelper = (msg) => {
  return msg.member.voice.channel;
};

const playAudioFile = (conn, audioFile) => {
  return conn.play(audioFile);
};

const joinVC = async (msg) => {
  return await msg.member.voice.channel.join();
};

const leaveVC = (msg) => {
  msg.member.voice.channel.leave();
};

const botInVC = (msg) => {
  if (_botInVCHelper(msg)) {
    msg.channel.send(
        ':x: I am already speaking. Do not interrupt me fool',
    );
    return true;
  }
  return false;
};

const userInVC = (msg) => {
  if (!_userInVCHelper(msg)) {
    msg.channel.send(
        ':x: Human! Enter a voice channel to use this command',
    );
    return false;
  }
  return true;
};


module.exports = {
  botInVC,
  userInVC,
  playAudioFile,
  joinVC,
  leaveVC,
};
