/*
 * grunt-ssnt
 * https://github.com/flynnt/grunt-ssnt
 *
 * Copyright (c) 2015 Ted Flynn
 * Licensed under the MIT license.
 */
'use strict';

const nunjucks = require('nunjucks');


module.exports = function (grunt) {

    grunt.registerMultiTask('ssnt', 'Compiles Nunjucks templates with Grunt.', function () {

        const options = Object.assign({
            templateGlobals: {},
            basePath: '.',
            nunjucksDefaults: {}
        }, this.options());
        const env = nunjucks.configure(options.basePath, options.nunjucksDefaults);

        this.files.forEach(file => {
            const src = file.src[0];
            grunt.log.write('Processing: "%s"' + '\n', src);
            grunt.file.write(file.dest, env.render(src, options.templateGlobals));
        });

    });

};
