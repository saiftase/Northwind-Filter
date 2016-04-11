var gulp = require('gulp');
var sass = require('gulp-sass');

var src = './assets/stylesheets/**/*.scss';

gulp.task('sass', function () {
  gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch(src, ['sass']);
});