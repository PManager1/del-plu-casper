var fs = require('fs');

console.log ( ' fs =', fs); 


var casper = require('casper').create();

console.log( ' hello from main.js');

casper.exit();