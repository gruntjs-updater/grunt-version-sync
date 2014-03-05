'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.version_sync = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.equal(grunt.file.read('test/fixtures/_config.yml').indexOf('version: 0.9.1'), -1, 'config.yml should no longer have 0.9.1');
    console.log('NEW FILE', grunt.file.read('test/fixtures/_config.yml'));
      test.equal(grunt.file.read('test/fixtures/_config.yml').indexOf("version: 1.0.0"), 0, 'config.yml should now have version 1.0.0');
    test.done();
  }
};
