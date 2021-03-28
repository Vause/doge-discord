const fs = require('fs');

const getFilesEndingInJS = (path) => {
  return fs.readdirSync(path).filter((file) => file.endsWith('.js'));
};

const getFile = (path) => {
  return fs.readFileSync(path);
};

module.exports = {
  getFilesEndingInJS,
  getFile,
};
