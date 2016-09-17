'use strict';

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var notify     = require('gulp-notify');
var duration   = require('gulp-duration');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var watchify   = require('watchify');
var merge      = require('utils-merge');
var chalk      = require('chalk');

var config = {
    js: {
        src: './app/autoload.js',
        watch: './app/**/*.js',
        outputDir: './assets/js/',
        outputFile: 'bundle.js',
    },
};

function mapError(err) {
    if (err.fileName) {
        util.log(chalk.red(err.name) + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/app/js/', '')) + ': ' + 'Line ' + chalk.magenta(err.lineNumber) + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column) + ': ' + chalk.blue(err.description));
    } else {
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.message));
    }
}

function bundle(bundler) {
    var bundleTimer = duration('Javascript bundle time');
    bundler
    .bundle()
    .on('error', mapError)
    .pipe(source('autoload.js'))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    // .pipe(uglify())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.outputDir))
    .pipe(notify({
        "title": "Gulp Information",
        // "sound": true,
        // "icon": path.join(__dirname, "gulpbuild.png"),
        "message": "Generated file: <%= file.relative %> at <%= options.date %>",
        "onLast": true,
        "templateOptions": {
            date: new Date()
        }
    }))
    .pipe(bundleTimer);
}

gulp.task('bundle', function() {
	var args    = merge(watchify.args, { debug: true });
	var bundler = browserify(config.js.src, args)
        .plugin(watchify, {
            ignoreWatch: [
                '**/package.json',
                '**/node_modules/**',
                '**/bower_components/**'
            ]
        })
        .transform(babelify, {
            presets: [
                'es2015',
                'react'
            ],
            plugins: [
                'transform-es2015-for-of'
            ]
        });

    gulp.watch([
    	'./assets/js/bundle.min.js',
    	'./app/autoload.js',
		'./app/**/*.js'
	]);
    bundle(bundler);
    bundler.on('update', function() {
        bundle(bundler);
    });
});

gulp.task('default', ['bundle']);
