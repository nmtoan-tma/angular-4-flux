'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const conf = require('../conf/gulp.conf');

module.exports = () => {
    return {
        defaultTask: () => {
            return runSequence(
                'clean', [
                    'copy-views',
                    'copy-fonts',
                    'copy-images',
                    'copy-index',
                    'vendor-css',
                    'vendor-js',
                    'tslint',
                    'compile-ts',
                    'make-config-file'
                ],
                'dev-server',
                'watch',
                conf.errorHandler);
        }
    };
};
