// Uses NodeJs import syntax
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('src/popup/popup.tsx')
    }, // tells webpack where to look for files to bundle them. Builds a dependency graph
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/, // files to be loaded through this loader. Takes regex
                exclude: /node_modules/,

            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/manifest.json'),
                    to: path.resolve('dist')
                }
            ]
        }),
        new HtmlPlugin({
            title: 'React Extension',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js', // File name of the bundled file
        path: path.resolve(__dirname, 'dist'), // dist means distribution
    }
}
