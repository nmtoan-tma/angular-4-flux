// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const conf = require('./gulp.conf');

module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'test/spec/**/*.spec.js'
        ],
        preprocessors: {
            'test/spec/**/*.spec.js': ['@angular/cli', 'coverage']
        },
        coverageReporter: {
            dir: 'test_out/coverage',
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        },
        colors: true,
        autoWatch: true,
        frameworks: [
            'jasmine',
            '@angular/cli'
        ],
        browsers: [
            'PhantomJS'
        ],
        reporters: [
            'progress',
            'coverage',
            'html'
        ],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-junit-reporter'),
            require('karma-htmlfile-reporter'),
            require('karma-ng-html2js-preprocessor'),
            require('karma-phantomjs-launcher'),
            require('karma-coverage'),
            require('@angular/cli/plugins/karma'),
            require('karma-jasmine-html-reporter')
        ],
        htmlReporter: {
            outputFile: 'test_out/unit.html',
            pageTitle: 'mCare Unit Test'
        },
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        port: 9876,
        singleRun: false,
        angularCli: {
            environment: 'dev'
        }
    });
};