var fs = require('fs');

exports.load = function(file){
    //@TODO: load .json file and JSON.parse result
    return require(file+'.json');
};