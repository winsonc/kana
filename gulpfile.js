var gulp             = require('gulp')
,	gutil            = require('gulp-util')
,	concat           = require('gulp-concat')

// SASS
,	sass             = require('gulp-sass')
,	csso             = require('gulp-csso')

// Coffeescript
,	coffee           = require('gulp-coffee')
,	uglify           = require('gulp-uglify')

;

// SASS
gulp.task('sass', function () {
	return gulp
		.src('src/assets/stylesheets/*.sass')
		.pipe(
			sass({
				includePaths: ['src/assets/stylesheets'],
				errLogToConsole: true
			})
		)
		.pipe(csso())
		.pipe(gulp.dest('dist/assets/stylesheets'))
		.pipe(livereload());
});

gulp.task('css', function () {
	return gulp
		.src([
			'node_modules/bootstrap/dist/css/bootstrap.min.css'
		])
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./'));
});

// Coffeescript
gulp.task('coffeescript', function() {
	return gulp
		.src('src/assets/scripts/*.coffee')
		.pipe(coffee({ bare: true }).on('error', gutil.log))
		// .pipe(uglify())
		.pipe(gulp.dest('dist/assets/scripts'))
		.pipe(livereload());
});

// Javascript (vendor)
gulp.task('javascript', function() {
	return gulp
		.src([
			'node_modules/core-js/client/shim.min.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/rxjs/bundles/Rx.umd.js',
			'node_modules/@angular/core/core.umd.js',
			'node_modules/@angular/common/common.umd.js',
			'node_modules/@angular/compiler/compiler.umd.js',
			'node_modules/@angular/platform-browser/platform-browser.umd.js',
			'node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
			'node_modules/underscore/underscore-min.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./'));
});

// Watch
gulp.task('watch', function (event) {
	livereload.listen(35729, function (err) {
		if (err) {
			return console.log(err);
		}
	});

	gulp.watch('src/assets/stylesheets/*.sass', ['css']);
	gulp.watch('src/assets/scripts/*.coffee', ['coffeescript']);
	gulp.watch('src/*.jade', ['html']);
});

gulp.task('default', ['sass', 'coffeescript', 'html', 'watch']);
