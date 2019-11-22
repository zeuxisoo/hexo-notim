var gulp = require('gulp'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    cssmin = require('gulp-cssmin')
    rename = require('gulp-rename')
    sequence = require('gulp-sequence');

// Actions
function concatCSS() {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'assets/css/app.css',
       ])
       .pipe(concat('bundle.css'))
       .pipe(gulp.dest('source/css/'));
}

function concatJS() {
    return gulp.src([
                'node_modules/jquery/dist/jquery.js',
                'node_modules/bootstrap/dist/js/bootstrap.js',
                'assets/js/app.js',
           ])
           .pipe(concat('bundle.js'))
           .pipe(gulp.dest('source/js/'));
}

function copyBootstrapFonts() {
    return gulp.src('node_modules/bootstrap/dist/fonts/*')
               .pipe(gulp.dest('source/fonts/'));
}

function compressCSS() {
    return gulp.src('source/css/bundle.css')
               .pipe(cssmin())
               .pipe(rename('bundle.min.css'))
               .pipe(gulp.dest('source/css/'));
}

function compressJS() {
    return gulp.src('source/js/bundle.js')
               .pipe(uglify())
               .pipe(rename('bundle.min.js'))
               .pipe(gulp.dest('source/js/'));
}

// Watcher
function watch() {
    gulp.watch('assets/css/*.css', bundleCSS);
    gulp.watch('assets/js/*.js', bundleJS);
}

// Bundle Actions
const bundleCSS = gulp.series(concatCSS, copyBootstrapFonts, compressCSS, function finishBundleCSS(done) {
    done();
});

const bundleJS = gulp.series(concatJS, compressJS, function finishBundleJS(done) {
    done();
});

// Default action
var build = gulp.parallel(bundleCSS, bundleJS);

// Exports
exports.default = build;
