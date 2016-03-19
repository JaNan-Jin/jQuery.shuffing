var gulp = require('gulp');

var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');

var rename = require('gulp-rename');

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('dest'));
});

gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(gulp.dest('dest/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.mini' }))
        .pipe(gulp.dest('dest/js'));
});

gulp.task('img', function() {
    gulp.src('images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dest/images'))
});


gulp.task('auto', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('images/*.*', ['img']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['js', 'img','html', 'auto'])