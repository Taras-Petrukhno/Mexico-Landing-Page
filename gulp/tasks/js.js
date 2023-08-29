import webpack from "webpack-stream";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export default () => {
    return app.gulp.src( [app.paths.js.src])
    .pipe(webpack({
        mode: "development",
        output: {
            filename: "app.bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use:[MiniCssExtractPlugin.loader,"css-loader", "sass-loader" ]
                },
                {
                    test: /\.css$/,
                    use:[MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '../css/style.bundle.css', // Назва зібраного CSS-файлу
            }),
          ],
    }))
    .pipe( app.gulp.dest( app.paths.js.dest))
}