'use strict';

const gulp = require('gulp');
const del = require('del');
const plugins = require('gulp-load-plugins')();
const paths = require('path');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const htmlmin = require('gulp-htmlmin');
const createFile = require('create-file');
const b2v = require('buffer-to-vinyl');
const ngConfig = require('gulp-ng-config');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const typescript = require('gulp-typescript');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');
const runSequence = require('run-sequence').use(gulp);
const uglify = require('gulp-uglify');

const conf = require('../conf/gulp.conf');
const server = require('../conf/server.conf')();
const tsProject = tsc.createProject('./tsconfig.json');
const gulpDefault = require('./gulp-default')();

module.exports = () => {
    let OPTIONS = {
        DO_UGLIFY: false,
        DO_SOURCEMAPS: true,
        watchInterval: 1000
    };

    var sass = () => {
        return gulp.src(conf.paths.src + '/styles/styles.scss')
            .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.init()))
            .pipe(plugins.sass())
            .on('error', conf.errorHandler)
            .pipe(plugins.rename(function (path) {
                path.basename = path.basename.replace('styles', 'app.bundle');
            }))
            .pipe(cleanCSS())
            .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(conf.paths.build + '/css/'));
    };

    var tsCompile = () => {
        let tsResult = gulp.src([
                conf.paths.src + '/**/*.ts'
            ])
            .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.init()))
            .pipe(tsProject());

        return tsResult.js
            .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(conf.paths.build + '/'));
    };

    var minifyHtml = () => {
        return gulp.src([
                conf.paths.src + '/app/**/*.html'
            ])
            .pipe(plugins.if(OPTIONS.DO_UGLIFY, htmlmin(conf.htmlmin)))
            .pipe(gulp.dest(conf.paths.build + '/views/'));
    };

    var minifyIndex = () => {
        return gulp.src(conf.paths.src + '/index.html')
            .pipe(plugins.if(OPTIONS.DO_UGLIFY, htmlmin(conf.htmlmin)))
            .pipe(gulp.dest(conf.paths.build + '/'));
    };

    var vendorCSS = () => {
        return gulp.src(conf.paths.src + '/assets/css/*.css')
                .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.init()))
                .pipe(plugins.concat('vendor.bundle.css'))
                .pipe(cleanCSS())
                .pipe(plugins.if(OPTIONS.DO_SOURCEMAPS, plugins.sourcemaps.write('.')))
                .pipe(gulp.dest(conf.paths.build + '/css/'));
    };

    return {
        cleanTask: () => {
            return del([
                conf.paths.build + '/**/*'
            ], {
                force: true
            });
        },
        copyViewsWithMinifyTask: () => {
            OPTIONS.DO_UGLIFY = true;
            minifyHtml();
        },
        copyViewsWithoutMinifyTask: () => {
            OPTIONS.DO_UGLIFY = false;
            minifyHtml();
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
        copyIndexWithMinifyTask: () => {
            OPTIONS.DO_UGLIFY = true;
            minifyIndex();
        },
        copyIndexWithoutMinifyTask: () => {
            OPTIONS.DO_UGLIFY = false;
            minifyIndex();
        },
        sassWithMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = true;
            sass();
        },
        sassWithoutMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = false;
            sass();
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
        vendorCssTaskWithMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = true;
            vendorCSS();
        },
        vendorCssTaskWithoutMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = false;
            vendorCSS();
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
                    formatter: 'verbose'
                }))
                .pipe(tslint.report());
        },
        compileTsWithMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = true;
            tsCompile();
        },
        compileTsWithoutMapTask: () => {
            OPTIONS.DO_SOURCEMAPS = false;
            tsCompile();
        },
        watchTask: () => {
            plugins.livereload.listen();

            gulp.watch(conf.paths.src + '/assets/images/**', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('copy-images');
            });

            gulp.watch(conf.paths.src + '/assets/fonts/**', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('copy-fonts');
            });

            gulp.watch(conf.paths.src + '/assets/css/**', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('vendor-css');
            });

            gulp.watch(conf.paths.src + '/styles/**/*.scss', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('sass');
            });

            gulp.watch(conf.paths.src + '/app/**/*.ts', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence(
                    'tslint',
                    'compile-ts'
                );
            });

            gulp.watch(conf.paths.src + '/index.html', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('copy-index');
            });

            gulp.watch(conf.paths.src + '/app/**/*.html', {
                interval: OPTIONS.watchInterval
            }, () => {
                runSequence('copy-views');
            });
        }
    }
};
