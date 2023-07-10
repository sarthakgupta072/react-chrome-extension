// Uses NodeJs import syntax
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/test.tsx', // tells webpack where to look for files to bundle them. Builds a dependency graph
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/, // files to be loaded through this loader. Takes regex
                exclude: /node_modules/,

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'index.js', // File name of the bundled file
        path: path.resolve(__dirname, 'dist'), // dist means distribution
    }
}
