var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect')
    watch = require('gulp-watch'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint');

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
  gulp.src(['./js/**/*.js'])
      .pipe(jshint())
      .pipe(jscs())
      .pipe(jscs.reporter())
      .pipe(uglify())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./build'));
});

gulp.task('serve', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src(['build/*.css', 'build/*.js'])
      .pipe(watch(['./sass/**/*.scss', './js/**/*.js']))
      .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', [
  'sass',
  'js',
  'serve',
  'livereload',
  'watch'
]);
