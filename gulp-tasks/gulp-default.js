'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const conf = require('../conf/gulp.conf');

module.exports = () => {
    return {
        defaultTask: () => {
            return runSequence(
                'clean', [
                    'copy-fonts',
                    'copy-images',
                    'vendor-css',
                    'vendor-js',
                    'tslint',
                    'lint-fix',
                    'make-config-file',
                    'copy-views',
                    'copy-index',
                    'sass',
                    'compile-ts'
                ],
                'server-dev-start',
                'watch',
                conf.errorHandler);
        }
    };
};
