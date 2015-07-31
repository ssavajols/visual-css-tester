module.exports.pages = [
    {
        id: "google",
        captureSelector: "body",
        url: "http://www.google.fr",
        script: "test1.js",
        accessibility: false
    }
// sample page config
//    {
//        id: "google",
//        captureSelector: "body",
//        url: "http://www.google.fr",
//        script: "test1.js",
//        accessibility: false
//    }
];

module.exports.dots = [
    {   
        id: 'some',
        captureSelector: '#some',
        layout: __dirname + '/public/index.html',
        path: './public/templates/some.dot',
        model: require(__dirname+'/../models/some.json'),
        accessibility: true
    }
    
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