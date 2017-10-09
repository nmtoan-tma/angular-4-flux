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
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const typescript = require('gulp-typescript');
const tslint = require('gulp-tslint');
const tsc = require("gulp-typescript");
const runSequence = require("run-sequence").use(gulp);

const conf = require('../conf/gulp.conf');
const server = require('../conf/server.conf')();
const tsProject = tsc.createProject('./tsconfig.json');

dotenv.load();
dotenv.config();

let OPTIONS = {
    DO_UGLIFY: false,
    DO_SOURCEMAPS: true,
    watchInterval: 1000
};

module.exports = () => {
    return {
        cleanTask: () => {
            return del([
                conf.paths.build + '/**/*'
            ], {
                force: true
            });
        },
        copyViewsTask: () => {
            return gulp.src([
                    conf.paths.src + '/app/**/*.html'
                ])
                .pipe(htmlmin(conf.htmlmin))
                .pipe(gulp.dest(conf.paths.build + '/views/'));
        },
        copyImagesTask: () => {
            return gulp.src(conf.paths.src + '/assets/images/**/*')
                .pipe(imagemin())
                .pipe(gulp.dest(conf.paths.build + '/images/'));
        },
        copyFontsTask: () => {
            return gulp.src(conf.paths.src + '/assets/fonts/**/*')
                .pipe(gulp.dest(conf.paths.build + '/fonts/'));
        },
        copyIndexTask: () => {
            return gulp.src(conf.paths.src + '/index.html')
                .pipe(htmlmin(conf.htmlmin))
                .pipe(gulp.dest(conf.paths.build + '/'));
        },
        sassTask: () => {
            return gulp.src(conf.paths.src + '/styles/styles.scss')
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass())
                .on('error', conf.errorHandler)
                .pipe(plugins.rename(function (path) {
                    path.basename = path.basename.replace('styles', 'app.bundle');
                }))
                .pipe(cleanCSS())
                .pipe(plugins.sourcemaps.write('./'))
                .pipe(gulp.dest(conf.paths.build + '/css/'));
        },
        lintFixTask: () => {
            return gulp.src([
                    conf.paths.src + '**/*.ts'
                ])
                .pipe(eslint({
                    fix: true
                }))
                .pipe(eslint.format())
                .pipe(gulp.dest(conf.paths.src + '/'));
        },
        lintWatchTask: () => {
            return gulp.watch([
                conf.paths.src + '**/*.ts'
            ], ['lint-fix']);
        },
        makeConfigFileTask: () => {
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
        delConfigFileTask: () => {
            return del([
                conf.paths.build + '/js/config.js'
            ]);
        },
        vendorCssTask: () => {
            return gulp.src(conf.paths.src + '/assets/css/*.css')
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.concat('vendor.bundle.css'))
                .pipe(cleanCSS())
                .pipe(plugins.sourcemaps.write('./'))
                .pipe(gulp.dest(conf.paths.build + '/css/'));
        },
        copyAngularTask: () => {
            return gulp.src(conf.configs.angular)
                .pipe(gulp.dest(conf.paths.build + '/libs/' + '@angular/'));
        },
        copyCorejsTask: () => {
            return gulp.src(conf.configs.corejs)
                .pipe(gulp.dest(conf.paths.build + '/libs/core-js/'));
        },
        copyZonejsTask: () => {
            return gulp.src(conf.configs.zonejs)
                .pipe(gulp.dest(conf.paths.build + '/libs/zone.js/'));
        },
        copyReflectjsTask: () => {
            return gulp.src(conf.configs.reflectjs)
                .pipe(gulp.dest(conf.paths.build + '/libs/reflect-metadata/'));
        },
        copySystemjsTask: () => {
            return gulp.src(conf.configs.systemjs)
                .pipe(gulp.dest(conf.paths.build + '/libs/systemjs/'));
        },
        copyRxjsTask: () => {
            return gulp.src(conf.configs.rxjs)
                .pipe(gulp.dest(conf.paths.build + '/libs/rxjs/'));
        },
        copyAngularWebApiTask: () => {
            return gulp.src(conf.configs.angularWebApi)
                .pipe(gulp.dest(conf.paths.build + '/libs/angular-in-memory-web-api/'));
        },
        copySystemConfigFileTask: () => {
            return gulp.src(conf.configs.systemConfigFile)
                .pipe(gulp.dest(conf.paths.build + '/js/'));
        },
        copyAppTask: () => {
            return gulp.src([
                    conf.paths.src + '/**/*.js'
                ])
                .pipe(gulp.dest(conf.paths.build + '/'));
        },
        copyRespondjsTask: () => {
            return gulp.src(conf.configs.respondjs)
                .pipe(gulp.dest(conf.paths.build + '/js/'));
        },
        copyXdomainjsTask: () => {
            return gulp.src(conf.configs.xdomain)
                .pipe(gulp.dest(conf.paths.build + '/js/'));
        },
        vendorJsTask: () => {
            return runSequence(
                'copy-angular',
                'copy-corejs',
                'copy-zonejs',
                'copy-reflectjs',
                'copy-systemjs',
                'copy-rxjs',
                'copy-system-conf-file',
                'copy-respondjs',
                'copy-xdomainjs'
            );
        },
        tslintTask: () => {
            return gulp.src(conf.paths.src + '/**/*.ts')
                .pipe(tslint({
                    formatter: 'prose'
                }))
                .pipe(tslint.report());
        },
        compileTsTask: () => {
            let tsResult = gulp.src([
                    conf.paths.src + '/**/*.ts'
                ])
                .pipe(plugins.sourcemaps.init())
                .pipe(tsProject());
            return tsResult.js
                .pipe(plugins.sourcemaps.write(".", {
                    sourceRoot: conf.paths.src
                }))
                .pipe(gulp.dest(conf.paths.build + '/'));
        },
    }
};
