/**
 * Gulpfile for my-web project
 * 
 * This file contains all the tasks for development and production builds.
 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');

// File paths
const paths = {
  html: {
    src: './*.html',
    dest: './dist'
  },
  styles: {
    src: './css/**/*.scss',
    dest: './css',
    prodDest: './dist/css'
  },
  scripts: {
    src: './js/**/*.js',
    dest: './js',
    prodDest: './dist/js'
  },
  images: {
    src: './images/**/*',
    dest: './dist/images'
  }
};

// Clean dist folder
function clean() {
  return del(['./dist']);
}

// Process SCSS files
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Process JavaScript files
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Start BrowserSync server
function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

// Watch files for changes
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Build production files
function buildStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.prodDest))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.prodDest));
}

function buildScripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.prodDest))
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.prodDest));
}

function buildHtml() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

function buildImages() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(buildStyles, buildScripts, buildHtml, buildImages));
const dev = gulp.series(styles, scripts, serve, watch);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.default = dev;
