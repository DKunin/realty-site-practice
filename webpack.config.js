const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'www');
const sourcePath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const production = process.argv.find(element => element === '--production')
    ? true
    : false;

const config = {
    entry: {
        js: './src/app/app.jsx'
        // html: './src/www/index.html'
    },
    devServer: {
        contentBase: 'src/www',
        hot: true,
        inline: true,
        port: 3000
    },
    output: { path: buildPath, filename: 'bundle.min.js' },
    plugins: [
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
            } //,
            // { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' }
        ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    devtool: 'source-map'
};

if (production) {
    process.env.NODE_ENV = 'production';

    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ].concat(config.plugins);
}

module.exports = config;
