var gulp          = require("gulp");
var sass          = require("gulp-sass");

// set paths ...
var config = {
	scssPath: "src/scss",
	destPath: "static/css"
}

// compile scss to CSS
gulp.task("scss", function() {
	return gulp.src( config.scssPath + '/*.scss')
	.pipe(sass({outputStyle: 'expanded',
		includePaths: [ 'src/govuk_frontend_toolkit/stylesheets',
			'src/govuk_template/assets/stylesheets',
			'src/govuk_elements/assets/sass']})).on('error', sass.logError)
	.pipe(gulp.dest(config.destPath))
})

// Set scss as default task
gulp.task("default", ["scss"]);