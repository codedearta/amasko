// Brocfile.js
var pickFiles = require('broccoli-static-compiler'),
    concat = require('broccoli-concat'), 
    mergeTrees = require('broccoli-merge-trees'),
    compileSass = require('broccoli-sass'),
    csso = require('broccoli-csso'),
    htmlmin = require('broccoli-htmlmin'),
    uglifyJavaScript = require('broccoli-uglify-js');

var appTree = 'app';

// static files
var htmlTree = pickFiles(appTree, {
  srcDir: '.',
  files: ['**/*.html'],
  destDir: '.'
});
//htmlTree = htmlmin(htmlTree);

var imgTree = pickFiles(appTree, {
  srcDir: '.',
  files: [
    '**/*.pdf',
    '**/*.jpg',
    '**/*.png'
  ],
  destDir: '.'
});

// compile sass files
var foundationScssPath = 'bower_components/foundation/scss';
var cssTree = compileSass([appTree,foundationScssPath], 'app.scss', 'app.css');  
cssTree = csso(cssTree);

// concat the JS
var scriptsTree = concat(appTree, {  
  inputFiles: ['**/*.js'],
  outputFile: '/app.js'
});
scriptsTree = uglifyJavaScript(scriptsTree);

// include bower components
var bowerTree = pickFiles('bower_components', {
  srcDir:'.',
  destDir:'bower_components'
});


// and merge all the trees together
module.exports = mergeTrees(
  [
    htmlTree, 
    imgTree, 
    cssTree, 
    scriptsTree, 
    bowerTree
  ]);  