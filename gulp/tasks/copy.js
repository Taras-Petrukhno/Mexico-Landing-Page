export default () => {
    return app.gulp.src(app.paths.copy.src)
    .pipe( app.gulp.dest( app.paths.copy.dest))
}