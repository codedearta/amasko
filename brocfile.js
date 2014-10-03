// Brocfile.js
var pickFiles = require('broccoli-static-compiler'),
    concat = require('broccoli-concat'), 
    mergeTrees = require('broccoli-merge-trees'),
    compileSass = require('broccoli-sass');

var appTree = 'app';

// static files
var staticFilesTree = pickFiles(appTree, {
  srcDir: '.',
  files: [
    '**/*.html',
    '**/*.pdf',
    '**/*.jpg',
    '**/*.png'
  ],
  destDir: '.'
});

// compile sass files
var foundationScssPath = 'bower_components/foundation/scss';
var cssTree = compileSass([appTree,foundationScssPath], 'app.scss', 'app.css');  

// concat the JS
var scriptsTree = concat(appTree, {  
  inputFiles: ['**/*.js'],
  outputFile: '/app.js'
});

// include bower components
var bowerTree = pickFiles('bower_components', {
  srcDir:'.',
  destDir:'bower_components'
});


// and merge all the trees together
module.exports = mergeTrees([staticFilesTree, cssTree, scriptsTree, bowerTree]);  