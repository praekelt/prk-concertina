var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;

var SassLintPlugin = require('sasslint-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Autoprefixer = require('autoprefixer'),
    CssNano = require('cssnano'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var excludes = /(node_modules|bower_components)/;

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
            },
            {
                'test': /\.s[a|c]ss$/,
                'loader': 'sasslint',
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
                'loader': ExtractTextPlugin.extract('style-loader', 'css!postcss!sass'),
                'exclude': excludes
            }
        ]
    },
    'plugins': [
        new CleanWebpackPlugin(['./dist/'], {
            'root': __dirname,
            'verbose': true,
            'dry': false
        }),
        new SassLintPlugin({
            'configFile': '.sass-lint.yml',
            'context': './src/styles',
            'failOnError': false,
            'failOnWarning': false
        }),
        new ExtractTextPlugin('[name].css')
    ],
    'sassLoader': {
        'precision': 3,
        'indentWidth': 4
    }
}

module.exports = config;
