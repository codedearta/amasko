// Brocfile.js
var pickFiles = require('broccoli-static-compiler'),
    concat = require('broccoli-concat'), 
    mergeTrees = require('broccoli-merge-trees'),
    compileSass = require('broccoli-sass'),
    csso = require('broccoli-csso'),
    cleanCSS = require('broccoli-clean-css'),
    htmlmin = require('broccoli-htmlmin'),
    uglifyJavaScript = require('broccoli-uglify-js'),
    jshint = require('broccoli-jshint'),
    jslint = require('broccoli-jslint');

var appTree = 'app';

// static files
var htmlTree = pickFiles(appTree, {
  srcDir: '.',
  files: ['**/*.html'],
  destDir: '.'
});

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
cssTree = cleanCSS(cssTree);

// process javascript files
var scriptsTree = pickFiles(appTree, {
  srcDir: '.',
  files: ['**/*.js'],
  destDir: '.'
});

// codeanalysis
scriptsTree = jslint(scriptsTree, { edition:'latest'});
var jshintTree = jshint(scriptsTree, { log:true});

// concat javascript files
scriptsTree = concat(scriptsTree, {  
  inputFiles: ['**/*.js'],
  outputFile: '/app.js'
});

// minify javascript
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
    bowerTree,
    jshintTree
  ]);  