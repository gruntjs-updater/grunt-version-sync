/*
 * grunt-version-sync
 * https://github.com/adgad/grunt-version-sync
 *
 * Copyright (c) 2014 adgad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var jsyaml = require('js-yaml');

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    function getType(fileName) {
        var type = 'text';
        if (fileName.indexOf('.json') === fileName.length - 5) {
            type = 'json';
        } else if (fileName.indexOf('.yml') === fileName.length - 4) {
            type = 'yml';
        }
        return type;
    }

    function parseFile(fileName) {
        var type = getType(fileName);
        var sourceFileStr = grunt.file.read(fileName);
        var obj;
        if (type === 'json') {
            obj = JSON.parse(sourceFileStr);
        } else if (type === 'yml') {
            obj = jsyaml.safeLoad(sourceFileStr);
        }
        return obj;
    }

    function stringifyObject(obj, type) {
        var stringified;
        if (type === 'json') {
            stringified = JSON.stringify(obj);
        } else if (type === 'yml') {
            stringified = jsyaml.safeDump(obj);
        }
        return stringified;
    }

    grunt.registerMultiTask('version_sync', 'Keeps version numbers in sync between files', function () {
        // Merge task-specific and/or target-specific options with these defaults.

        var version;
        var sourceFileName = this.data.source;
        var sourceData = parseFile(sourceFileName);


        var targetFileName;
        var targetFileType;
        var targetData;


        version = sourceData.version;
        grunt.log.writeln('Using version number ' + version + ' from ' + targetFileName);

        // Iterate over all specified file groups.
        this.data.targets.forEach(function (f) {
            targetFileName = f.src;
            targetFileType = getType(f.src);
            if(grunt.file.exists(targetFileName)) {
                targetData = parseFile(targetFileName);
                targetData.version = version;

                grunt.file.write(targetFileName, stringifyObject(targetData, targetFileType));
                grunt.log.writeln('File "' + f.dest + '" created.');

            }
        });
    });

};
