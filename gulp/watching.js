var $ = require('./common.js');
var config = require('./config.js');

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

$.gulp.task('watching', function() {
	browserSync({
		server: { baseDir: config.dest },
		middleware: [ historyApiFallback ],
		notify: false,
		open: false
	});

	$.gulp.watch(config.src + 'jade/**/*.jade', ['templates']);
	$.gulp.watch(config.src + 'scss/**/*.scss', ['sass']);
	$.gulp.watch(config.src + 'imgs/**/*.{png,jpg,jpeg,gif,svg}', ['imgs']);
	$.gulp.watch(config.src + 'js/**/*.js', ['lint-js']);
	$.gulp.watch(config.watchDest, function(e) {
		$.gulp.src(e.path)
			.pipe(browserSync.reload({ stream:true }));
	});

});