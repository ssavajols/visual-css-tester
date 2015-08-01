var visualTester = require('visual-css-tester');

visualTester.pages = require('./scripts/config-dot-tester.js').pages;
visualTester.dots = require('./scripts/config-dot-tester.js').dots;

visualTester.run();