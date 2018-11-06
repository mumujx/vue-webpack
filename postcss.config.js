// postcss用来处理优化css文件，如一些浏览器有前缀autoprefixer会自动加上
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer()
    ]
}