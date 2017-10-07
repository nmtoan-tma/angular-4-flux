'use strict';

const gulp = require('gulp');
const del = require('del');
const plugins = require('gulp-load-plugins')();
const paths = require('path');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const htmlmin = require('gulp-htmlmin');

const conf = require('../conf/gulp.conf');

module.exports = function () {
    return {
        cleanTask: function () {
            return del([
                conf.paths.build + '/**/*'
            ], {
                force: true
            });
        },
        copyViewsTask: function () {
            return gulp.src([
                    conf.paths.src + '/app/**/*.html'
                ])
                .pipe(htmlmin(conf.htmlmin))
                .pipe(gulp.dest(conf.paths.build + '/views/'));
        },
        copyImagesTask: function () {
            return gulp.src(conf.paths.src + '/assets/images/**/*')
                .pipe(gulp.dest(conf.paths.build + '/images/'));
        },
        copyFontsTask: function () {
            return gulp.src(conf.paths.src + '/assets/fonts/**/*')
                .pipe(gulp.dest(conf.paths.build + '/fonts/'));
        },
        copyIndexTask: function () {
            return gulp.src(conf.paths.src + '/index.html')
                .pipe(gulp.dest(conf.paths.build + '/'));
        },
        sassTask: function () {
            return gulp.src(conf.paths.src + '/styles/styles.scss')
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass())
                .on('error', conf.errorHandler)
                .pipe(plugins.rename(function (path) {
                    path.basename = path.basename.replace('styles', 'app.bundle');
                }))
                .pipe(plugins.sourcemaps.write('./'))
                .pipe(gulp.dest(conf.paths.build + '/css/'));
        },
        lintFixTask: function () {
            return gulp.src([
                    conf.paths.src + '**/*.ts'
                ])
                .pipe(eslint({
                    fix: true
                }))
                .pipe(eslint.format())
                .pipe(gulp.dest(conf.paths.src + '/'));
        },
        lintWatchTask: function () {
            return gulp.watch([
                conf.paths.src + '**/*.ts'
            ], ['lint-fix']);
        },
        delVersionFileTask: function(){
            return del([
                conf.paths.build + '/js/version.js'
            ]);
        },
        delConfigFileTask: function(){
            return del([
                conf.paths.build + '/js/config.js'
            ]);
        }
    }
};
