var gulp = require('gulp')
var jsFiles = ['*.js', 'src/**/*.js']
var jshint = require('gulp-jshint')

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint())
})