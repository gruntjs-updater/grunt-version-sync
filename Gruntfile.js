/*
 * grunt-version-sync
 * https://github.com/adgad/grunt-version-sync
 *
 * Copyright (c) 2014 adgad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },


      copy: {
          default: {
              files: [
                  // includes files within path
                  {expand: true,flatten: true, src: ['test/orig_fixtures/*'], dest: 'test/fixtures'}
              ]
          }
      },

    // Configuration to be run (and then tested).
    version_sync: {
      package_to_config: {
        source: 'test/fixtures/package.json',
        targets: [ 'test/fixtures/_config.yml']
      },
        config_to_package: {
            source: 'test/fixtures/_config.yml',
            targets: [ 'test/fixtures/package.json']
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'version_sync', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
