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
                accessibility = page.accessibility;
            
            casperService.page(url, captureSelector, id, script, accessibility, function(err, stdout){
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
                accessibility = dot.accessibility;
            
            dotJSTester.dot.load(path, model,
                             function(err, content){
                                if( err ){
                                    console.log('error: ' + err.message);
                                    return;
                                }

                                casperService.dot(captureSelector, id, content, layout, script, accessibility, function(err, stdout){
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


    

