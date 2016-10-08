'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');
var cssbeautify = require('gulp-cssbeautify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('./sass/**/main.scss')
    // gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init('/'))
        .pipe(sass().on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(cssbeautify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});