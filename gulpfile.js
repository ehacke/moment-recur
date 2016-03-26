var gulp = require('gulp');

var Server = require('karma').Server;
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  var server = new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);

  return server.start();
});

/**
 * Run test continually
 */
gulp.task('test:dev', function (done) {
  var server = new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);

  return server.start();
});

gulp.task('compress', function(done) {
  return gulp.src('moment-recur.js')
    .pipe(uglify('moment-recur.min.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('default', function() {
  return runSequence('test','compress')
});
