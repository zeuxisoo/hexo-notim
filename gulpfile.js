var gulp = require('gulp'),
    concat = require('gulp-concat');

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

gulp.task('default', ['concat:css', 'concat:js', 'copy:bootstrap:fonts'], function() {
    gulp.watch('assets/css/*.css', ['concat:css']);
    gulp.watch('assets/js/*.js', ['concat:js']);
});
