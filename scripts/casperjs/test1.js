/**
 * Sample casperJS test
 * @param {Object} casper     
 * @param {Object} phantomcss 
 * @param {Object} config     
 *                            
 * CasperJS doc   : http://casperjs.readthedocs.org/en/latest/ 
 * PhantomJS doc  : http://phantomjs.org/documentation/
 * PhantomCSS doc : https://github.com/Huddle/PhantomCSS
 */
module.exports = function(casper, phantomcss, config){
    casper.then(function(){
        phantomcss.screenshot("body", "custom-casperjs-test");
    }); 
}