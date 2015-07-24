//var dotJSTester = require('./modules/dotJSTester');
//var configDotTester = require('./config-dot-tester');

var dotJS = require('dot-compiler');
var childProcess = require('child_process');

console.log(process.argv);
console.log(dotJS);

childProcess.exec('casperjs casper-services.js mainTemplate ./public/index.html \'some content <br />another lines\'', function(err, stdout, stderr){
    console.log(stdout);
});

//casperjs casper-services.js mainTemplate ./public/index.html 'some content <br />another lines'

//for( var i = 0; i<configDotTester.length; i++){
//    
//    dotJSTester.load(
//        phantomcss,
//        __dirname+configDotTester[i].dotFile, 
//        __dirname+configDotTester[i].modelFile, 
//        configDotTester[i].shots, 
//        function dotJSTesterError(err){
//            if( err ){
//                console.log(err.message);
//            }
//        });
//    
//}