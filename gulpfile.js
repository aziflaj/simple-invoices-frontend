var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect')
    watch = require('gulp-watch');

gulp.task('sass', function() {
  gulp.src('./assets/sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
  gulp.src('./assets/js/**/*.js')
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
      .pipe(watch(['./assets/sass/**/*.scss', './assets/js/**/*.js']))
      .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task('default', [
  'sass',
  'js',
  'serve',
  'livereload',
  'watch'
]);
