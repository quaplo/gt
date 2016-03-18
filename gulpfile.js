var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('public/sass/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/css'))
});


gulp.task('watch', function(){
  gulp.watch('public/sass/*.scss', ['sass']);   
})