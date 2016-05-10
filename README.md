# grunt-ssnt

grunt-ssnt is a Grunt-based mechanism for compiling [Nunjucks](https://mozilla.github.io/nunjucks/) templates into static HTML.  The plugin takes a files array and an options object.  It recursively scans through your files and uses Nunjucks to render templates with all the features that Nunjucks itself provides.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ssnt --save
```

This command will download the plugin package along with its dependencies, as well as add it as a dependency to your project's `package.json` file.

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ssnt');
```

## The "ssnt" task

### Overview
In your project's Gruntfile, add a section named `ssnt` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ssnt: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
The plugin takes a fairly specific set of options:
* `basePath`, which is used to provide Nunjucks with a path to your templates.  Defaults to `.`.
* `templateGlobals`, which represents data (often configuration) to be made available to all templates.
* `nunjucksDefaults`, an object that represents Nunjucks configuration. You can merge custom Nunjucks configuration with the Nunjucks defaults by setting a `nunjucksDefaults` property on the main options.  This approach is illustrated in the Custom Options section below.  The Nunjucks defaults are documented on [the repository page for Nunjucks itself](https://mozilla.github.io/nunjucks/api.html#configure).

### Usage Examples

#### Default Options
In this example, the plugin uses Grunt's native file expansion to recursively search for `.nunjucks` files in a specific current working directory.  Those files are then rendered with Nunjucks into a specified destination and with a specified file extension of `.html`.

```js
grunt.initConfig({
  ssnt: {
    options: {},
    files: {[
        expand: true,
        cwd: 'foo',
        dest: 'your/compiled/assets',
        src: [
            '**/*.nunjucks'
        ],
        ext: '.html'
    ]},
  },
});
```

#### Custom Options
In this example, three custom options are passed in: A Nunjucks configuration object with an updated setting, a custom basePath, and some data to be made available to all templates.

```js
grunt.initConfig({
  ssnt: {
    options: {
        basePath: '/',
        templateGlobals: { foo: 'bar' },
        nunjucksDefaults: {
            autoescape: true
        }
    },
    files: {[
        expand: true,
        cwd: 'foo',
        dest: 'your/compiled/assets',
        src: [
            '**/*.nunjucks'
        ],
        ext: '.html'
    ]},
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 10/19/15: Initial Release: 0.1.0
* 4/4/16: First major release: 1.0.0
* 05/10/16: Patch release to correct some documentation issues.
