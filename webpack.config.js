const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.tsx')
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        //does not allow for multiple bundle.js to arrive in dist folder
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000, //specifies port number
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.scss$|\.css$/,
            use: ['style-loader', 'css-loader', "sass-loader"],
            exclude: /node_modules/,
        },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'assets/resource'
            }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Test App',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}