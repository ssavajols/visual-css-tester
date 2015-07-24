var fs = require('fs');

exports.load = function(file){
    var json;
    
    try {
        json = require(file);
    }catch(e){
        console.log(e);
        json = {};
    }
    
    return json;
    
};