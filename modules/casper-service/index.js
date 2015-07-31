var childProcess = require('child_process');

var parseArgs = function(args){
    
    args.map(function(arg, index, arr){
        args[index] = encodeURIComponent(arg);
    });
    var argsString = "\""+Array.prototype.join.call(args, '" "') + "\"";
    
    return argsString;
};

var service = function(argsString, callback){
    
    
    console.log('start casper service with args : ' + argsString.substring(0, 100)+'...');
    
    childProcess.exec('casperjs casperjs/casper-services.js ' + argsString, function(err, stdout, stderr){
        if( err){
            console.log('casper error');
            callback && callback({message: err.message}, null);

        }

        callback && callback(null, stdout);

    });
    

};

exports.dot = function(captureSelector, templateId, templateFile, layoutPath, scriptName, accessibility, callback){
    var args = [
        captureSelector,
        templateId,
        templateFile,
        layoutPath,
        scriptName,
        accessibility
    ];
    
    
    service(parseArgs(args), callback);
    

};

exports.page = function(url, captureSelector, id, scriptName, accessibility, callback){
    var args = [
        captureSelector,
        id,
        "{}",
        url,
        scriptName,
        accessibility
    ];
    
    service(parseArgs(args), callback);
    
};

