var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
    return gulp.src('app/js/script.js')
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/js/**/*.js', ['js'])
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('app/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['sass', 'watch', 'webserver']);