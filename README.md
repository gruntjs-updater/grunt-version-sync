# grunt-version-sync

> Keeps version numbers in sync between files. Currently works with json & yaml files
(e.g. package.json, _config.yml), and looks for a 'version' property on the top level.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-version-sync --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-version-sync');
```

## The "version_sync" task

### Overview
In your project's Gruntfile, add a section named `version_sync` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  version_sync: {
    source: './package.json'
    targets: ['./_config.yml','config/some_file.json']
  },
});
```

### Options


#### source
Type: `String`

The filename to take the version from (i.e. the file you will keep up to date).

#### target
Type: `Array`

A list of files to keep up to date
