const winston = require('winston');
const appRoot = require('app-root-path');
const fs = require('fs');

const file = (`${appRoot}/bin/response.json`);
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    return winston.error(err);
  }
  const obj = JSON.parse(data);
  return [obj, winston.info('File read ok')];
});
