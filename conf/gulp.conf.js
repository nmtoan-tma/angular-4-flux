'use strict';

const path = require('path');
const gutil = require('gulp-util');

exports.paths = {
    src: 'src',
    test: 'test',
    tasks: 'gulp-tasks',
    build: 'build',
    tmp: '.tmp',
    deploy: 'deploy',
    release: 'release'
};

exports.htmlmin = {
    ignoreCustomFragments: [/{{.*?}}/],
    collapseWhitespace: true
};

exports.path = {};
for (const pathName in exports.paths) {
    if (Object.prototype.hasOwnProperty.call(exports.paths, pathName)) {
        exports.path[pathName] = function () {
            const pathValue = exports.paths[pathName];
            const funcArgs = Array.prototype.slice.call(arguments);
            const joinArgs = [pathValue].concat(funcArgs);
            return path.join.apply(this, joinArgs);
        };
    }
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    return function (err) {
        gutil.log(gutil.colors.red(`[${title}]`), err.toString());
        this.emit('end');
    };
};

exports.serverCallBack = function (err) {
    if (err) {
        console.log('Sorry! Server could not be ran. Please try to again');
        console.log(err);
    } else {
        console.log('Server ran successfully!');
    }
};

exports.app = {
    moduleName: 'mcare'
}
