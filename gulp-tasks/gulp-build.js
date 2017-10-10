'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const conf = require('../conf/gulp.conf');

module.exports = () => {
    return {
        buildTask: () => {
            return runSequence(
                'clean', [
                    'copy-fonts',
                    'copy-images',
                    'vendor-js',
                    'tslint',
                    'lint-fix',
                    'make-config-file',
                    'make-version-file',
                    'copy-views-build',
                    'copy-index-build',
                    'vendor-css-build',
                    'sass-build',
                    'compile-ts-build'
                ],
                conf.errorHandler);
        }
    };
};
