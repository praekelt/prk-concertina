var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'prk-concertina';

var plugins = [], outputFile;

if (env === 'build') {
    plugins.push (new UglifyJsPlugin({
        'minimize': true,
        'include': /\.min.js$/ 
    }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

var config = {
    'entry': {
        'prk-concertina': __dirname + '/src/main.js',
        'prk-concertina.min': __dirname + '/src/main.js'
    },
    'devtool': 'source-map',
    'output': {
        'path': __dirname + '/dist',
        'filename': '[name].js',
        'library': libraryName,
        'libraryTarget': 'umd',
        'umdNamedDefine': true
    },
    'module': {
        'loaders': [
            {
                'test': /\.j[s|sx]$/,
                'loader': 'babel',
                'exclude': /(node_modules|bower_components)/
            },
            {
                'test': /\.j[s|sx]$/,
                'loader': 'eslint',
                'exclude': /node_modules/
            }
        ]
    },
    'resolve': {
        'root': path.resolve('./src'),
        'extensions': ['', '.js']
    },
    'plugins': plugins
}

module.exports = config;
