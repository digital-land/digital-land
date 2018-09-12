var gulp          = require("gulp");
var sass          = require("gulp-sass");
var clean         = require('gulp-clean');

// set paths ...
var config = {
	scssPath: "src/scss",
	destPath: "static/css",
  assetPath: "static/govuk-frontend/assets"
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
			'src/govuk_elements/assets/sass',
      'src/govuk-frontend']})).on('error', sass.logError)
	.pipe(gulp.dest(config.destPath))
})

// Watch src folder for changes
gulp.task("watch", ["scss"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
});

gulp.task('copy-assets', function() {
  gulp.src('src/govuk-frontend/assets/**/*')
    .pipe(gulp.dest(config.assetPath));
});

gulp.task("generate", ["copy-assets", "scss"]);
// Set watch as default task
gulp.task("default", ["watch"]);