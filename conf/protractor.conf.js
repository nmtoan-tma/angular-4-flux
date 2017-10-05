/**
 * Configuration automation test
 */

var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');
var dotenv = require('dotenv');
dotenv.load();
var ENV = dotenv.config().parsed || {};

exports.config = {
    basePath: '../',
    allScriptsTimeout: 11000,
    specs: [
        'test/e2e/**/*.e2e.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: ENV.AUTOMATION_SERVER,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    frameworks: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        includeStackTrace: false,
        print: function () {

        }
    },
    // beforeLaunch: function(){
    //     require('ts-node').register({
    //         project: 'test/e2e/tsconfig.e2e.json'
    //     });
    // },
    onPrepare: function () {
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            docTitle: 'Query Tool Execution Report',
            docName: 'automation_report.html',
            // takeScreenShotsOnlyForFailedSpecs: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: 'test_out/e2e/',
            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                var currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear();

                var validDescriptions = descriptions.map(function (description) {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year,
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());
    }
};