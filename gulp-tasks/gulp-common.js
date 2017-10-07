'use strict';

const gulp = require('gulp');
const del = require('del');
const plugins = require('gulp-load-plugins')();
const paths = require('path');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const htmlmin = require('gulp-htmlmin');
const dotenv = require('dotenv');
const createFile = require("create-file");
const git = require("git-rev-sync");
const b2v = require("buffer-to-vinyl");
const ngConfig = require("gulp-ng-config");

const conf = require('../conf/gulp.conf');
const server = require('../conf/server.conf')();

dotenv.load();
dotenv.config();

let OPTIONS = {
    DO_UGLIFY: false,
    DO_SOURCEMAPS: true,
    watchInterval: 1000
};

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
        makeConfigFileTask: function () {
            let json = JSON.stringify({});

            return b2v.stream(new Buffer(json), 'config.js')
                .pipe(ngConfig(conf.app.moduleName, {
                    createModule: false,
                    constants: {
                        SERVICE_URL: server.service_url,
                        API_PROTOCOL: server.api_protocol,
                        API_HOST: server.api_host,
                        API_PORT: server.api_port,
                        API_DOMAIN: server.api_domain
                    }
                }))
                .pipe(gulp.dest(conf.paths.build + '/js/'));
        },
        delConfigFileTask: function () {
            return del([
                conf.paths.build + '/js/config.js'
            ]);
        },
        vendorCssTask: function(){
            
        }
    }
};
