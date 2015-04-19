var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var wiredep = require('wiredep');
var inject = require('gulp-inject');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var config = {
  bowerDir: './bower_components'
};

// clean /vendor 
gulp.task('clean', function(){
  del([
      './vendor/**/*.*',
      '!./vendor'
    ]);
});
// move all bower js to /vendor - 'index' task will inject it 
// FIX: angular.js is being loaded through functions.php
// to be sure that it is the first to be included through wp_head()
gulp.task('vendor-scripts',  function() {

  return gulp.src(wiredep().js)

    .pipe(gulp.dest('./vendor'));

});
// move all bower css to /vendor - 'index' task will inject it 
gulp.task('vendor-css',  function() {

  return gulp.src(wiredep().css)

    .pipe(gulp.dest('./vendor'));

});
// Inject app deps into index.php
gulp.task('index', function(){
  gulp.src('./index.php')
  .pipe(inject(
    gulp.src([ './vendor/**/*.js', './app/**/*.js'], {read: false}), {
      transform: function (filepath) {
        return '<script src="wp-content/themes/simplestheme' + filepath +'"></script>';
        return inject.transform.apply(inject.transform, arguments);
      }
    }
  ))
  .pipe(gulp.dest('./'));
})
// Font Awesome
gulp.task('fontAwesome', function() {
  return gulp.src(config.bowerDir + '/components-font-awesome/fonts/**.*')
    .pipe(gulp.dest('./fonts'));
});
// Sass 
gulp.task('sass', function() {
  gulp.src('./scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
})
// Watch
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass']);
});

// Gulp Default Task
// ------------------------
gulp.task('default', ['vendor-scripts','vendor-css','index','fontAwesome', 'sass', 'watch'], function () {
  
});


