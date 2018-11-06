const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    // stylus本身会生成sourceMap，sourceMap设置为true之后会自动使用前面已经生成的sourceMap
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit:1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // webpack打包时判断是开发环境还是正式环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        // webpack打包时打包出一个HTML文件作为入口文件
        new HTMLPlugin()      
    ]
}

if(isDev){
    // 放方便在浏览器中调试代码，映射成是自己本地写的代码，而不是编译之后的
    config.devtool = '#cheap-module-eval-source-map'
    // overlay：出现错误时在网页上展示这个错误，方便定位问题的位置
    config.devServer = {
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors: true
        },
        // 单页应用的时候，将没有映射的地址映射到index.html这个入口文件上
        // historyFallack: {

        // },
        // open: true
        // 热更新
        hot: true  
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;