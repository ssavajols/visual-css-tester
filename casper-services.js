var casper = require('casper').create();
var phantomcss = require( './node_modules/phantomcss/phantomcss.js' );
var phantomcssConfig = require('./config-phantomcss');
var sys = require('system');

var url, template, templateId, body;

templateId  = sys.args[4];
url    = sys.args[5];
template  = sys.args[6];

// Apply phantom config
phantomcss.init(phantomcssConfig);

casper.start(url)

.thenEvaluate(function(templateId, template){
        var node = document.createElement('div');
        node.id = templateId;
        node.innerHTML = template;

        document.body.appendChild(node);
    
}, templateId, template)

.then(function(){
    phantomcss.screenshot('#'+templateId, templateId);
})

.then(function(){
//    phantomcss.screenshot('#'+templateId, 'dot-'+templateId);
    phantomcss.compareAll(); 
})

.run(function(){
    casper.test.done();
    casper.exit();
});

console.log('Inputs: ' + '\n');
console.log('templateId:' + templateId + '\n');
console.log('url:' + url + '\n');
console.log('template:' + template + '\n');
console.log('Output: ' + '\n');
console.log(body + '\n');