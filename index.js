const url = 'http://substack.net/images/';
var request = require('request');
var parser = require('./parser');

request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    parser.parse(body, url);
  }
});