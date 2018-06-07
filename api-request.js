// makes API call to metchecker to gather info
const Request = require('request');
const winston = require('winston');

Request.get('http://ws1.metcheck.com/ENGINE/v9_0/json.asp?lat=53.9&lon=-1.6&lid=67633&Fc=No', (error, response, body) => {
  var data;
  if (error) {
    return winston.error(error);
  }
  data = (body);
  return winston.info(JSON.parse(data));
});
