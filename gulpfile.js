var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

// Gulp Sass Task 
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

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass']);
});
// Gulp Default Task
// ------------------------
gulp.task('default', ['sass', 'watch'], function () {
  
});

