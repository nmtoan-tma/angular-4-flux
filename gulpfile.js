'use strict';

const gulp = require('gulp');

const gulpCommon = require('./gulp-tasks/gulp-common')();
const gulpBuild = require('./gulp-tasks/gulp-build')();
const gulpDefault = require('./gulp-tasks/gulp-default')();
const gulpDeploy = require('./gulp-tasks/gulp-deploy')();
const gulpServer = require('./gulp-tasks/gulp-server')();

gulp.task('clean', gulpCommon.cleanTask);
gulp.task('copy-views', gulpCommon.copyViewsTask);
gulp.task('copy-images', gulpCommon.copyImagesTask);
gulp.task('copy-fonts', gulpCommon.copyFontsTask);
gulp.task('copy-index', gulpCommon.copyIndexTask);
gulp.task('sass', gulpCommon.sassTask);
gulp.task('lint-fix', gulpCommon.lintFixTask);
gulp.task('lint-watch', gulpCommon.lintWatchTask);
gulp.task('del-config-file', gulpCommon.delConfigFileTask);
gulp.task('make-config-file', gulpCommon.makeConfigFileTask);
gulp.task('vendor-css', gulpCommon.vendorCssTask);

/**
 * gulp task for deploy
 */
gulp.task('del-version-file', gulpDeploy.delVersionFileTask);
gulp.task('get-version-info', gulpDeploy.getVersionInfoTask);
gulp.task('make-version-file', gulpDeploy.makeVersionFileTask);
gulp.task('make-deploy-folder', gulpDeploy.makeDeployFolderTask);
gulp.task('copy-file-to-deploy', gulpDeploy.copyFileToDeployFolderTask);
gulp.task('make-zip-folder', ['make-deploy-folder', 'make-version-file', 'copy-file-to-deploy'], gulpDeploy.makeZipFolderTask);

/**
 * Gulp task for start server
 */
gulp.task("dev-server", gulpServer.devServerTask);
gulp.task("test-server", gulpServer.testServerTask);
gulp.task("prod-server", gulpServer.prodServerTask);
gulp.task("server-dev-start", gulpServer.serverDevStartTask);
gulp.task("server-test-start", gulpServer.serverTestStartTask);
gulp.task("server-prod-start", gulpServer.serverProdStartTask);



