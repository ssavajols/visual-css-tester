/**
 * pages configuration tests
 * @type {*[]}
 */
module.exports = [
    {
        id: "google",
        captureSelector: "body",
        url: "http://www.google.fr",
        script: "test1.js",
        viewport: {
            width: 1024, height:768
        },
        accessibility: true,
        cookies: {
            some: "cookie-value",
            other: "other cookie value"
        }
    }
];

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