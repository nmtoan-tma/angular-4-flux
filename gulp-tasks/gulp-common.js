'use strict';

const conf = require('../conf/gulp.conf');

module.exports = function () {
    return {
        cleanTask: function () {
            return del([
                conf.paths.build + '/**/*'
            ], {
                force: true
            });
        },
        copyViewsTask: function () {
            return gulp.src([
                    conf.paths.src + '/app/**/*.html'
                ])
                .pipe(gulp.dest(conf.paths.build + '/views/'));
        },
        copyImagesTask: function () {
            return gulp.src(conf.paths.src + '/assets/images/**/*')
                .pipe(gulp.dest(conf.paths.build + '/images/'))
        }
    }
};
