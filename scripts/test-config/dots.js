/**
 * dot templates configuration test
 * @type {*[]}
 */
module.exports = [
    {
        id: 'some',
        captureSelector: '#some',
        layout: __dirname + '/../../public/index.html',
        path: './public/templates/some.dot',
        model: require(__dirname+'/../../models/some.json'),
        accessibility: false
    }
];