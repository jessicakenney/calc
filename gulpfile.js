var gulp = require ('gulp');
var browserify = require('browserify');
var moveItToNewFile = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

var buildProduction = utilities.env.production;

gulp.task('default',function(){
  console.log("goodmorning");
});

gulp.task('jsBrowserify',['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(moveItToNewFile('app.js')) //create new file with bundled code
    .pipe(gulp.dest('./build/js')); //store this file in a JS folder, inside the
                                    // build directory where HTML reads from
});

gulp.task('concatInterface',function(){
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task("minifyScripts",["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task("build", ['clean'],function(){
  if(buildProduction){
    gulp.start('minifyScripts');
  } else{
    gulp.start('jsBrowserify');
  }
  browserSync.reload();
});

gulp.task("clean", function(){
  return del(['build','tmp']); //del takes an array of paths to delete
});

gulp.task("linter", function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('serve',function(){
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['build']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});

// gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
//   browserSync.reload();
// });
