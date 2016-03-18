var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css')
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('public/sass/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/css'))
});

gulp.task('minify-css', function() {
  return gulp.src('public/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/main-min.css'));
});

gulp.task('concat-css', function () {
  return gulp.src('public/css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('public/sass/*.scss', ['sass']);   
  gulp.watch('public/sass/*.scss', ['concat-css']);   
  gulp.watch('public/sass/*.scss', ['minify-css']);   
})