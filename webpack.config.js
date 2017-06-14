const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'www');
const sourcePath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production' ? true : false;

const config = {
    entry: {
        js: './src/app/app.jsx'
    },
    devServer: {
        contentBase: 'src/www',
        hot: true,
        inline: true,
        port: 3000
    },
    output: { path: buildPath, filename: 'bundle.min.js' },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new TransferWebpackPlugin([{ from: 'www' }], sourcePath),
        new webpack.DefinePlugin({ PRODUCTION: production })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: [nodeModulesPath],
                loaders: [
                    'react-hot-loader',
                    'babel-loader?' +
                        JSON.stringify({ presets: ['react', 'es2015'] })
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                )
            }
        ]
    },
    resolve: { 
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: production ? false : 'source-map'
};

if (production) {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ].concat(config.plugins);
}

module.exports = config;