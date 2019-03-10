var gulp        = require('gulp');
var server = require('browser-sync').create();

// Static server
// gulp.watch("index.html").on('change', browserSync.reload);
// gulp.watch("main.js").on('change', browserSync.reload);
// gulp.watch("style.css").on('change', browserSync.reload);

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './'
        }
    });
    done();
}
function watch() {
    gulp.watch("index.html", reload);
    gulp.watch("main.js", reload);
    gulp.watch("style.css", reload);
}
var start = gulp.series(serve, gulp.parallel(watch));
exports.default =  start;
// const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
