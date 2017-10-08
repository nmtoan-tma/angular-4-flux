'use strict';

/**
 * Configuration lite server 
 */
const history = require("connect-history-api-fallback");

const server = require('./server.conf')();

module.exports = () => {
    let DEV_SERVER = {};
    let TEST_SERVER = {};
    let PROD_SERVER = {};

    return {
        DEV_SERVER: {
            port: server.dev_environment.port,
            host: server.dev_environment.host,
            root: server.dev_environment.base_dir,
            livereload: false,
            middleware: function (connect, opt) {
                return [
                    history({})
                ]
            },
            debug: true
        },
        TEST_SERVER: {
            port: server.test_environment.port,
            host: server.test_environment.host,
            root: server.test_environment.base_dir,
            wait: 1000,
            livereload: false,
            middleware: function (connect, opt) {
                return [
                    history({})
                ]
            }
        },
        PROD_SERVER: {
            port: server.prod_environment.port,
            host: server.prod_environment.host,
            root: server.prod_environment.base_dir,
            wait: 1000,
            livereload: false,
            middleware: function (connect, opt) {
                return [
                    history({})
                ]
            }
        }
    }
};
