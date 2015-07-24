var casper = require('casper').create();
var phantomcss = require( './node_modules/phantomcss/phantomcss.js' );
var phantomcssConfig = require('./config-phantomcss');
var sys = require('system');
var fs = require("fs");

var url, template, templateId, layout, output;

capture    = decodeURIComponent(sys.args[4]);
templateId = decodeURIComponent(sys.args[5]);
template   = decodeURIComponent(sys.args[6]);
//url        = sys.args[7] ? decodeURIComponent(sys.args[7]) : "./public/index.html";
//url        = getExecDirectoryPath()+"/public/index.html";

//layout = fs.read("public/index.html");

// Apply phantom config
phantomcss.init(phantomcssConfig);

casper.start("file:///Users/ssavajols/Sites/tools/phantomcss/automated-test/public/index.html")

//.thenEvaluate(function(layout){
//    __utils__.findOne('html').innerHTML = layout;
//}, layout)

.thenEvaluate(function(templateId, template){
        var node = document.createElement('div');
        node.id = templateId;
        node.innerHTML = template;

        __utils__.findOne('.page').appendChild(node);    
        __utils__.echo(__utils__.findOne('html').innerHTML);
    
}, templateId, template)

.then(function(){
    phantomcss.screenshot(capture, templateId);
})

.then(function(){
    phantomcss.compareAll(); 
})

.run(function(){
    casper.test.done();
    
//    console.log('output:', output);
//    console.log(Array(30).join('='));
//    console.log(Array(30).join('-'));
//    console.log(Array(30).join('='));
//    console.log('Inputs: ' + '\n');
//    console.log('capture:' + capture + '\n');
//    console.log('templateId:' + templateId + '\n');
//    console.log('url:' + url + '\n');
//    console.log('template:' + template + '\n');
//    console.log(Array(30).join('_'));
//    console.log(Array(30).join('='));
//    console.log(Array(30).join('-'));
//    console.log(Array(30).join('='));
    
    casper.exit();
});

