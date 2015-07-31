var casper = require('casper').create({
    clientScripts:[
        './scripts/axs_testing.js'
    ]
});
var phantomcss = require( './node_modules/phantomcss/phantomcss.js');
var phantomcssConfig = require('./scripts/config-phantomcss');
var sys = require('system');
var fs = require("fs");

var url, template, templateId, layout, scriptName, accessibility;

capture       = decodeURIComponent(sys.args[4]);  // selector to use for capture
templateId    = decodeURIComponent(sys.args[5]);  // template id
template      = decodeURIComponent(sys.args[6]);  // template to use (.dot)
layoutPath    = decodeURIComponent(sys.args[7]);  // layoutPath or url to test
scriptName    = decodeURIComponent(sys.args[8]);  // script to use
accessibility = decodeURIComponent(sys.args[9]);  // test accessibility and export report


// Apply phantom config
phantomcss.init(phantomcssConfig);

/**
* Load casperjs custom script test
*/
scriptTest = (function(name){
    var script;
    
    try {
        script = require('./scripts/casperjs/'+name);
    }catch(e){}

    if( typeof script !== "function"){
        return function(){};
    }
    
    return script;

})(scriptName);

// Set layout or page to test
if( layoutPath.indexOf('http') === -1 ){
    layoutPath = "file://"+layoutPath;
}

/**
*   ========
*   CasperJS 
*   ========
*/

// load layout or page
casper.start(layoutPath)

.then(function(){
    this.echo("Currently testing : " + layoutPath + "\n");  
    this.echo(Array(30).join('-') + "\n");  
    this.echo("template id : " + layoutPath + "\n");  
    this.echo("script name : " + scriptName + "\n");  
    this.echo("capture selector : " + capture + "\n");  
    this.echo("Accessibility enabled : " + accessibility + "\n");  
    this.echo(Array(30).join('-') + "\n");
})

// Inject template to page
.thenEvaluate(function(templateId, template){
    
        var node = document.createElement('div');
        node.id = templateId;
        node.innerHTML = template;

        __utils__.findOne('.DOMInjection').appendChild(node);    
        __utils__.echo("FROM DOM : ");
        __utils__.echo(__utils__.findOne('html').innerHTML);
    
}, templateId, template);

// Test accessibility
if( accessibility === "true" ){

    casper.thenEvaluate(function(){
        var results = axs.Audit.run();
        window.axsReport = axs.Audit.createReport(results);
    })

    .then(function(){
        this.echo(this.getGlobal("axsReport"));
    });

}

// execute test
casper.then(function(){   
    scriptTest(
        casper, 
        phantomcss, {
            scriptName: scriptName,
            capture: capture,
            template: template,
            templateId: templateId,
            layoutPath: layoutPath
            });
})

// Capture page render
.then(function(){
    phantomcss.screenshot(capture, templateId);
})

// Compare screenshots 
.then(function(){
    phantomcss.compareAll(); 
})

// End of test
.run(function(){
    casper.test.done();
    
    casper.echo(Array(30).join('='));
    casper.echo("test ended : " + templateId);
    casper.echo(Array(30).join('='));
    
    casper.exit();
});

