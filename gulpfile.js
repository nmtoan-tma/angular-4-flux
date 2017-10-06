'use strict';

const gulp = require('gulp');
const del = require('del');
const plugins = require("gulp-load-plugins")();
const paths = require("path");

const gulpCommon = require('./gulp-tasks/gulp-common')();
const gulpBuild = require('./gulp-tasks/gulp-build');
const gulpDefault = require('./gulp-tasks/gulp-default');
const gulpDeploy = require('./gulp-tasks/gulp-deploy');

gulp.task('clean', gulpCommon.cleanTask);
gulp.task('copy-views', gulpCommon.copyViewsTask);
gulp.task('copy-images', gulpCommon.copyImagesTask);
gulp.task('copy-fonts', );
gulp.task('copy-index', );
gulp.task('sass', );
gulp.task('vendor-css', );
gulp.task('lint: fix', );
gulp.task('lint: watch', );
gulp.task('get-build-info', );
gulp.task('make-version-file', );
gulp.task('make-deploy-folder', );
gulp.task('copy-file-to-deploy', );



