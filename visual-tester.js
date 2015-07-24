var casperService = require('./modules/casper-service');
var dotJSTester = require('./modules/dotJSTester');
var dotPath = './public/templates/some.dot';

var pages = [{
    url: "http://www.google.fr",
    script: "./scripts/test1.js",
}
];

var dots = [
//    {
//        id: 'some',
//        captureSelector: '#some',
//        path: './public/templates/some.dot',
//        model: require('./models/some.json')
//    }
{
    id: "index_BDDF",
    captureSelector: "body",
    path: "./public/consult/synthese/js/template/index_BDDF.dot",
    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
},{     
    id: "detailCompte_BDDF",
    captureSelector: "body",
    path: "./public/consult/synthese/js/template/listeComptes_BDDF.dot",
    model: require("./models/listComptes.json")
}
//            ,{
//    id: "blockMontantTotal_BDDF",
//    path: "./public/consult/synthese/js/template/blockMontantTotal_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "blockMontantTotal_CDN",
//    path: "./public/consult/synthese/js/template/blockMontantTotal_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "detailCompte_BDDF",
//    path: "./public/consult/synthese/js/template/detailCompte_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "detailCompte_CDN",
//    path: "./public/consult/synthese/js/template/detailCompte_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "index_BDDF",
//    path: "./public/consult/synthese/js/template/index_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "index_CDN",
//    path: "./public/consult/synthese/js/template/index_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "listeComptes_BDDF",
//    path: "./public/consult/synthese/js/template/listeComptes_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "listeComptes_CDN",
//    path: "./public/consult/synthese/js/template/listeComptes_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "listMvts_BDDF",
//    path: "./public/consult/synthese/js/template/listMvts_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "listMvts_CDN",
//    path: "./public/consult/synthese/js/template/listMvts_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "viewAccount_BDDF",
//    path: "./public/consult/synthese/js/template/viewAccount_BDDF.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//},{
//    id: "viewAccount_CDN",
//    path: "./public/consult/synthese/js/template/viewAccount_CDN.dot",
//    model: require("./public/consult/synthese/bouchons/comptes/comptes.json")
//}
           ];

//var dots = [{
//    id: 'some-1',
//    path: './public/templates/some.dot',
//    model: {someData: 'some fucking datas !!', arr:['data 1', 'data 2']}
//},{
//    id: 'other-1',
//    path: './public/templates/other.dot',
//    model: __dirname + '/models/some.json'
//},{
//    id: 'other-2',
//    path: './public/templates/other.dot',
//    model: __dirname + '/models/other.json'
//},{
//    id: 'some-2',
//    path: './public/templates/some.dot',
//    model: require('./models/other.json')
//}];

/**
* Page mode
*/
(function iterate(i){
    return;
    
    if( i >= pages.length ){
        return;    
    }
    
    (function(page){
        casperService.page(page.url, page.captureSelector, page.id, page.script, function(err, stdout){
            if( err ){
                console.log(err.message);
                return;
            }
            
            console.log(stdout);
            
        });
    })(pages[i]);
    
})(0);

/**
* Template mode
*/
(function iterate(i){
    
    if( i >= dots.length ){
        return;    
    }
    
    (function(dot){

        dotJSTester.dot.load(dot.path, dot.model,
                             function(err, content){
                                if( err ){
                                    console.log('error: ' + err.message);
                                    return;
                                }

                                casperService.dot(dot.captureSelector, dot.id, content, function(err, stdout){
                                    if( err ){
                                        console.log(err.message);
                                        return;
                                    }

                                    console.log(stdout);
                                });
                            });

    })(dots[i]);
    
    iterate(i+1);
 
})(0);


    

