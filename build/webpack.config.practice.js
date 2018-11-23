const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const defaultPlugins = [
    new VueLoaderPlugin(),
    // webpack打包时判断是开发环境还是正式环境
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    // webpack打包时打包出一个HTML文件作为入口文件
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    })
]
// overlay：出现错误时在网页上展示这个错误，方便定位问题的位置
const devServer = {
    port:8080,
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

// merge方法会返回一个新的Object，不会修改baseConfig
config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    // 放方便在浏览器中调试代码，映射成是自己本地写的代码，而不是编译之后的,webpack4中默认devtool
    // devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.styl/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    // 若是非.vue文件要使用cssModules则如下设置即可，如果不用则只加载css-loader
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         module: true,
                    //         localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
                    //     }
                    // },

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
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config;
