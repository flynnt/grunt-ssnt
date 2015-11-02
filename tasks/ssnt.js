/*
 * grunt-ssnt
 * https://github.com/flynnt/grunt-ssnt
 *
 * Copyright (c) 2015 Ted Flynn
 * Licensed under the MIT license.
 */

'use strict';

var nunjucks = require('nunjucks');

var NunjucksTemplate = function(grunt, task) {

    this.templateGlobals = {};
    this.grunt = grunt;
    this.files = task.files;
    this.options = task.options();

    if (this.options.nunjucksDefaults) {
        nunjucks.configure(this.options.nunjucksDefaults);
    }

    if (this.options.templateGlobals) {
        this.templateGlobals = this.options.templateGlobals;
    };

    this.renderTemplates();
};

var proto = NunjucksTemplate.prototype;

proto.renderTemplates = function() {
    var grunt = this.grunt;
    var files = this.files;
    var options = this.options;
    var templateGlobals = this.templateGlobals;

    files.forEach(function(file, index) {
        var src = file.src[0];

        grunt.log.write('Processing: "%s"' + '\n', src);

        grunt.file.write(file.dest, nunjucks.render(src, templateGlobals));

    });

    return this;
};

module.exports = function(grunt) {
    grunt.registerMultiTask('ssnt', 'Compiles Nunjucks templates with Grunt.', function() {
        new NunjucksTemplate(grunt, this);
  });
};