var gulp = require('gulp');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');

// var concat = require('gulp-concat');
// var notify = require('gulp-notify');

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 60 version']}),
    require('precss'),
    cssnano(),
  ];
  return gulp.src('./app/styles/veon.pcss')
    .pipe(postcss([
      require("postcss-import")(),
      // require("postcss-url")(),
      require("postcss-cssnext")(),
      // require("cssnano")({ autoprefixer: false }),
    ]))
    .pipe(rename('veon.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  return gulp.src('./app/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(rename('veon.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
  return gulp.src('./app/*.html')
    .pipe(htmlreplace({
        css: {
            src: 'veon.css',
            tpl: '<link href="%s" rel="stylesheet">'
        },
        js: {
            src: '/veon.js',
            tpl: '<script src="%s"></script>'
        }
     }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('img', function () {
  return gulp.src('./app/img/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('vendor', function () {
  return gulp.src('./app/vendor/**/*')
    .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('fonts', function () {
  return gulp.src('./app/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('dist', ['build'], function() {
  connect.server({
    root: './dist',
    port: 8888,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch([
    './app/*.js',
    './app/*.html',
    './app/styles/*.pcss',
  ], [
    'build',
    'reload',
  ]);
});

gulp.task('reload', function () {
  gulp.src('./dist/index.html')
  .pipe(connect.reload());
});


gulp.task('default', ['dist', 'watch']);
gulp.task('build', ['css', 'js', 'html', 'img', 'vendor', 'fonts']);
