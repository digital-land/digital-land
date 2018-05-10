var gulp          = require("gulp");
var sass          = require("gulp-sass");
var clean         = require('gulp-clean');

// set paths ...
var config = {
	scssPath: "src/scss",
	destPath: "static/css"
}

// Delete our old css files
gulp.task('clean-css', function () {
  return gulp.src('static/css/**/*', {read: false})
    .pipe(clean());
});

// compile scss to CSS
gulp.task("scss", ['clean-css'], function() {
	return gulp.src( config.scssPath + '/*.scss')
	.pipe(sass({outputStyle: 'expanded',
		includePaths: [ 'src/govuk_frontend_toolkit/stylesheets',
			'src/govuk_template/assets/stylesheets',
			'src/govuk_elements/assets/sass']})).on('error', sass.logError)
	.pipe(gulp.dest(config.destPath))
})

// Watch src folder for changes
gulp.task("watch", ["scss"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
});

// Set watch as default task
gulp.task("default", ["watch"]);