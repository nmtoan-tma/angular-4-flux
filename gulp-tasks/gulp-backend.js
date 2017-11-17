'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon')

const conf = require('../conf/gulp.conf');

module.exports = () => {
    return {
        devServerTask: function () {
            return nodemon({
                script: 'build/server/serverConf.js',
            })
        }
    }
};
