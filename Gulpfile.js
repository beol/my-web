var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
    // gulp.watch('css/*.css').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
