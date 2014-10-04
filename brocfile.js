// Brocfile.js
var pickFiles = require('broccoli-static-compiler'),
    htmlmin = require('broccoli-htmlmin'),
    compileSass = require('broccoli-sass'),
    cleanCSS = require('broccoli-clean-css'),
    jslint = require('broccoli-jslint'),
    jshint = require('broccoli-jshint'),
    concat = require('broccoli-concat'), 
    uglifyJavaScript = require('broccoli-uglify-js'),
    mergeTrees = require('broccoli-merge-trees');

var appTree = 'app';
var vendor = 'bower_components';

// static files
var htmlTree = pickFiles(appTree, {
  srcDir: '.',
  files: ['**/*.html'],
  destDir: '.'
});

htmlTree = htmlmin(htmlTree, {
      empty: true,        // KEEP empty attributes
      //cdata: true,        // KEEP CDATA from scripts
      //comments: true,     // KEEP comments
      conditionals: true, // KEEP conditional internet explorer comments
      //spare: true,        // KEEP redundant attributes
      //quotes: true,       // KEEP arbitrary quotes
      //loose: true         // KEEP retain one whitespace
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
var foundationScssPath = vendor + '/foundation/scss';
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
var bowerTree = pickFiles(vendor, {
  srcDir:'.',
  files: [
    '**/*.min.js','**/*.map', '**/modernizr.js', '**/normalize.css'
  ],
  destDir:vendor
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