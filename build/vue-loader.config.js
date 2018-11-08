// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
    return {
        // 在.vue文件中template标签中的元素会有空格，这个值设置为true，则可以去掉空格
        preserveWhitepace: true,
        // .vue文件打包时不会单独把文件中的样式打包出来，即使引入了extract-text-webpack-plugin插件，所以提供了这个配置
        extractCss: !isDev,
        // 此设置为会使css样式名称加密，保密性增强，如果配置path这增强了可读性，但是正式环境不需要配置path
        cssModules: {
            // 此设置使vue文件中的css样式有固定的路径和命名，且只能在此文件模块中使用这个样式  [path]-[name]-[hash:base64:5]
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            // 此设置回事css样式用以“-”连接的样式名转换为驼峰命名
            camelCase: true
        },
        // hotReloader: false,  根据环境变量生成，即是否是开发环境
        // .vue文件中自定义模块
        // loaders: {
        //     "docs": docsLoader
        // },
        // preLoader: {},
        // postLoader: {}
    }
}