var winston = require('winston');
const appRoot = require('app-root-path');

var file = (`${appRoot}/bin/response.json`);
var items = require(file);
var list = items["list"];

for (var i = 0; i < list.length; i ++) {
  if ( list[i]["name"] == item ) {
    console.log(list[i]["url"]);
  }
}
