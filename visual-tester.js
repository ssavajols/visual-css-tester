var casperService = require('./modules/casper-service');
var dotJSTester = require('./modules/dotJSTester');
var dotPath = './public/templates/some.dot';

// @FUTURE: Faire des scripts casperJS importable dans le service CasperJS

var pages = require('./scripts/config-dot-tester.js').pages;
var dots = require('./scripts/config-dot-tester.js').dots;

console.log("=========", pages, dots);

/**
* Page mode
*/
(function iterate(i){
    
    if( i >= pages.length ){
        return;    
    }
    
    setImmediate((function(page){
        
        return function(){
            
            var url = page.url,
                captureSelector = page.captureSelector,
                id = page.id,
                script = page.script,
                accessibility = page.accessibility,
                cookies = JSON.stringify(page.cookies),
                viewportWidth  = page.viewport ? page.viewport.width : 1024,
                viewportHeight = page.viewport ? page.viewport.height : 768;

            casperService.page(url, captureSelector, id, script, accessibility, cookies, viewportWidth, viewportHeight, function(err, stdout){
                if( err ){
                    console.log(err.message);
                    return;
                }

                console.log(stdout);

            });
        }
    })(pages[i]));
    
})(0);

/**
* Template mode
*/
(function iterate(i){
    
    if( i >= dots.length ){
        return;    
    }
    
    // @TODO: remplacer par setImmediate (meilleur gestion des resouces)
    setImmediate((function(dot){
        
        return function(){
            
            var captureSelector = dot.captureSelector,
                id = dot.id,
                path = dot.path,
                model = dot.model,
                script = dot.script,
                layout = dot.layout,
                accessibility = dot.accessibility,
                cookies = dot.cookies,
                viewportWidth  = dot.viewport ? dot.viewport.width : 1024,
                viewportHeight = dot.viewport ? dot.viewport.height : 768;
            
            dotJSTester.dot.load(path, model,
                             function(err, content){
                                if( err ){
                                    console.log('error: ' + err.message);
                                    return;
                                }

                                casperService.dot(captureSelector, id, content, layout, script, accessibility, cookies, viewportWidth, viewportHeight, function(err, stdout){
                                    if( err ){
                                        console.log(err.message);
                                        return;
                                    }

                                    console.log(stdout);
                                });
                            });

        }
        
    })(dots[i]));
    
    iterate(i+1);
 
})(0);


    

