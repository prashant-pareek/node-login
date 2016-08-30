var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css'
  ])
    .pipe(gulp.dest('public/stylesheets'));

  gulp.src([
    'bower_components/font-awesome/fonts/*'     
  ])
    .pipe(gulp.dest('public/fonts'));

  gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/tether/dist/js/tether.min.js'
  ])
    .pipe(gulp.dest('public/javascripts'));
});