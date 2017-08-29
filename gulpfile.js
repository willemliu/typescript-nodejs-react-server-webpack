var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {"module": "commonjs"});
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

process.env.NODE_ENV = 'development';

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('watch', ['default'], function() {
    gulp.watch(['./src/**/*'], ['default']);
});

gulp.task('watch-release', ['release'], function() {
    gulp.watch(['./src/**/*'], ['release']);
});

gulp.task('default', ['ts'], function() {
  return gulp.src('./src/main.tsx?')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('production', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('release', ['production', 'default']);
    
/**
 * Build web client
 */
gulp.task('webpack', function() {
  return gulp.src('./src/main.tsx?')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('./dist/js'));
});

/**
 * Build NodeJS server application
 */
gulp.task('ts', ['copy-mustache'], function() {
    var tsResult = tsProject.src()
    .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('copy-mustache', function() {
    return gulp.src('src/**/*.mst').pipe(gulp.dest('./dist'));
});
  