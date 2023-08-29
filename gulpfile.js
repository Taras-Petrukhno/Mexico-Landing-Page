import gulp from "gulp"
import paths from "./gulp/config/paths.js"
import plugins from "./gulp/config/plugins.js"

global.app = {
    gulp,
    paths,
    plugins,
    isProd: false
}

// Tasks
import clear from './gulp/tasks/clear.js'
import copy from './gulp/tasks/copy.js'
import scss from './gulp/tasks/scss.js'
import js from './gulp/tasks/js.js'
import server from './gulp/tasks/server.js'

function watcher() {
    gulp.watch(paths.copy.src, copy).on('change', plugins.browserSync.reload)
    gulp.watch(paths.js.watch, js).on('change', plugins.browserSync.reload)
    gulp.watch(paths.scss.watch, scss).on('change', plugins.browserSync.reload)
}

const mainTasks = gulp.series(clear, copy, scss, js)
const dev = gulp.parallel(mainTasks, server, watcher)
const build = mainTasks

export default dev
export { build }

