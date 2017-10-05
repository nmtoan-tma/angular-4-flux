/**
 * Configuration lite server 
 */

const server = require('./server.conf');
const history = require("connect-history-api-fallback");

module.exports = function () {
    const DEV_SERVER = {
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
    };

    const TEST_SERVER = {
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
    };

    const PROD_SERVER = {
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
    };
};