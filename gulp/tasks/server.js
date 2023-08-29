export default () => {
    return app.plugins.browserSync.init({
        server: {
            baseDir: app.paths.destDirPath
        }
    });
   
}