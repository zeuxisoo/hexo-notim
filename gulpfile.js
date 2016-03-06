var gulp = require('gulp'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    cssmin = require('gulp-cssmin')
    rename = require('gulp-rename')
    sequence = require('gulp-sequence');

gulp.task('concat:css', function() {
    return gulp.src([
                'node_modules/bootstrap/dist/css/bootstrap.css',
                'assets/css/app.css',
           ])
           .pipe(concat('bundle.css'))
           .pipe(gulp.dest('source/css/'));
});

gulp.task('concat:js', function() {
    return gulp.src([
                'node_modules/jquery/dist/jquery.js',
                'node_modules/bootstrap/dist/js/bootstrap.js',
                'assets/js/app.js',
           ])
           .pipe(concat('bundle.js'))
           .pipe(gulp.dest('source/js/'));
});

gulp.task('copy:bootstrap:fonts', function() {
    return gulp.src('node_modules/bootstrap/dist/fonts/*')
               .pipe(gulp.dest('source/fonts/'))
});

gulp.task('compress:css', function() {
    return gulp.src('source/css/bundle.css')
               .pipe(cssmin())
               .pipe(rename('bundle.min.css'))
               .pipe(gulp.dest('source/css/'))
});

gulp.task('compress:js', function() {
    return gulp.src('source/js/bundle.js')
               .pipe(uglify())
               .pipe(rename('bundle.min.js'))
               .pipe(gulp.dest('source/js/'))
});

gulp.task('bundle:css', sequence(['concat:css', 'copy:bootstrap:fonts'], 'compress:css'));
gulp.task('bundle:js', sequence('concat:js', 'compress:js'));

gulp.task('default', sequence('bundle:css', 'bundle:js'));

gulp.task('watch', function() {
    gulp.watch('assets/css/*.css', ['bundle:css']);
    gulp.watch('assets/js/*.js', ['bundle:js']);
});
