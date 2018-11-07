const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

const defaultPlugins = [
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
// overlay：出现错误时在网页上展示这个错误，方便定位问题的位置
const devServer = {
    port:8000,
    host:'0.0.0.0',
    overlay:{
        errors: true
    },
    // 单页应用的时候，将没有映射的地址映射到index.html这个入口文件上
    // historyFallack: {},
    // open: true
    // 热更新
    hot: true  
}
let config

if(isDev){
    // merge方法会返回一个新的Object，不会修改baseConfig
    config = merge(baseConfig, {
        // 放方便在浏览器中调试代码，映射成是自己本地写的代码，而不是编译之后的
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [
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
                }
            ]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
}else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            // 框架代码和业务代码拆分
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({
                        fallback: 'style-loader',
                        use: [
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
                    })
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[chunkHash:8].css')
        ]),
        optimization: {
            splitChunks: {
                cacheGroups: {
                  commons: {
                    chunks: 'initial',
                    minChunks: 2, maxInitialRequests: 5,
                    minSize: 0
                  },
                  vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                  }
                }
            },
            runtimeChunk: true
        }
    })
}

module.exports = config;