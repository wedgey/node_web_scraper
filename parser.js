const file = 'images.csv';
const img_types = ['png','svg', 'gif', 'jpg', 'jpeg', 'an8', 'eps'];
var fs = require('fs');
// var urlParser = require('url');
var cheerio = require('cheerio');


function parse(html, url) {
  var $ = cheerio.load(html);
  fs.writeFile(file, '');
  $('table tr').each(function(index, element) { 
    var permissions = $(this).children().first().text();
    var size = $(this).children(':nth-child(2)').text();
    var path = url + $(this).children().last().children('a').text();
    var ext = path.split('.').pop();
    var output = (permissions + ',' + path + ',' + ext);
    if (img_types.includes(ext)) {
      fs.appendFile(file, output + '\n');
    }
  });
}

module.exports = {
  parse: parse
}