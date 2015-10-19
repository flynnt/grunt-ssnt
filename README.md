# grunt-ssnt

grunt-ssnt is a Grunt-based mechanism for compiling [Nunjucks](https://mozilla.github.io/nunjucks/) templates into static HTML.  The plugin takes a files array and an options object.  It recursively scans through your files and uses Nunjucks to render templates with all the features that Nunjucks itself provides.  Data can be passed to templates both by means of a global `locals` object that is part of Nunjucks's default options.  While properties set in `locals` are global to every template, they can be overridden at the template level.

## Getting Started
This plugin requires Grunt `~0.4.5`

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
The only specific configuration options the plugin may take are represented as an optional object representing Nunjucks configuration.  You can merge custom Nunjucks configuration with the Nunjucks defaults by setting a `nunjucksDefaults` property on the main options.  This approach is illustrated in the Custom Options section below.  The Nunjucks defaults are documented on [the repository page for Nunjucks itself](https://mozilla.github.io/nunjucks/api.html#configure).  

The most notable of the Nunjucks defaults that may be set when using this plugin is the `locals` object, which allows you to pass global data to all templates.

### Usage Examples

#### Default Options
In this example, the plugin uses Grunt's native file expansion to recursively search for `.Nunjucks` files in a specific current working directory.  Those files are then rendered with Nunjucks into a specified destination and with a specified file extension of `.html`.

```js
grunt.initConfig({
  ssnt: {
    options: {},
    files: {[
        expand: true,
        cwd: 'foo',
        dest: 'your/compiled/assets',
        src: [
            '**/*.html'
        ],
        ext: '.html'
    ]},
  },
});
```

#### Custom Options
In this example, two custom options are passed in that are meant to override Nunjucks defaults: autoescape is set to true and a path to an object containing data meant to be passed to all templates globally.

```js
grunt.initConfig({
  ssnt: {
    options: {
        NunjucksDefaults: {
            autoescape: true,
            locals: { foo: 'bar' }
        }
    },
    files: {[
        expand: true,
        cwd: 'foo',
        dest: 'your/compiled/assets',
        src: [
            '**/*.html'
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
