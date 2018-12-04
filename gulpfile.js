const gulp          = require("gulp");
const sass          = require("gulp-sass");
const clean         = require('gulp-clean');
const rev           = require('gulp-rev');

// set paths ...
const config = {
	scssPath: "src/scss",
	destPath: "static/stylesheets",
  assetPath: "static/govuk-frontend/assets"
}

// Delete our old css files
gulp.task('clean-css', function cleanCss () {
  return gulp.src('static/stylesheets/**/*')
    .pipe(clean());
});

// compile scss to CSS
gulp.task("scss", function compileSass () {
  return gulp.src( config.scssPath + '/*.scss')
  .pipe(sass({outputStyle: 'expanded',
    includePaths: [ 'src/govuk_frontend_toolkit/stylesheets',
      'src/govuk_template/assets/stylesheets',
      'src/govuk_elements/assets/sass',
      'src/govuk-frontend']})).on('error', sass.logError)
    .pipe(rev())
  .pipe(gulp.dest(config.destPath))
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('./data'));
})

// Watch src folder for changes
gulp.task("watch", function watchAssets () {
  gulp.watch("src/scss/**/*", gulp.series("scss"));
});

gulp.task("copy-assets", function copyAssets () {
  return gulp.src('src/govuk-frontend/assets/**/*')
    .pipe(gulp.dest(config.assetPath));
});

gulp.task("generate", gulp.series("copy-assets", "scss"));

// Set watch as default task
gulp.task("default", gulp.series("watch"));

