'use strict';

const gulp = require('gulp');
const connect = require("gulp-connect");
const runSequence = require("run-sequence").use(gulp);

const liteServer = require('../conf/lite-server.conf')();
const conf = require('../conf/gulp.conf');

module.exports = function () {
    let SERVER_DEV = connect;
    let SERVER_TEST = connect;
    let SERVER_PROD = connect;

    return {
        devServerTask: function () {
            SERVER_DEV.server(liteServer.DEV_SERVER);
        },
        testServerTask: function () {
            SERVER_TEST.server(liteServer.TEST_SERVER);
        },
        prodServerTask: function () {
            SERVER_PROD.server(liteServer.PROD_SERVER);
        },
        serverDevStartTask: function () {
            return runSequence('dev-server', conf.serverCallBack);
        },
        serverTestStartTask: function () {
            return runSequence('test-server', conf.serverCallBack);
        },
        serverProdStartTask: function () {
            return runSequence('prod-server', conf.serverCallBack);
        }
    }
};
