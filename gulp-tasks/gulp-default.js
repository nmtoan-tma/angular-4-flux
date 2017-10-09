'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const conf = require('../conf/gulp.conf');

module.exports = () => {
    return {
        defaultTask: () => {
            runSequence(
                'clean', [
                    'copy-views',
                    'copy-fonts',
                    'copy-images',
                    'copy-index',
                    'vendor-css',
                    'sass',
                    'vendor-js',
                    'tslint',
                    'compile-ts',
                    'make-config-file'
                ],
                'server-dev-start',
                'watch',
                conf.errorHandler);
        }
    };
};
