// makes API call to metchecker to gather info
const Request = require('request');
const winston = require('winston');

Request.get('http://httpbin.org/ip', (error, response, body) => {
  var data;
  if (error) {
    return winston.error(error);
  }
  data = (body);
  return winston.info(JSON.parse(data));
});
