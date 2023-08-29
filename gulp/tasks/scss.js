import dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export default () => {
    return app.gulp.src( app.paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe( app.gulp.dest( app.paths.scss.dest))
}