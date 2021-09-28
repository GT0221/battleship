/* eslint-disable */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        loaders: [
          {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
          {loader: 'url-loader', test: /\.gif$/},
          {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
        ],
    },
};