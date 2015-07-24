var fs = require('fs');
var modelHelper = require('./modules/dotJSTester/modelHelper');

exports.load = function(phantomcss, file, model, config, callback){
    var path = file+'.dot';
    
    if( !typeof file === "string" ){
        callback({message: 'no file founded'});
        return false;
    }
    
    if( !model ){
        callback({message: 'no model founded'});
        return false;
    }
    
    if( !config.shots && !config.shots.length ){
        callback({message: 'no shots founded'});
        return false;
    }
    
    if( typeof model === 'string'){
        model = modelHelper.load(model);
    }
    
    
    casper.start('./public/index.html', function(){
        //@TODO: load dot.js file with model data
        
        for(var i = 0; i<config.shots.length; i++){
            if( !config.shots[i].selector ){
                continue;
            }


            phantomcss.screenshot(config.shots[i].selector , config.shots[i].name);
        }
    });
    
    
    if( typeof callback === "function"){
        callback(null);
        return true;
    }

};