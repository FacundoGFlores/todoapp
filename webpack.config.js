var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './src'
    ],
    out: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}