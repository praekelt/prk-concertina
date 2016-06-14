var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;
var excludes = /(node_modules|bower_components)/;

// Dependencies
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    SassLintPlugin = require('sasslint-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Autoprefixer = require('autoprefixer'),
    CssNano = require('cssnano'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

// Plugins
var extractSCSS = new ExtractTextPlugin('[name].css'),
    sassLint = new SassLintPlugin({
        'configFile': '.sass-lint.yml',
        'context': './src/styles',
        'failOnError': false,
        'failOnWarning': false
    }),
    cleanWebpack = new CleanWebpackPlugin(['./dist/'], {
        'root': __dirname,
        'verbose': true,
        'dry': false
    });

// Webpack Config Object
var config = {
    'entry': {
        'prk-concertina': __dirname + '/src/main.js'
    },
    'output': {
        'path': __dirname + '/dist',
        'publicPath': '/dist/',
        'filename': '[name].js',
        'library': 'Concertina',
        'libraryTarget': 'umd',
        'umdNamedDefine': true
    },
    'resolve': {
        'root': path.resolve('./src'),
        'extensions': [
            '',
            '.js',
            '.scss',
            '.css'
        ]
    },
    'module': {
        'preLoaders': [
            {
                'test': /\.j[s|sx]$/,
                'loader': 'eslint',
                'exclude': excludes
            }
        ],
        'loaders': [
            {
                'test': /\.j[s|sx]$/,
                'loader': 'babel',
                'exclude': excludes
            },
            {
                'test': /\.j[s|sx]$/,
                'loader': 'eslint',
                'exclude': excludes
            },
            {
                'test': /\.s[a|c]ss$/,
                'loader': extractSCSS.extract('style-loader', 'css!postcss!sass'),
                'exclude': excludes
            }
        ]
    },
    'plugins': [
        cleanWebpack,
        sassLint,
        extractSCSS
    ],
    'sassLoader': {
        'precision': 3,
        'indentWidth': 4
    },
    'postcss': function() {
        return [Autoprefixer({
            'browsers': ['> 1%', 'IE 7', 'IE 8', 'IE 9']
        })];
    },
}

module.exports = config;
