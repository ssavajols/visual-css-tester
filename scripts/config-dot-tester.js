module.exports.pages = [
    {
        id: "google",
        captureSelector: "body",
        url: "http://www.google.fr",
        script: "test1.js",
        viewport: {
            width: 1024, height:768
        },
        accessibility: false,
        cookies: {
            some: "cookie-value",
            other: "other cookie value"
        }
    }
// sample page config
//    {
//        id: "google",
//        captureSelector: "body",
//        url: "http://www.google.fr",
//        script: "test1.js",
//        viewport: {
//            width: 1024, height:768
//        },
//        accessibility: false,
//        cookies: {
//            some: "cookie-value",
//            other: "other cookie value"
//        }
//    }
];

module.exports.dots = [
    //{
    //    id: 'some',
    //    captureSelector: '#some',
    //    layout: __dirname + '/public/index.html',
    //    path: './public/templates/some.dot',
    //    model: require(__dirname+'/../models/some.json'),
    //    accessibility: true
    //}
    
// sample dot config
//    {
//        id: 'some',
//        script: 'test1.js',
//        layout: './public/index.html',
//        captureSelector: '#some',
//        path: './public/templates/some.dot',
//        model: require(__dirname+'/../models/some.json')
//    }
];

//var TEST = [
//    { "enseigne":"BDDF","banque":"bddf" },
//    { "enseigne":"CDN","banque":"credit-du-nord" }
//];

//for (var i = 0, len = TEST.length; i < len; i++) {
//    var casDeTest = TEST[i];
//
//    var contexteSas = {
//        "niveauAuthActuel": "0",
//        "signProc": "vk",
//        "unavailibilityReason": "",
//        "jetonTransaction": "",
//        "actionLevel": "",
//        "chgCodeSec": "Non",
//        "migMotDePasse": "Non",
//        "idSuperviseur": "",
//        "isActive": "Non",
//        "enseigne": "CDN",
//        "banque": "credit-du-nord",
//        "marche": "PRI",
//        "media": "WEBMOB",
//        "versionAppli": "",
//        "imageClavierIndisponible": "Non",
//        "isAutentOOB": "Non",
//        "isOtherClient": "Non",
//        "isMutltiProfil": "Non"
//    };
//
//    contexteSas.enseigne = casDeTest.enseigne;
//    contexteSas.banque = casDeTest.banque;
//
//    var cookie = "CONTEXTE_SAS=" + encodeURIComponent(JSON.stringify(contexteSas)) + ";" + SAS_COOKIE + ";" + PROVENANCE_COOKIE;
//    var domain = "localhost";
//    cookie.split(";").forEach(function (pair) {
//        pair = pair.split("=");
//        phantom.addCookie({
//            'name': pair[0],
//            'value': pair[1],
//            'domain': domain
//        });
//    });