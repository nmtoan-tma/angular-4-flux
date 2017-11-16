'use strict';

const gulp = require('gulp');
const connect = require("gulp-connect");
const runSequence = require("run-sequence").use(gulp);

const conf = require('../conf/gulp.conf');

module.exports = () => {
    let SERVER_DEV = connect;
    return {
        devServerTask: () => {
            gulp.src([
                conf.paths.build + '/**/www.js'
            ])
        },
        defaultTask: () => {
            return runSequence('dev-backend', conf.serverCallBack);
        }
    }
};
